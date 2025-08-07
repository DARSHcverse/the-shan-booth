import React from 'react';
import '../App.css';
import './quickquote.jsx';

const PackagesPage = () => {
    const standardPackages = [
        {
            id: 'standard-1',
            price: '$390',
            duration: '2 HOURS',
            features: [
                'Unlimited Photos',
                'Instant Prints',
                'Event Props',
                'Photostrip Design',
                'USB Digital Images',
                'Photo Booth Attendant',
                'Standard Backdrop',
                'Custom Start-up Page',
            ],
        },
        {
            id: 'standard-2',
            price: '$550',
            duration: '3 HOURS',
            features: [
                'Unlimited Photos',
                'Instant Prints',
                'Extra Prints',
                'Event Props',
                'Photostrip Design',
                'USB Digital Images',
                'Online Gallery',
                'Photo Booth Attendant',
                'Standard Backdrop',
                'Custom Start-up Page',
            ],
        },
        {
            id: 'standard-3',
            price: '$700',
            duration: '4 HOURS',
            features: [
                'Unlimited Photos',
                'Instant Prints',
                'Extra Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Online Gallery',
                'Attendant Male/Female',
                'Standard Backdrop',
                'Custom Start-up Page',
                'Traditional Guest Book',
            ],
        },
        {
            id: 'standard-4',
            price: '$800',
            duration: '5 HOURS',
            features: [
                'Unlimited Photos',
                'Instant Prints',
                'Extra Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Online Gallery',
                'Attendant Male/Female',
                'Standard Backdrop',
                'Custom Start-up Page',
                'Traditional Guest Book',
            ],
        },
    ];

    const glamPackages = [
        {
            id: 'glam-1',
            price: '$490',
            duration: '2 HOURS',
            features: [
                'Unlimited Photos',
                'Postcard Size Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Photo Booth Attendant',
                'Standard White Backdrop',
            ],
        },
        {
            id: 'glam-2',
            price: '$590',
            duration: '3 HOURS',
            features: [
                'Unlimited Photos',
                'Postcard Size Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Photo Booth Attendant',
                'Standard White Backdrop',
            ],
        },
        {
            id: 'glam-3',
            price: '$750',
            duration: '4 HOURS',
            features: [
                'Unlimited Photos',
                'Postcard Size Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Photo Booth Attendant',
                'Standard White Backdrop',
                'Attendant Male/Female',
                'Traditional Guest Book',
            ],
        },
        {
            id: 'glam-4',
            price: '$870',
            duration: '5 HOURS',
            features: [
                'Unlimited Photos',
                'Postcard Size Prints',
                'Event Props',
                'Photostrip Design',
                'Free USB',
                'Photo Booth Attendant',
                'Standard White Backdrop',
                'Attendant Male/Female',
                'Traditional Guest Book',
            ],
        },
    ];

    return (
        <main className="main-content section-padding">
            <div className="container">
                <h2 className="page-heading">Our Packages</h2>

                <h3 className="package-section-heading">Standard Booth Packages</h3>
                <div className="package-list">
                    {standardPackages.map(pkg => (
                        <div className="package-card" key={pkg.id}>
                            <p className="package-price">{pkg.price}</p>
                            <h3 className="package-title">{pkg.duration}</h3>
                            <ul className="package-features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="text-center">
                                <button className="package-button" onClick={() => setCurrentPage('quickquote')}>
                                    Inquire
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="package-section-heading">Glam Booth Packages</h3>
                <div className="package-list">
                    {glamPackages.map(pkg => (
                        <div className="package-card" key={pkg.id}>
                            <p className="package-price">{pkg.price}</p>
                            <h3 className="package-title">{pkg.duration}</h3>
                            <ul className="package-features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="text-center">
                                <button className="package-button">
                                    Inquire
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PackagesPage;
