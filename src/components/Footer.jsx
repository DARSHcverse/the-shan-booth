import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import fb from '../images/3259376_facebook_media_social_icon.png';
import ig from '../images/3259424_instagram_social media_social_icon.png';
import tw from '../images/3259404_media_social_twitter_icon.png';
import phone from '../images/3259417_media_social_viber_icon.png';
import map from '../images/3259380_dreamstale_media_social_icon.png';
import gm from '../images/3259428_google_media_plus_social_icon.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/sendQuote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
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
        
        {/* Contact Info */}
        <div>
          <h3 className="footer-heading">Contact Info</h3>
          <address className="contact-info-list">
            <div className="social-link no-style-button">
              <img src={map} alt="Address" className="social-icon" />
              <span>51 Celestial Circuit, Tarneit, VIC 3029</span>
            </div>
            <div className="social-link no-style-button">
              <img src={phone} alt="Phone" className="social-icon" />
              <span>+61475116521</span>
            </div>
            <br />
            <div className="social-link no-style-button">
              <img src={gm} alt="Email" className="social-icon" />
              <span>theshanbooth@gmail.com</span>
            </div>
          </address>
        </div>

        {/* Social Media */}
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
              <img src={fb} alt="Facebook" className="social-icon" />
            </a>

            <button
              type="button"
              className="social-link no-style-button"
              onClick={() => alert('Twitter link coming soon')}
              aria-label="Twitter (coming soon)"
            >
              <img src={tw} alt="Twitter" className="social-icon" />
            </button>

            <a
              href="https://www.instagram.com/photobooth_withshan/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={ig} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="footer-heading">Contact Form</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email..."
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
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
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>

      {/* Copyright + Links */}
      <div className="copyright-text">
        © {new Date().getFullYear()} The Shan Booth. All rights reserved. 
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <Link to="/terms" style={{ color: 'inherit', textDecoration: 'underline', margin: '0 0.5rem' }}>
          Terms & Conditions
        </Link>
        <span style={{ margin: '0 0.5rem' }}>|</span>
        <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'underline', margin: '0 0.5rem' }}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
