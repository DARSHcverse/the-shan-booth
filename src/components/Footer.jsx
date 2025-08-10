import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import '../App.css';

const Footer = () => (
  <footer className="footer">
    <div className="container grid-cols-3">
      {/* Contact Info */}
      <div>
        <h3 className="footer-heading">Contact Info</h3>
        <address className="contact-info-list">
          <div className="contact-info-item">
            <MapPin className="w-5 h-5" />
            <span>51 Celestial Circuit, Tarneit, VIC 3029</span>
          </div>
          <div className="contact-info-item">
            <Phone className="w-5 h-5" />
            <span>+61475116521</span>
          </div>
          <div className="contact-info-item">
            <Mail className="w-5 h-5" />
            <span>theshanbooth@gmail.com</span>
          </div>
        </address>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="footer-heading">Social Media</h3>
        <div className="social-links">
          <a
            href="https://www.facebook.photoboothwithshan.com.au"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>

          {/* Twitter icon using a button since no valid link */}
          <button
            type="button"
            className="social-link no-style-button"
            onClick={() => alert('Twitter link coming soon')}
            aria-label="Twitter (coming soon)"
          >
            <Twitter className="w-6 h-6" />
          </button>

          <a
            href="https://www.instagram.photoboothwithshan.com.au"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="footer-heading">Contact Form</h3>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field for spam prevention */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your name..."
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            className="form-textarea"
            required
          ></textarea>
          <div className="text-center">
            <button type="submit" className="submit-button">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>

    {/* Copyright */}
    <p className="copyright-text">
      Copyright 2024 The Shan Booth. All rights reserved.
    </p>
  </footer>
);

export default Footer;
