import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../App.css';
import birthdayStrip from "../images/birthdaystrip.png";
import corporateStrip from "../images/coporatestrip.png";

const QuickQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    eventLocation: '',
    packageDuration: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phoneNumber, eventDate, eventLocation, packageDuration, service, message } = formData;
    if (!fullName || !email || !phoneNumber || !eventDate || !eventLocation || !packageDuration || !service || !message) {
      setStatus('You have to complete all details.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/sendQuote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/thankyou');
        setStatus('Thank you! Your quote request has been sent successfully.');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          eventDate: '',
          eventLocation: '',
          packageDuration: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('Failed to send your request. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Get a Quick Quote for Photobooth Hire  | The Shan Booth</title>
        <meta
          name="description"
          content="Request a quick quote for photobooth hire in Melbourne with The Shan Booth. Fast and easy – choose your package, add event details, and get your price instantly."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/quickquote" />

        {/* Open Graph */}
        <meta property="og:title" content="Get a Quick Quote | The Shan Booth" />
        <meta property="og:description" content="Instant photobooth hire quotes in Melbourne. Select your package, provide event details, and get your custom price from The Shan Booth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/quickquote" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Quick Quote | The Shan Booth" />
        <meta name="twitter:description" content="Request an instant photobooth hire quote for your Melbourne event. Weddings, birthdays, school functions, and corporate events covered." />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/images/logo.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Photobooth Hire Quote",
            "provider": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Melbourne, Australia"
            },
            "url": "https://www.photoboothwithshan.com.au/quickquote",
            "description": "Request a quick quote for photobooth hire in Melbourne with The Shan Booth. Fast and easy – choose your package, add event details, and get your price instantly."
          }
          `}
        </script>
      </Helmet>

      <div className="quick-quote-container">
        {/* Floating Graduation Strip */}
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
        <div className="quick-quote-card">
          <h2 className="page-heading">QUICK <span className="red-text">QUOTE</span></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="date"
                name="eventDate"
                placeholder="Date"
                className="form-input"
                value={formData.eventDate}
                onChange={handleChange}
              />
              <input
                type="text"
                name="eventLocation"
                placeholder="Event Location"
                className="form-input"
                value={formData.eventLocation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <select
                name="packageDuration"
                className="form-select"
                value={formData.packageDuration}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Package Duration
                </option>
                <option value="2hrs">2 hrs</option>
                <option value="3hrs">3 hrs</option>
                <option value="4hrs">4 hrs</option>
                <option value="5hrs">5 hrs</option>
                <option value="6hrs">6 hrs</option>
                <option value="7hrs+">7+ hrs</option>
              </select>
            </div>

            <div className="radio-group-container">
              <p className="radio-group-title">Select a Service:</p>
              <div className="radio-group">
                {['Open Booth', 'Glam Booth', 'Enclosed Booth'].map((serviceType) => (
                  <div className="radio-option" key={serviceType}>
                    <input
                      type="radio"
                      name="service"
                      value={serviceType}
                      id={serviceType.toLowerCase().replace(' ', '')}
                      className="custom-radio"
                      checked={formData.service === serviceType}
                      onChange={handleChange}
                    />
                    <label htmlFor={serviceType.toLowerCase().replace(' ', '')}>
                      {serviceType}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              Get Quote
            </button>
          </form>

          {status && <p className="form-status">{status}</p>}

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              onClick={() => navigate('/packages')}
              className="back-button"
            >
              Back to Packages
            </button>
          </div>
        </div>
        {/* Floating Graduation Strip */}
        <div className="floating-strip right-strip">
          <img src={corporateStrip} alt="Corporate photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default QuickQuote;
