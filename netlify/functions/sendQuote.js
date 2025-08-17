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
    name,
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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Determine form type
  const isQuickQuote =
    fullName && phoneNumber && eventDate && eventLocation && packageDuration && service && !price;

  const isBooking =
    fullName && email && phoneNumber && eventDate && eventLocation && packageDuration && service && price && invoiceNumber;

  const isContactForm =
    name && email && message && !isQuickQuote && !isBooking;

  if (!isQuickQuote && !isBooking && !isContactForm) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Required fields are missing.' }) };
  }

  try {
    let subject, html;

    // ----------------------
    // Quick Quote
    // ----------------------
    if (isQuickQuote) {
      subject = `New Quick Quote Request from ${fullName}`;
      html = `
        <h3>New Quick Quote Request Details:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Package Duration:</strong> ${packageDuration}</p>
        <p><strong>Service Type:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
      `;
    }

    // ----------------------
    // Booking Form
    // ----------------------
    else if (isBooking) {
      subject = `New Booking Request from ${fullName}`;
      html = `
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
      `;

      // 1️⃣ Create Stripe Customer
      const customer = await stripe.customers.create({
        name: fullName,
        email,
        phone: phoneNumber,
      });

      // 2️⃣ Create Invoice Item (no invoice email to customer)
      await stripe.invoiceItems.create({
        customer: customer.id,
        amount: Math.round(price * 100),
        currency: 'aud',
        description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})`,
      });
    }

    // ----------------------
    // Contact Form
    // ----------------------
    else if (isContactForm) {
      subject = `New Contact Form Message from ${name}`;
      html = `
        <h3>New Contact Form Submission:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `;
    }

    // ----------------------
    // Send email to admin
    // ----------------------
    const msg = {
      to: 'theshanbooth@gmail.com',
      from: 'dharshansubramaniyam2@gmail.com',
      replyTo: email,
      subject,
      html,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: isBooking ? 'Booking processed successfully!' : 'Email sent successfully!' }),
    };
  } catch (err) {
    console.error('Error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to process request.' }) };
  }
};
