import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Accepts both the quick quote form (fullName/phoneNumber/boothType/packageDuration)
// and the footer contact form (name/email/message).
const FIELDS = [
  ["Name", (d) => d.fullName || d.name],
  ["Phone", (d) => d.phoneNumber],
  ["Email", (d) => d.email],
  ["Booth", (d) => d.boothType],
  ["Hours", (d) => d.packageDuration],
  ["Estimated price", (d) => (d.price ? `$${d.price}` : "")],
  ["Event date", (d) => d.eventDate],
  ["Location", (d) => d.eventLocation],
  ["Source", (d) => d.source],
  ["Message", (d) => d.message],
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const data = req.body || {};
    const name = String(data.fullName || data.name || "").trim();
    const contact = String(data.phoneNumber || data.email || "").trim();

    if (!name || !contact) {
      return res.status(400).json({ error: "Name and a phone number or email are required" });
    }

    const rows = FIELDS.map(([label, get]) => [label, get(data)])
      .filter(([, value]) => value)
      .map(
        ([label, value]) =>
          `<p><strong>${label}:</strong> ${escapeHtml(String(value).slice(0, 2000)).replace(/\n/g, "<br>")}</p>`
      )
      .join("");

    const isQuote = Boolean(data.boothType);
    const subject = isQuote
      ? `Quick Quote: ${name} — ${data.boothType}, ${data.packageDuration || "?"}`
      : `New enquiry from ${name}`;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: ["theshanbooth@gmail.com"],
      ...(data.email ? { replyTo: String(data.email) } : {}),
      subject: subject.replace(/[\r\n]+/g, " ").slice(0, 200),
      html: `<h3>${isQuote ? "New Quick Quote" : "New Enquiry"}</h3>${rows}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
