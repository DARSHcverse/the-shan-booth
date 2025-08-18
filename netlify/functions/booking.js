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
      boothType, // ✅ NEW
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
      !boothType || // ✅ now required
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
      description: `${boothType} Booth - ${packageDuration} | ${service} (Invoice: ${invoiceNumber})`, // ✅ added boothType
    });

    // ----------------------
    // Stripe: Create Invoice (draft, not auto-finalized)
    // ----------------------
    let dueDate = Math.floor(new Date().getTime() / 1000) + (7 * 24 * 60 * 60); // 7 days from now

    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false,
      collection_method: 'send_invoice',
      description: `Booking Invoice #${invoiceNumber}`,
      metadata: {
        invoice_number: invoiceNumber,
        boothType, // ✅ added boothType to metadata
        eventDate,
        eventLocation,
      },
      due_date: dueDate,
    });

    console.log('Invoice created:', invoice.id);

    // ----------------------
    // Send Email to Customer
    // ----------------------
    try {
      await sgMail.send({
        to: email,
        from: {
          email: 'dharshansubramaniyam2@gmail.com', // ✅ verified sender
          name: 'The Shan Booth',
        },
        subject: `Your Booking Confirmation - ${invoiceNumber}`,
        html: `
          <h3>Hi ${fullName},</h3>
          <p>Thank you for booking <strong>The Shan Booth</strong>! 🎉</p>
          <p>Your booking has been confirmed.</p>
          <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${eventLocation}</p>
          <p><strong>Booth Type:</strong> ${boothType}</p>
          <p><strong>Package:</strong> ${packageDuration} – ${service}</p>
          <p><strong>Total Price:</strong> AUD ${price}</p>
          ${
            invoice.hosted_invoice_url
              ? `<p>You can securely pay your invoice using the button below:</p>
                 <p>
                   <a href="${invoice.hosted_invoice_url}" 
                      style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
                      View Invoice
                   </a>
                 </p>`
              : ''
          }
          <p>We look forward to making your event unforgettable!</p>
          <p>– The Shan Booth Team</p>
        `,
      });
      console.log('Customer email sent');
    } catch (emailErr) {
      console.error('Customer email failed:', emailErr);
    }

    // ----------------------
    // Send Admin Notification
    // ----------------------
    try {
      await sgMail.send({
        to: 'theshanbooth@gmail.com', // 📩 goes to you
        from: {
          email: 'dharshansubramaniyam2@gmail.com',
          name: 'The Shan Booth',
        },
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
          <p><strong>Booth Type:</strong> ${boothType}</p>
          <p><strong>Package Duration:</strong> ${packageDuration}</p>
          <p><strong>Service Type:</strong> ${service}</p>
          <p><strong>Price:</strong> AUD ${price}</p>
          <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
        `,
      });
      console.log('Admin email sent');
    } catch (adminErr) {
      console.error('Admin email failed:', adminErr);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking created & draft invoice sent!' }),
    };
  } catch (err) {
    console.error('Error in booking:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Failed to process booking.' }),
    };
  }
};
