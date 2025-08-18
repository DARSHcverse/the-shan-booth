import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../App.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    eventDate: "",
    eventLocation: "",
    packageDuration: "",
    service: "Photobooth",
    price: 0,
    message: "",
  });

  const [status, setStatus] = useState("");

  const packagePrices = {
    "2 Hours": 390,
    "3 Hours": 550,
    "4 Hours": 700,
    "5 Hours": 800,
  };

  const generateInvoiceNumber = () => {
    const now = new Date();
    const dateStr = `${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
    const randomSeq = Math.floor(Math.random() * 900 + 100);
    return `PB-${dateStr}-${randomSeq}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };
    if (name === "packageDuration")
      updatedData.price = packagePrices[value] || 0;
    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const invoiceNumber = generateInvoiceNumber();
      const payload = { ...formData, invoiceNumber };

      // ✅ point to booking function instead of sendQuote
      const response = await fetch("/.netlify/functions/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Booking submitted! Booking confirmation sent.");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          eventDate: "",
          eventLocation: "",
          packageDuration: "",
          service: "Photobooth",
          price: 0,
          message: "",
        });

        if (data.invoiceUrl) window.location.href = data.invoiceUrl;
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Your Photobooth | The Shan Booth</title>
        <meta
          name="description"
          content="Reserve your photobooth hire in Melbourne with The Shan Booth. Choose your package, confirm booking, and secure your date for weddings, birthdays, school events, and corporate parties."
        />
        <link rel="canonical" href="https://photoboothwithshan.com.au/booking" />

        {/* Open Graph */}
        <meta property="og:title" content="Book Your Photobooth | The Shan Booth" />
        <meta property="og:description" content="Secure your photobooth booking today in Melbourne. Perfect for weddings, birthdays, school formals, and corporate events with The Shan Booth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://photoboothwithshan.com.au/booking" />
        <meta property="og:image" content="https://photoboothwithshan.com.au/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Your Photobooth | The Shan Booth" />
        <meta name="twitter:description" content="Secure your photobooth booking today in Melbourne. Perfect for weddings, birthdays, school formals, and corporate events with The Shan Booth." />
        <meta name="twitter:image" content="https://photoboothwithshan.com.au/images/logo.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Reservation",
            "reservationFor": {
              "@type": "Event",
              "name": "Photobooth Hire",
              "location": {
                "@type": "Place",
                "name": "Melbourne, Australia"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://photoboothwithshan.com.au"
            },
            "url": "https://photoboothwithshan.com.au/booking",
            "description": "Reserve your photobooth hire in Melbourne with The Shan Booth. Choose your package, confirm booking, and secure your date for weddings, birthdays, school events, and corporate parties."
          }
          `}
        </script>
      </Helmet>

      <div className="booking-container">
        <div className="booking-card">
          <h2 className="booking-title">Book Your Photobooth</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="Event Location"
              required
            />
            <select
              name="packageDuration"
              value={formData.packageDuration}
              onChange={handleChange}
              required
            >
              <option value="">Select Package Duration</option>
              <option value="2 Hours">2 Hours</option>
              <option value="3 Hours">3 Hours</option>
              <option value="4 Hours">4 Hours</option>
              <option value="5 Hours">5 Hours</option>
            </select>
            <input
              type="number"
              name="price"
              value={formData.price}
              readOnly
              className="readonly-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message (Optional)"
              rows="3"
            />
            <button type="submit" className="submit-button">
              Confirm Booking
            </button>
          </form>
          {status && <p className="booking-status">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default BookingPage;
