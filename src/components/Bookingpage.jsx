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
    boothType: "",
    packageDuration: "",
    service: "Photobooth",
    price: 0,
    message: "",
  });

  const [status, setStatus] = useState("");

  // Booth pricing structure
  const boothPrices = {
    "Open Booth": {
      "2 Hours": 375,
      "3 Hours": 535,
      "4 Hours": 685,
      "5 Hours": 800,
    },
    "Glam Booth": {
      "2 Hours": 480,
      "3 Hours": 580,
      "4 Hours": 740,
      "5 Hours": 860,
    },
    "Enclosed Booth": {
      "2 Hours": 375,
      "3 Hours": 535,
      "4 Hours": 685,
      "5 Hours": 800,
    },
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

    if (name === "boothType" || name === "packageDuration") {
      const booth = updatedData.boothType;
      const duration = updatedData.packageDuration;
      if (booth && duration) {
        updatedData.price = boothPrices[booth]?.[duration] || 0;
      } else {
        updatedData.price = 0;
      }
    }

    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const invoiceNumber = generateInvoiceNumber();
      const payload = { ...formData, invoiceNumber };

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
          boothType: "",
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
          content="Reserve your photobooth hire in Melbourne with The Shan Booth. Choose your booth type, package, confirm booking, and secure your date."
        />
        <link rel="canonical" href="https://photoboothwithshan.com.au/booking" />
      </Helmet>

      <div className="booking-container">
        <div className="booking-card">
          <h2 className="booking-title">Book Your Photobooth</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="date" className="form-input" name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="Date" required />
            <input type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} placeholder="Event Location" required />

            {/* ✅ New Booth Type Select */}
            <select name="boothType" value={formData.boothType} onChange={handleChange} required>
              <option value="">Select Booth Type</option>
              <option value="Open Booth">Open Booth</option>
              <option value="Glam Booth">Glam Booth</option>
              <option value="Enclosed Booth">Enclosed Booth</option>
            </select>

            {/* Package duration */}
            <select name="packageDuration" value={formData.packageDuration} onChange={handleChange} required>
              <option value="">Select Package Duration</option>
              <option value="2 Hours">2 Hours</option>
              <option value="3 Hours">3 Hours</option>
              <option value="4 Hours">4 Hours</option>
              <option value="5 Hours">5 Hours</option>
            </select>

            <input type="number" name="price" value={formData.price} readOnly className="readonly-input" />

            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Additional Message (Optional)" rows="3" />

            <button type="submit" className="submit-button">Confirm Booking</button>
          </form>
          {status && <p className="booking-status">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default BookingPage;
