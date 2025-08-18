import Stripe from "stripe";
import sgMail from "@sendgrid/mail";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const {
      fullName,
      email,
      phoneNumber,
      eventDate,
      eventLocation,
      boothType,
      packageDuration,
      service,
      price,
      message,
      invoiceNumber,
    } = JSON.parse(event.body);

    // ✅ Validation
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
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Required fields are missing for booking." }),
      };
    }

    // ✅ Create Stripe Customer
    const customer = await stripe.customers.create({
      name: fullName,
      email: email,
      phone: phoneNumber,
    });

    // ✅ Add invoice item
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: price * 100, // cents
      currency: "aud",
      description: `${boothType.toUpperCase()} Booth - ${packageDuration} | ${service}`,
    });

    // ✅ Create invoice
    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: true,
      collection_method: "send_invoice",
      days_until_due: 7,
      metadata: {
        invoiceNumber,
        eventDate,
        eventLocation,
        boothType,
        packageDuration,
        message,
      },
    });

    const sentInvoice = await stripe.invoices.finalizeInvoice(invoice.id);

    // ✅ Email to customer
    const customerMsg = {
      to: email,
      from: { email: "dharshansubramaniyam2@gmail.com", name: "The Shan Booth" }, // verified sender
      subject: `Booking Confirmation - ${invoiceNumber}`,
      html: `
        <h2>Thank you for booking with The Shan Booth!</h2>
        <p>Hi ${fullName},</p>
        <p>Your booking details are as follows:</p>
        <ul>
          <li><strong>Booth Type:</strong> ${boothType}</li>
          <li><strong>Package Duration:</strong> ${packageDuration}</li>
          <li><strong>Event Date:</strong> ${eventDate}</li>
          <li><strong>Event Location:</strong> ${eventLocation}</li>
          <li><strong>Price:</strong> $${price} AUD</li>
        </ul>
        <p><a href="${sentInvoice.hosted_invoice_url}">View & Pay Invoice</a></p>
        <p>We look forward to making your event special!</p>
      `,
    };

    // ✅ Email to admin
    const adminMsg = {
      to: "theshanbooth@gmail.com",
      from: { email: "dharshansubramaniyam2@gmail.com", name: "The Shan Booth" }, // must also be verified
      replyTo: email,
      subject: `New Booking Received - ${invoiceNumber}`,
      html: `
        <h2>New Booking Received</h2>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Booth Type:</strong> ${boothType}</li>
          <li><strong>Package Duration:</strong> ${packageDuration}</li>
          <li><strong>Event Date:</strong> ${eventDate}</li>
          <li><strong>Event Location:</strong> ${eventLocation}</li>
          <li><strong>Message:</strong> ${message}</li>
          <li><strong>Price:</strong> $${price} AUD</li>
        </ul>
        <p><a href="${sentInvoice.hosted_invoice_url}">View Invoice</a></p>
      `,
    };

    try {
      await sgMail.send(customerMsg);
      await sgMail.send(adminMsg);
    } catch (mailError) {
      console.error("SendGrid error:", mailError);
      // Don’t block booking if email fails
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, invoiceUrl: sentInvoice.hosted_invoice_url }),
    };
  } catch (error) {
    console.error("Booking error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
