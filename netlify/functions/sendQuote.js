// netlify/functions/sendQuote.js
const sgMail = require('@sendgrid/mail');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

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

  if (!fullName || !email || !phoneNumber || !eventDate || !eventLocation || !packageDuration || !service || !price || !invoiceNumber) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Required fields are missing.' }) };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    // Send email to admin
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
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
        <p><strong>Price:</strong> AUD ${price}</p>
      `,
    });

    // Create Stripe Customer
    const customer = await stripe.customers.create({
      name: fullName,
      email,
      phone: phoneNumber,
    });

    // Create Invoice Item
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: Math.round(price * 100),
      currency: 'aud',
      description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})`,
    });

    // Create Invoice (unpaid)
    let invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false,
      metadata: { invoice_number: invoiceNumber },
    });

    invoice = await stripe.invoices.finalizeInvoice(invoice.id);

    // Send invoice email to customer
    await sgMail.send({
      to: email,
      from: 'theshanbooth@gmail.com',
      subject: `Your Booking Confirmation - ${invoiceNumber}`,
      html: `
        <h3>Hi ${fullName},</h3>
        <p>Thank you for booking The Shan Booth! Your booking has been received.</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <p>You can securely pay your invoice anytime here:</p>
        <p>
          <a href="${invoice.hosted_invoice_url}" style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
            Pay Invoice
          </a>
        </p>
        <p>– The Shan Booth Team</p>
      `,
    });

    // Return only confirmation (do not redirect)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking confirmed!' }),
    };
  } catch (err) {
    console.error('Error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to process booking.' }) };
  }
};
