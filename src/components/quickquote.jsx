import React, { useState } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
const birthdayStrip = '/images/birthdaystrip.png';
const corporateStrip = '/images/coporatestrip.png';

const QuickQuote = () => {
  const router = useRouter();
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
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
      router.push('/thankyou');
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
      <Head>
        <title>Get a Quick Quote for Photobooth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Request a quick quote for photobooth hire in Melbourne with The Shan Booth. Fast and easy – choose your package, add event details, and get your price instantly."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/quickquote" />

        {/* Open Graph */}
        <meta property="og:title" content="Get a Quick Quote for Photobooth Hire | The Shan Booth" />
        <meta
          property="og:description"
          content="Instant photobooth hire quotes in Melbourne. Select your package, provide event details, and get your custom price from The Shan Booth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/quickquote" />
        <meta property="og:image" content="/images/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Quick Quote for Photobooth Hire | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Request an instant photobooth hire quote for your Melbourne event. Weddings, birthdays, school functions, and corporate events covered."
        />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* JSON-LD */}
        <script type="application/ld+json">{`
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
        `}</script>
      </Head>

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
              onClick={() => router.push('/packages')}
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
      <section className="section-padding seasonal-banner snow-effect">
          <div className="container">
            <h2 className="seasonal-title">How Our Melbourne Photo Booth Pricing Works 🎉</h2>
            <p className="seasonal-text">
              Getting an accurate price for your Melbourne photobooth hire shouldn't be complicated. 
              We designed our Quick Quote system to provide you with a tailored estimate based on your specific event logistics. 
              Whether you are hosting an intimate garden wedding in the Yarra Valley or a large-scale corporate brand activation 
              in the Melbourne CBD, our team uses your details to calculate travel, setup time, and equipment requirements to ensure 
              a seamless experience.
            </p>
            <p className="seasonal-text">
              <strong>Choosing Your Experience:</strong> Our service selection allows you to match the booth to your event's specific vibe. 
              Our Open Booths are perfect for maximizing guest interaction and fitting large groups into a single frame, 
              while our Glam Booth is a favorite for those seeking high-end, skin-smoothing studio lighting and a "Kardashian-style" finish. 
              For a more nostalgic feel, our Enclosed Booths offer that classic, private photo experience that guests have loved for decades.
            </p>
            <p className="seasonal-text">
              <strong>Instant Response & Transparency:</strong> Once you submit this form, we cross-reference your date with our current availability. 
              We don't believe in hidden fees or "event taxes"—the price we quote is the price you pay. Every hire includes 
              professional-grade DSLR cameras, studio lighting, and a friendly booth attendant to ensure your Melbourne event runs 
              smoothly from start to finish. Submit your details today, and let's start planning how to capture your best memories!
            </p>
          </div>
        </section>
    </>
  );
};

export default QuickQuote;
