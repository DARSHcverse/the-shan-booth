import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRedesignReveal } from "../lib/useRedesign";
const boothHero = '/images/photobooth.webp';

const BookingPage = () => {
  const router = useRouter();
  useRedesignReveal();
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
      "2 Hours": 390,
      "3 Hours": 550,
      "4 Hours": 700,
      "5 Hours": 800,
    },
    "Glam Booth": {
      "2 Hours": 490,
      "3 Hours": 590,
      "4 Hours": 750,
      "5 Hours": 860,
    },
    "Enclosed Booth": {
      "2 Hours": 390,
      "3 Hours": 550,
      "4 Hours": 700,
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

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Booking submitted! Booking confirmation sent.");
        router.push('/thankyou');
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
      <Head>
        <title>Book Your Best Photobooth Hire Melbourne  | The Shan Booth</title>
        <meta
          name="description"
          content="Reserve your photobooth hire in Melbourne with The Shan Booth. Choose your booth type, package, confirm booking, and secure your date."
          key="description"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/booking" />
      </Head>

      <div className="rd rd-landing booking-container">
        <div className="rd-book-head rd-reveal">
          <span className="rd-eyebrow">Secure your date · 2026 calendar</span>
          <h1>Book your photo booth</h1>
          <p>Pick your booth and duration and you’ll see clear, upfront pricing instantly — no hidden fees. We’ll confirm availability, usually the same day.</p>
        </div>

        <div className="rd-book-grid">
          {/* Left: reassurance / summary panel */}
          <aside className="rd-book-aside rd-reveal">
            <div className="rd-book-media">
              <img src={boothHero} alt="The Shan Booth photo booth setup" />
            </div>
            <h3>Every booking includes</h3>
            <ul className="rd-book-incl">
              <li><span className="rd-ck">✓</span> Delivery, setup &amp; pack-down (free within 40km)</li>
              <li><span className="rd-ck">✓</span> Unlimited instant prints for every guest</li>
              <li><span className="rd-ck">✓</span> A friendly, professional attendant</li>
              <li><span className="rd-ck">✓</span> Curated props &amp; custom photo-strip design</li>
              <li><span className="rd-ck">✓</span> Online gallery after the event</li>
            </ul>

            {/* Live price summary */}
            <div className="rd-book-summary">
              <div className="rd-book-summary-row">
                <span>Booth</span>
                <strong>{formData.boothType || "—"}</strong>
              </div>
              <div className="rd-book-summary-row">
                <span>Duration</span>
                <strong>{formData.packageDuration || "—"}</strong>
              </div>
              <div className="rd-book-summary-total">
                <span>Estimated total</span>
                <strong>{formData.price > 0 ? `$${formData.price}` : "$—"}</strong>
              </div>
            </div>
            <p className="rd-book-help">Need a hand? Call <a href="tel:+61414521425">+61 414 521 425</a></p>
          </aside>

          {/* Right: the form */}
          <div className="rd-book-card rd-reveal">
            <h2>Your details</h2>
            <form onSubmit={handleSubmit} className="booking-form rd-book-form">
              <div className="rd-field">
                <label htmlFor="fullName">Full name</label>
                <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Jane Smith" required />
              </div>

              <div className="rd-field-row">
                <div className="rd-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@email.com" required />
                </div>
                <div className="rd-field">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input id="phoneNumber" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="04XX XXX XXX" required />
                </div>
              </div>

              <div className="rd-field-row">
                <div className="rd-field">
                  <label htmlFor="eventDate">Event date</label>
                  <input id="eventDate" type="date" className="form-input" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </div>
                <div className="rd-field">
                  <label htmlFor="eventLocation">Event location</label>
                  <input id="eventLocation" type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} placeholder="Suburb / venue" required />
                </div>
              </div>

              <div className="rd-field-row">
                <div className="rd-field">
                  <label htmlFor="boothType">Booth type</label>
                  <select id="boothType" name="boothType" value={formData.boothType} onChange={handleChange} required>
                    <option value="">Select booth type</option>
                    <option value="Open Booth">Open Booth</option>
                    <option value="Glam Booth">Glam Booth</option>
                    <option value="Enclosed Booth">Enclosed Booth</option>
                  </select>
                </div>
                <div className="rd-field">
                  <label htmlFor="packageDuration">Package duration</label>
                  <select id="packageDuration" name="packageDuration" value={formData.packageDuration} onChange={handleChange} required>
                    <option value="">Select duration</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours</option>
                    <option value="5 Hours">5 Hours</option>
                  </select>
                </div>
              </div>

              <div className="rd-field">
                <label htmlFor="price">Price (auto-calculated)</label>
                <input id="price" type="number" name="price" value={formData.price} readOnly className="readonly-input" />
              </div>

              <div className="rd-field">
                <label htmlFor="message">Event details</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Start time · End time · Parking / venue access · Any notes" rows="3" />
              </div>

              <button type="submit" className="submit-button rd-book-submit">Confirm booking →</button>
              {status && <p className="booking-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      <section className="rd rd-landing rd-book-info-wrap">
        <div className="rd-book-info">
          <h2 className="section-title">How to Book Your Melbourne Photo Booth Experience 🎉</h2>
          <p>
            Booking your event with The Shan Booth is designed to be simple and transparent.
            To secure your date in our 2026 calendar, we require a few key details to ensure our team is fully prepared
            for your celebration. When filling out the form, please provide an accurate Event Location and your preferred Booth Type.
            Whether you choose the high-fashion Glam Booth or the versatile Open Booth, selecting your package duration will instantly
            provide you with clear, upfront pricing.
          </p>
          <p>
            <strong>What We Need From You</strong> For a flawless setup, please use the message section to include your Start and End times,
            along with any specific Venue Access or Parking instructions. If your venue has stairs, loading dock requirements,
            or specific delivery windows in the Melbourne CBD, knowing these details early allows us to coordinate our arrival perfectly.
          </p>
          <p>
            <strong>Confirmation and Next Steps</strong> Once you click "Confirm Booking," you will receive an automated confirmation and
            a unique invoice. This locks in your equipment and professional attendant for your specific date. Our team will then
            reach out to finalize your custom print designs and backdrop selection.
          </p>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
