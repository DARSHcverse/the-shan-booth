// netlify/functions/sendQuote.js
const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  // Destructure for both forms
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
  } = data;

  // Decide if it's QuickQuote or Footer form
  const isQuickQuote =
    fullName && phoneNumber && eventDate && eventLocation && packageDuration && service;

  const isContactForm = name && email && message && !isQuickQuote;

  if (!isQuickQuote && !isContactForm) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Required fields are missing.' }),
    };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let subject;
  let html;

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
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `;
  } else if (isContactForm) {
    subject = `New Contact Form Message from ${name}`;
    html = `
      <h3>New Contact Form Submission:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `;
  }

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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};
