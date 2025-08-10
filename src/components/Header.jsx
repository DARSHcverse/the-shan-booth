import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../App.css';
import logo from '../images/logo.png';
import callIcon from '../images/callIcon.png';

const Header = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Homepage', key: 'homepage' },
        { name: 'Photobooths', key: 'photobooths' },
        { name: 'Events', key: 'events' },
        { name: 'Packages', key: 'packages' },
        { name: 'Backdrop', key: 'backdrop' },
        { name: 'Quick Quote', key: 'quickquote' }
    ];

    return (
        <header className="header">
            <div className="container header-inner">
                {/* Logo */}
                <button
                    onClick={() => setCurrentPage('homepage')}
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
                        {navItems.map(item => (
                            <li
                                key={item.key}
                                className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage(item.key)}
                                    className="nav-link"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
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
                            {navItems.map(item => (
                                <li
                                    key={item.key}
                                    className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => { setCurrentPage(item.key); setIsMenuOpen(false); }}
                                        className="nav-link"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
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
