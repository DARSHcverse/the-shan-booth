import React, { useState } from "react";
import '../App.css';

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
    if (name === "packageDuration") updatedData.price = packagePrices[value] || 0;
    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const invoiceNumber = generateInvoiceNumber();
      const payload = { ...formData, invoiceNumber };

      const response = await fetch("/.netlify/functions/sendQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Booking submitted! Check your email for invoice.");
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
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="booking-title">Book Your Photobooth</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
          <input type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} placeholder="Event Location" required />
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
  );
};

export default BookingPage;
