import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { QUICK_QUOTE_URL } from '../lib/siteLinks';
import { useRedesignTheme } from '../lib/useRedesign';
const logo = '/images/logo.png';
const callIcon = '/images/callIcon.png';
// import iconGradCap from '/images/prop.png'; // Floating icon (currently not in use)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const firstMobileLinkRef = useRef(null);
  const toggleTheme = useRedesignTheme();

  useEffect(() => {
    try {
      setIsDark(document.documentElement.getAttribute('data-rd-theme') === 'dark');
    } catch (_) {}
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark(document.documentElement.getAttribute('data-rd-theme') === 'dark');
  };

  const ThemeToggle = ({ className = '' }) => (
    <button
      type="button"
      onClick={handleThemeToggle}
      className={`rd-nav-theme ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to navy mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to navy mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

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
    { name: 'QUICK QUOTE', path: QUICK_QUOTE_URL, external: true },
    { name: 'PAY HERE', path: '/pay' },
  ];

  const NavLinks = ({ onClick, firstLinkRef }) => (
    <ul className="nav-list">
      {navItems.map((item) => {
        const isActive = !item.external && router.pathname === item.path;
        const linkRef = item.path === "/" ? firstLinkRef : undefined;
        return (
          <li
            key={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            {item.external ? (
              <a
                href={item.path}
                className="nav-link"
                onClick={() => onClick && onClick()}
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.path}
                className="nav-link"
                onClick={() => onClick && onClick()}
                ref={linkRef}
              >
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
      <li className="nav-item">
        <a href="tel:+61414521425" aria-label="Call us">
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

        <div className="header-actions">
          <ThemeToggle className="desktop-only" />

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
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu-overlay animate-slide-in"
          aria-label="Mobile navigation"
        >
          <NavLinks onClick={() => setIsMenuOpen(false)} firstLinkRef={firstMobileLinkRef} />
          <div className="mobile-theme-row">
            <ThemeToggle />
            <span>{isDark ? 'Light mode' : 'Navy mode'}</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
