import nodemailer from "nodemailer";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const {
      fullName,
      email,
      phoneNumber,
      eventDate,
      eventLocation,
      packageDuration,
      service,
      boothType,
      message,
      price,
      invoiceNumber,
    } = data;

    // Validation
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !eventDate ||
      !eventLocation ||
      !packageDuration ||
      !service ||
      !boothType ||
      !price ||
      !invoiceNumber
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Required fields are missing for booking." }),
      };
    }

    // ----------------------
    // Stripe: Create Customer
    // ----------------------
    const customer = await stripe.customers.create({
      name: fullName,
      email,
      phone: phoneNumber,
    });

    // ----------------------
    // Stripe: Add Invoice Item
    // ----------------------
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: Math.round(price * 100), // cents
      currency: "aud",
      description: `${boothType} Booth - ${packageDuration} | ${service} (Invoice: ${invoiceNumber})`,
    });

    // ----------------------
    // Stripe: Create Invoice (draft)
    // ----------------------
    let dueDate = Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60; // 7 days
    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false,
      collection_method: "send_invoice",
      description: `Booking Invoice #${invoiceNumber}`,
      metadata: {
        invoice_number: invoiceNumber,
        boothType,
        eventDate,
        eventLocation,
      },
      due_date: dueDate,
    });

    // ----------------------
    // Nodemailer setup (Gmail)
    // ----------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // ----------------------
    // Send Customer Email
    // ----------------------
    await transporter.sendMail({
      from: `"The Shan Booth" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Booking Confirmation - ${invoiceNumber}`,
      html: `
        <h3>Hi ${fullName},</h3>
        <p>Thank you for booking <strong>The Shan Booth</strong>! 🎉</p>
        <p>Your booking has been confirmed.</p>
        <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <p><strong>Booth Type:</strong> ${boothType}</p>
        <p><strong>Package:</strong> ${packageDuration} – ${service}</p>
        <p><strong>Total Price:</strong> AUD ${price}</p>
        ${
          invoice.hosted_invoice_url
            ? `<p>You can securely pay your invoice using the button below:</p>
               <p>
                 <a href="${invoice.hosted_invoice_url}" 
                    style="background:#f5a623;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
                    View Invoice
                 </a>
               </p>`
            : ""
        }
        <p>We look forward to making your event unforgettable!</p>
        <p>– The Shan Booth Team</p>
      `,
    });

    // ----------------------
    // Send Admin Notification
    // ----------------------
    await transporter.sendMail({
      from: `"The Shan Booth" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your Gmail
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
        <p><strong>Booth Type:</strong> ${boothType}</p>
        <p><strong>Package Duration:</strong> ${packageDuration}</p>
        <p><strong>Service Type:</strong> ${service}</p>
        <p><strong>Price:</strong> AUD ${price}</p>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, "<br>") : "N/A"}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Booking created & draft invoice sent!" }),
    };
  } catch (err) {
    console.error("Error in booking:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Failed to process booking." }),
    };
  }
};
