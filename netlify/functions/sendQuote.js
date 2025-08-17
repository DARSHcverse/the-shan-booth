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

  const isQuickQuote =
    fullName && phoneNumber && eventDate && eventLocation && packageDuration && service && !price;

  const isBooking =
    fullName && email && phoneNumber && eventDate && eventLocation && packageDuration && service && price && invoiceNumber;

  const isContactForm = name && email && message && !isQuickQuote && !isBooking;

  if (!isQuickQuote && !isBooking && !isContactForm) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Required fields are missing.' }) };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let subject;
  let html;

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

    try {
      // 1️⃣ Create Stripe Customer
      const customer = await stripe.customers.create({
        name: fullName,
        email,
        phone: phoneNumber,
      });

      // 2️⃣ Create Invoice Item
      await stripe.invoiceItems.create({
        customer: customer.id,
        amount: price * 100, // convert to cents
        currency: 'aud',
        description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})`,
      });

      // 3️⃣ Create Invoice
      let invoice = await stripe.invoices.create({
        customer: customer.id,
        auto_advance: true,
        metadata: { invoice_number: invoiceNumber },
      });

      // 4️⃣ Finalize Invoice to generate hosted_invoice_url
      invoice = await stripe.invoices.finalizeInvoice(invoice.id);

      if (!invoice.hosted_invoice_url) throw new Error('Failed to create Stripe invoice URL.');

      // 5️⃣ Send confirmation email to customer
      const customerMsg = {
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
          <p><a href="${invoice.hosted_invoice_url}" style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Pay Invoice</a></p>
          <p>– The Shan Booth Team</p>
        `,
      };

      await sgMail.send(customerMsg);

      // Return invoice URL to frontend
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Booking & invoice created!', invoiceUrl: invoice.hosted_invoice_url }),
      };
    } catch (err) {
      console.error('Stripe Error:', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Stripe invoice creation failed.' }) };
    }
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
  // Send email to yourself
  // ----------------------
  const msg = {
    to: 'theshanbooth@gmail.com',
    from: 'dharshansubramaniyam2@gmail.com',
    replyTo: email,
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('SendGrid Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email.' }) };
  }
};
