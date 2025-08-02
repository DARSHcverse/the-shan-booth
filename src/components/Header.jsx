import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../App.css';
import logo from '../images/logo.png';
import callIcon from '../images/callIcon.png';

const Header = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <a href="#" onClick={() => setCurrentPage('homepage')} className="logo-link">
                    <img src={logo} alt="The Shan Booth Logo" className="logo-img" />
                    <h1 className="logo-text">The Shan Booth</h1>
                </a>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
                    <Menu className="w-8 h-8 text-white" />
                </button>
                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className={`nav-item ${currentPage === 'homepage' ? 'active' : ''}`}>
                            <a href="#" onClick={() => { setCurrentPage('homepage'); setIsMenuOpen(false); }} className="nav-link">Homepage</a>
                        </li>
                        <li className={`nav-item ${currentPage === 'photobooths' ? 'active' : ''}`}>
                            <a href="#" onClick={() => { setCurrentPage('photobooths'); setIsMenuOpen(false); }} className="nav-link">Photobooths</a>
                        </li>
                        <li className={`nav-item ${currentPage === 'events' ? 'active' : ''}`}>
                            <a href="#" onClick={() => { setCurrentPage('events'); setIsMenuOpen(false); }} className="nav-link">Events</a>
                        </li>
                        <li className={`nav-item ${currentPage === 'packages' ? 'active' : ''}`}>
                            <a href="#" onClick={() => { setCurrentPage('packages'); setIsMenuOpen(false); }} className="nav-link">Packages</a>
                        </li>
                        <li className={`nav-item ${currentPage === 'quickquote' ? 'active' : ''}`}>
                            <a href="#" onClick={() => { setCurrentPage('quickquote'); setIsMenuOpen(false); }} className="nav-link">Quick Quote</a>
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