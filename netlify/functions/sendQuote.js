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

  // Validate booking form fields
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
    return { statusCode: 400, body: JSON.stringify({ error: 'Required fields are missing.' }) };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    // ----------------------------
    // 1️⃣ Send email to admin
    // ----------------------------
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

    // ----------------------------
    // 2️⃣ Create Stripe Customer
    // ----------------------------
    const customer = await stripe.customers.create({
      name: fullName,
      email,
      phone: phoneNumber,
    });

    // ----------------------------
    // 3️⃣ Create Invoice Item
    // ----------------------------
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: Math.round(price * 100), // convert AUD to cents
      currency: 'aud',
      description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})`,
    });

    // ----------------------------
    // 4️⃣ Create Invoice (unpaid)
    // ----------------------------
    let invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false, // DO NOT auto finalize
      metadata: { invoice_number: invoiceNumber },
    });

    // Finalize invoice manually to generate hosted_invoice_url
    invoice = await stripe.invoices.finalizeInvoice(invoice.id);

    if (!invoice.hosted_invoice_url) {
      console.error('Invoice URL not generated:', invoice);
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to generate invoice URL.' }) };
    }

    // ----------------------------
    // 5️⃣ Send invoice email to customer
    // ----------------------------
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
        <p>Click below to securely pay your invoice:</p>
        <p>
          <a href="${invoice.hosted_invoice_url}" 
             style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
            Pay Invoice
          </a>
        </p>
        <p>– The Shan Booth Team</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Booking & invoice created!', invoiceUrl: invoice.hosted_invoice_url }),
    };
  } catch (err) {
    console.error('Stripe or SendGrid Error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Stripe invoice creation failed.' }) };
  }
};
