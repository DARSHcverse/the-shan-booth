import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,     // your Gmail
        pass: process.env.EMAIL_PASS,     // your App Password
      },
    });

    const mailOptions = {
      from:  data.email,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `New Quote Request from ${data.fullName}`,
      text: `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Event Date: ${data.eventDate}
Location: ${data.eventLocation}
Package Duration: ${data.packageDuration}
Service: ${data.service}
Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}