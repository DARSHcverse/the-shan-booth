import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
const logo = '/images/logo.png';
const callIcon = '/images/callIcon.png';
// import iconGradCap from '/images/prop.png'; // Floating icon (currently not in use)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
        const isActive = router.pathname === item.path;
        return (
          <li
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <Link
              href={item.path}
              className="nav-link"
              onClick={() => onClick && onClick()}
            >
              {item.name}
            </Link>
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
      {/* <div className="floating-items-container"> // Floating icon (currently not in use, can be enabled if needed later for christmas theme)
        <div className="floating-item item-1"><img src={iconGradCap} alt="Floating graduation cap icon" /></div>
      </div> */}
      <div className="container header-inner">
        {/* Logo */}
        <Link
          href="/"
          className="logo-link"
          aria-label="Go to homepage"
        >
          <img src={logo} alt="The Shan Booth Logo" className="logo-img" />
          <h1 className="logo-text">THE SHAN BOOTH</h1>
        </Link>

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
