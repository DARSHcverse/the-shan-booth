import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useConsent } from "./ConsentProvider";
const fb = '/images/icon-facebook.webp';
const ig = '/images/icon-instagram.webp';
const tw = '/images/icon-twitter.webp';
const phone = '/images/icon-phone.webp';
const map = '/images/icon-map.webp';
const gm = '/images/icon-email.webp';

const Footer = () => {
  const googleMapsApiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || process.env.REACT_APP_GOOGLE_MAPS_KEY;

  const router = useRouter();
  const { openDialog } = useConsent();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/thankyou');
        setFormData({ name: '', email: '', message: '' });
        setStatus('');
      } else {
        setStatus('❌ Failed to send. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setStatus('⚠️ An error occurred. Please try again.');
    }
  };


  
  return (
    <footer className="footer">
      <div className="container grid-cols-3">
        {/* --- Contact Info --- */}
        <div>
          <h3 className="footer-heading">Contact Info</h3>
          <address className="contact-info-list">
            <div className="social-link no-style-button">
              <img loading="lazy" decoding="async" src={map} alt="Address" className="social-icon" />
              <span>51 Celestial Circuit, Tarneit, VIC 3029</span>
            </div>
            <div className="social-link no-style-button">
              <img loading="lazy" decoding="async" src={phone} alt="Phone" className="social-icon" />
              <span>:+61 414 521 425</span>
            </div>
            <br />
            <div className="social-link no-style-button">
              <img loading="lazy" decoding="async" src={gm} alt="Email" className="social-icon" />
              <span>theshanbooth@gmail.com</span>
            </div>
          </address>
        </div>

        {/* --- Social Media + Map --- */}
        <div>
          <h3 className="footer-heading">Social Media</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61579072176010"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img loading="lazy" decoding="async" src={fb} alt="Facebook" className="social-icon" />
            </a>

            <span className="social-link social-link--disabled" aria-label="Twitter (coming soon)" title="Coming soon">
              <img loading="lazy" decoding="async" src={tw} alt="Twitter" className="social-icon" />
            </span>

            <a
              href="https://www.instagram.com/photobooth_withshan/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img loading="lazy" decoding="async" src={ig} alt="Instagram" className="social-icon" />
            </a>
          </div>

          {/* --- Google Map --- */}
          <div className="footer-map">
          <iframe
            title="Photo Booth With Shan Location"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '10px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=51+Celestial+Circuit,+Tarneit,+VIC+3029,+Australia&key=${googleMapsApiKey}`}
          ></iframe>
          </div>
        </div>

        {/* --- Contact Form --- */}
        <div>
          <h3 className="footer-heading">Contact Form</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="footer-contact-name">
              Your name
            </label>
            <input
              id="footer-contact-name"
              type="text"
              name="name"
              placeholder="Your name..."
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <label className="sr-only" htmlFor="footer-contact-email">
              Email
            </label>
            <input
              id="footer-contact-email"
              type="email"
              name="email"
              placeholder="Email..."
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <label className="sr-only" htmlFor="footer-contact-message">
              Message
            </label>
            <textarea
              id="footer-contact-message"
              name="message"
              placeholder="Your message..."
              rows="4"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="text-center">
              <button type="submit" className="submit-button">
                Send message
              </button>
            </div>
          </form>
          {status && (
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="copyright-text">
        © {new Date().getFullYear()} The Shan Booth. All rights reserved.
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <Link href="/terms" className="footer-link">Terms & Conditions</Link>
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <Link href="/privacy" className="footer-link">Privacy Policy</Link>
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <button type="button" className="footer-link footer-link--button" onClick={openDialog}>
          Cookie preferences
        </button>
      </div>
    </footer>
  );
};

export default Footer;
