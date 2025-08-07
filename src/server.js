// server.js

require('dotenv').config(); // ✅ Load environment variables

const express = require('express');
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();

// ✅ Set SendGrid API key from .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ✅ CORS for development only
if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: 'http://localhost:3000',
    }));
}

// ✅ Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files from the React build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// ✅ Email sending route
app.post('/send-quote', async (req, res) => {
    console.log("✅ Received POST /send-quote");

    const {
        fullName,
        email,
        phoneNumber,
        eventDate,
        eventLocation,
        packageDuration,
        service,
        message,
    } = req.body;

    // Basic validation
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
        console.error('❌ Validation Error: Missing required fields.');
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const msg = {
        to: 'theshanbooth@gmail.com', // Your business email
        from: 'dharshansubramaniyam2@gmail.com', // Verified sender email in SendGrid
        reply_to: email,
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
        console.log('✅ Email sent successfully via SendGrid!');
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('❌ SendGrid API Error:', error);
        if (error.response) {
            console.error('SendGrid Response Body:', error.response.body);
        }
        res.status(500).json({ error: 'Failed to send email through SendGrid.' });
    }
});

// ✅ Catch-all handler to serve React index.html for client-side routing
app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(buildPath, 'index.html'));
    } catch (err) {
        console.error('❌ Error serving index.html:', err);
        res.status(500).send('Internal Server Error');
    }
});

// ✅ Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
