import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = req.body;

    const emailContent = `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Event Date:</strong> ${data.eventDate}</p>
      <p><strong>Location:</strong> ${data.eventLocation}</p>
      <p><strong>Package Duration:</strong> ${data.packageDuration}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong><br>${data.message ? data.message.replace(/\n/g, "<br>") : "N/A"}</p>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_FROM_EMAIL], // send to yourself
      replyTo: data.email,
      subject: `New Quote Request from ${data.fullName}`,
      html: emailContent,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
