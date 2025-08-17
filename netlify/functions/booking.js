const sgMail = require('@sendgrid/mail');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      fullName,
      email,
      phoneNumber,
      eventDate,
      eventLocation,
      packageDuration,
      service,
      message,
      price,
      invoiceNumber,
    } = data;

    // ✅ Validation
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !eventDate ||
      !eventLocation ||
      !packageDuration ||
      !service ||
      !price ||
      !invoiceNumber
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Required fields are missing for booking.' }),
      };
    }

    // ----------------------
    // Stripe: Create Customer
    // ----------------------
    const customer = await stripe.customers.create({
      name: fullName,
      email,
      phone: phoneNumber,
    });

    console.log('Stripe customer created:', customer.id);

    // ----------------------
    // Stripe: Add Invoice Item
    // ----------------------
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: Math.round(price * 100), // cents
      currency: 'aud',
      description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})`,
    });

    // ----------------------
    // Stripe: Create & Finalize Invoice
    // ----------------------
    let dueDate = Math.floor(new Date().getTime() / 1000) + (7 * 24 * 60 * 60); // 7 days from now

    let invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false,
      collection_method: 'send_invoice',
      description: `Booking Invoice #${invoiceNumber}`,
      metadata: { invoice_number: invoiceNumber },
      due_date: dueDate, // Set the due date to 7 days from now
    });

    console.log('Invoice created:', invoice.id);

    invoice = await stripe.invoices.finalizeInvoice(invoice.id);

    // Check if invoice is finalized successfully
    if (invoice.status !== 'open') {
      console.error('Invoice could not be finalized:', invoice.status);
      throw new Error('Invoice finalization failed');
    }

    console.log('Invoice finalized:', invoice.id);

    // ----------------------
    // Send Email to Customer (with pay link)
    // ----------------------
    if (!invoice.hosted_invoice_url) {
      throw new Error('Hosted invoice URL is missing');
    }

    await sgMail.send({
      to: email,
      from: 'theshanbooth@gmail.com',
      subject: `Your Booking Confirmation - ${invoiceNumber}`,
      html: `
        <h3>Hi ${fullName},</h3>
        <p>Thank you for booking <strong>The Shan Booth</strong>! 🎉</p>
        <p>Your booking has been confirmed.</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <p><strong>Package:</strong> ${packageDuration} – ${service}</p>
        <p><strong>Total Price:</strong> AUD ${price}</p>
        <p>You can securely pay your invoice using the button below:</p>
        <p>
          <a href="${invoice.hosted_invoice_url}" 
             style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
             Pay Invoice
          </a>
        </p>
        <p>We look forward to making your event unforgettable!</p>
        <p>– The Shan Booth Team</p>
      `,
    });

    // ----------------------
    // Send Admin Notification
    // ----------------------
    await sgMail.send({
      to: 'theshanbooth@gmail.com',
      from: 'dharshansubramaniyam2@gmail.com',
      replyTo: email,
      subject: `New Booking Request from ${fullName}`,
      html: `
        <h3>New Booking Details:</h3>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Package Duration:</strong> ${packageDuration}</p>
        <p><strong>Service Type:</strong> ${service}</p>
        <p><strong>Price:</strong> AUD ${price}</p>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking confirmed & invoice sent!' }),
    };
  } catch (err) {
    console.error('Error in booking:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Failed to process booking.' }),
    };
  }
};
