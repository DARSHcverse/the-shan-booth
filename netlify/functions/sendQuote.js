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

  const {
    fullName,
    email,
    phoneNumber,
    eventDate,
    eventLocation,
    packageDuration,
    service,
    message,
  } = data;

  if (
    !fullName ||
    !email ||
    !phoneNumber ||
    !eventDate ||
    !eventLocation ||
    !packageDuration ||
    !service ||
    !message
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'All fields are required.' }),
    };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'theshanbooth@gmail.com',
    from: 'dharshansubramaniyam2@gmail.com',
    replyTo: email,
    subject: `New Quick Quote Request from ${fullName}`,
    html: `
      <h3>New Quick Quote Request Details:</h3>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Event Date:</strong> ${eventDate}</p>
      <p><strong>Event Location:</strong> ${eventLocation}</p>
      <p><strong>Package Duration:</strong> ${packageDuration}</p>
      <p><strong>Service Type:</strong> ${service}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `,
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
