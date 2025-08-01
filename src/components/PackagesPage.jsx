import React from 'react';
import '../App.css';

const PackagesPage = () => (
    <main className="main-content section-padding">
        <div className="container">
            <h2 className="page-heading">Our Packages</h2>
            <div className="package-list">
                <div className="package-card">
                    <h3 className="package-title">Bronze Package</h3>
                    <p className="package-description">Perfect for small gatherings and private parties.</p>
                    <ul className="package-features">
                        <li>2 hours of booth time</li>
                        <li>Standard backdrop</li>
                        <li>Unlimited digital photos</li>
                        <li>Basic prop kit</li>
                    </ul>
                    <div className="text-center">
                        <button className="package-button">
                            Select Package
                        </button>
                    </div>
                </div>
                <div className="package-card">
                    <h3 className="package-title">Silver Package</h3>
                    <p className="package-description">Our most popular package for weddings and corporate events.</p>
                    <ul className="package-features">
                        <li>4 hours of booth time</li>
                        <li>Choice of premium backdrop</li>
                        <li>Unlimited digital photos & prints</li>
                        <li>Deluxe prop kit</li>
                        <li>Custom photo template design</li>
                    </ul>
                    <div className="text-center">
                        <button className="package-button">
                            Select Package
                        </button>
                    </div>
                </div>
                <div className="package-card">
                    <h3 className="package-title">Gold Package</h3>
                    <p className="package-description">The ultimate experience for a truly spectacular event.</p>
                    <ul className="package-features">
                        <li>Full-day booth time</li>
                        <li>Custom LED backdrop</li>
                        <li>Unlimited digital photos & prints</li>
                        <li>VIP prop kit</li>
                        <li>On-site attendant</li>
                        <li>Custom animated GIFs</li>
                    </ul>
                    <div className="text-center">
                        <button className="package-button">
                            Select Package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default PackagesPage;