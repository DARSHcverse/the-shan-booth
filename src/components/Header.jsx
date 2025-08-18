import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../App.css';
import logo from '../images/logo.png';
import callIcon from '../images/callIcon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'HOMEPAGE', path: '/' },
    { name: 'PHOTOBOOTHS', path: '/photobooths' },
    { name: 'EVENTS', path: '/events' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'BACKDROP', path: '/backdrop' },
    { name: 'BOOKING', path: '/booking' },
    { name: 'QUICK QUOTE', path: '/quickquote' },
    { name: 'PAY HERE', path: '/pay' },
  ];

  const NavLinks = ({ onClick }) => (
    <ul className="nav-list">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <li
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <button
              type="button"
              onClick={() => {
                navigate(item.path);
                if (onClick) onClick();
              }}
              className="nav-link"
            >
              {item.name}
            </button>
          </li>
        );
      })}
      <li className="nav-item">
        <a href="tel:+61475116521" aria-label="Call us">
          <img src={callIcon} alt="Call button" className="call-icon" />
        </a>
      </li>
    </ul>
  );

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="logo-link"
          aria-label="Go to homepage"
          type="button"
        >
          <img src={logo} alt="The Shan Booth Logo" className="logo-img" />
          <h1 className="logo-text">THE SHAN BOOTH</h1>
        </button>

        {/* Desktop nav */}
        <nav className="main-nav desktop-only">
          <NavLinks />
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8 text-black" />
          ) : (
            <Menu className="w-8 h-8 text-black" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu-overlay animate-slide-in"
        >
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
