import React from 'react';
import '../App.css';

const PhotoboothsPage = () => (
    <main className="main-content section-padding">
        <div className="container">
            <h2 className="page-heading">Our Photobooths</h2>
            <div className="photobooth-list">
                <div className="card">
                    <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=Classic+Booth" alt="Classic Booth" className="card-img" />
                    <h3 className="card-title">Classic Photo Booth</h3>
                    <p className="card-text">The timeless choice for weddings and classic events. Provides high-quality prints and a fun experience.</p>
                </div>
                <div className="card">
                    <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=Open+Air+Booth" alt="Open Air Booth" className="card-img" />
                    <h3 className="card-title">Open-Air Photo Booth</h3>
                    <p className="card-text">A modern, sleek booth that's great for large groups and custom backdrops. Perfect for corporate events.</p>
                </div>
                <div className="card">
                    <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=360+Video+Booth" alt="360 Video Booth" className="card-img" />
                    <h3 className="card-title">360° Video Booth</h3>
                    <p className="card-text">Capture immersive, slow-motion videos for a truly memorable social media experience.</p>
                </div>
            </div>
        </div>
    </main>
);

export default PhotoboothsPage;