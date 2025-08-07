import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../App.css';
import logo from '../images/logo.png';
import callIcon from '../images/callIcon.png';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <button
          onClick={() => handleNavClick('homepage')}
          className="logo-link no-style-button"
          aria-label="Go to homepage"
        >
          <img src={logo} alt="The Shan Booth Logo" className="logo-img" />
          <h1 className="logo-text">The Shan Booth</h1>
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-button"
        >
          <Menu className="w-8 h-8 text-white" />
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className={`nav-item ${currentPage === 'homepage' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('homepage')}
                className="nav-link no-style-button"
              >
                Homepage
              </button>
            </li>
            <li className={`nav-item ${currentPage === 'photobooths' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('photobooths')}
                className="nav-link no-style-button"
              >
                Photobooths
              </button>
            </li>
            <li className={`nav-item ${currentPage === 'events' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('events')}
                className="nav-link no-style-button"
              >
                Events
              </button>
            </li>
            <li className={`nav-item ${currentPage === 'packages' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('packages')}
                className="nav-link no-style-button"
              >
                Packages
              </button>
            </li>
            <li className={`nav-item ${currentPage === 'quickquote' ? 'active' : ''}`}>
              <button
                onClick={() => handleNavClick('quickquote')}
                className="nav-link no-style-button"
              >
                Quick Quote
              </button>
            </li>
            <li className="nav-item">
              <a href="tel:+61475116521" aria-label="Call us">
                <img src={callIcon} alt="Call button" className="call-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
