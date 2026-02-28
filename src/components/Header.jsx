import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
const logo = '/images/logo.png';
const callIcon = '/images/callIcon.png';
// import iconGradCap from '/images/prop.png'; // Floating icon (currently not in use)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const firstMobileLinkRef = useRef(null);

  const infoItems = ['FUN GUARANTEED', '$ SAFE & SECURE', '$$ AFFORDABLE PRICING', 'HIGH-QUALITY PRINTS', 'CUSTOMIZABLE BACKDROPS', 'PROFESSIONAL SERVICE'];

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const t = window.setTimeout(() => firstMobileLinkRef.current?.focus?.(), 0);
    return () => window.clearTimeout(t);
  }, [isMenuOpen]);

  const renderInfoItem = (text) => {
    const match = /^(\$+)\s*(.*)$/.exec(text);
    if (!match) return text;
    const [, dollars, rest] = match;
    return (
      <>
        <span className="info-dollar" aria-hidden="true">
          {dollars}
        </span>{' '}
        {rest}
      </>
    );
  };

  const renderInfoGroup = (keyPrefix) =>
    infoItems.flatMap((text, index) => {
      const elements = [
        <span key={`${keyPrefix}-item-${text}`} className="info-item">
          {renderInfoItem(text)}
        </span>,
      ];

      if (index !== infoItems.length - 1) {
        elements.push(
          <span key={`${keyPrefix}-sep-${text}`} className="info-sep" aria-hidden="true">
            |
          </span>,
        );
      }

      return elements;
    });

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

  const NavLinks = ({ onClick, firstLinkRef }) => (
    <ul className="nav-list">
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;
        const linkRef = item.path === "/" ? firstLinkRef : undefined;
        return (
          <li
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <Link
              href={item.path}
              className="nav-link"
              onClick={() => onClick && onClick()}
              ref={linkRef}
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
      <div className="top-info-bar">
        <div className="container">
          <div className="info-marquee" aria-label="Highlights">
            <div className="info-track">
              <div className="info-group">
                {renderInfoGroup('info-1')}
              </div>
              <div className="info-group" aria-hidden="true">
                {renderInfoGroup('info-2')}
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <span className="logo-text">THE SHAN BOOTH</span>
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
        <nav
          id="mobile-menu"
          className="mobile-menu-overlay animate-slide-in"
          aria-label="Mobile navigation"
        >
          <NavLinks onClick={() => setIsMenuOpen(false)} firstLinkRef={firstMobileLinkRef} />
        </nav>
      )}
    </header>
  );
};

export default Header;
