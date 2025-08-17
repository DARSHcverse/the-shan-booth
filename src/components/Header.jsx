import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../App.css';
import logo from '../images/logo.png';
import callIcon from '../images/callIcon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Homepage', path: '/' },
    { name: 'Photobooths', path: '/photobooths' },
    { name: 'Events', path: '/events' },
    { name: 'Packages', path: '/packages' },
    { name: 'Backdrop', path: '/backdrop' },
    { name: 'Booking', path: '/booking' },
    { name: 'Quick Quote', path: '/quickquote' },
    { name: 'Pay Here', path: '/pay' },
  ];

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
          <h1 className="logo-text">The Shan Booth</h1>
        </button>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
          type="button"
        >
          <Menu className="w-8 h-8 text-black" />
        </button>

        {/* Desktop nav */}
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => navigate(item.path)}
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
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-close"
            aria-label="Close menu"
            type="button"
          >
            &#10005;
          </button>
          <nav className="main-nav open">
            <ul className="nav-list">
              {navItems.map(item => {
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
                        setIsMenuOpen(false);
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
