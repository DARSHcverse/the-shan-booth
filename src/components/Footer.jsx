import React from 'react';
import '../App.css';
import fb from '../images/3259376_facebook_media_social_icon.png';
import ig from '../images/3259424_instagram_social media_social_icon.png';
import tw from '../images/3259404_media_social_twitter_icon.png';
import phone from '../images/3259417_media_social_viber_icon.png';
import map from '../images/3259380_dreamstale_media_social_icon.png';
import gm from '../images/3259428_google_media_plus_social_icon.png';

const Footer = () => (
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
          </div><br />
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
        <form className="contact-form" netlify>
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
