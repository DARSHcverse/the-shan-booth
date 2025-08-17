const sgMail = require('@sendgrid/mail');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  let data;
  try { data = JSON.parse(event.body); } 
  catch (err) { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

  const { fullName, email, phoneNumber, eventDate, eventLocation, packageDuration, service, message, price, invoiceNumber } = data;

  if (!fullName || !email || !phoneNumber || !eventDate || !eventLocation || !packageDuration || !service || !price || !invoiceNumber) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required booking fields.' }) };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const emailHTML = `
    <h3>New Booking Details:</h3>
    <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phoneNumber}</p>
    <p><strong>Event Date:</strong> ${eventDate}</p>
    <p><strong>Event Location:</strong> ${eventLocation}</p>
    <p><strong>Package Duration:</strong> ${packageDuration}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong><br>${message || 'N/A'}</p>
    <p><strong>Price:</strong> AUD ${price}</p>
  `;

  try {
    // 1️⃣ Create Stripe customer
    const customer = await stripe.customers.create({ name: fullName, email, phone: phoneNumber });

    if (!customer || !customer.id) throw new Error('Failed to create Stripe customer.');

    // 2️⃣ Create invoice item
    if (price <= 0) throw new Error('Price must be greater than zero.');
    await stripe.invoiceItems.create({ customer: customer.id, amount: Math.round(price * 100), currency: 'aud', description: `${packageDuration} - ${service} (Invoice: ${invoiceNumber})` });

    // 3️⃣ Create invoice
    const invoice = await stripe.invoices.create({ customer: customer.id, auto_advance: true, metadata: { invoice_number: invoiceNumber } });
    if (!invoice || !invoice.hosted_invoice_url) throw new Error('Failed to create Stripe invoice URL.');

    // 4️⃣ Send customer email with invoice link
    const customerMsg = {
      to: email,
      from: 'theshanbooth@gmail.com',
      subject: `Booking Confirmation - ${invoiceNumber}`,
      html: `
        <h3>Hi ${fullName},</h3>
        <p>Thanks for booking The Shan Booth!</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <p>Pay your invoice securely:</p>
        <p><a href="${invoice.hosted_invoice_url}" style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Pay Invoice</a></p>
        <p>– The Shan Booth Team</p>
      `,
    };
    await sgMail.send(customerMsg);

    // 5️⃣ Send internal notification email
    await sgMail.send({ to: 'theshanbooth@gmail.com', from: 'dharshansubramaniyam2@gmail.com', replyTo: email, subject: `New Booking - ${invoiceNumber}`, html: emailHTML });

    return { statusCode: 200, body: JSON.stringify({ message: 'Booking & invoice created!', invoiceUrl: invoice.hosted_invoice_url }) };

  } catch (err) {
    console.error('Stripe/SendGrid Error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: `Stripe invoice creation failed: ${err.message}` }) };
  }
};
