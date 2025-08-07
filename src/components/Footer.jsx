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
            <span>contact@shanbooth.com</span>
          </div>
        </address>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="footer-heading">Social Media</h3>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61579114653516"
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
            href="https://www.instagram.com/photobooth_withshan/"
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
        <form className="contact-form">
          <input type="text" placeholder="Your name..." className="form-input" />
          <input type="email" placeholder="Email..." className="form-input" />
          <textarea placeholder="Your message..." rows="4" className="form-textarea"></textarea>
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
