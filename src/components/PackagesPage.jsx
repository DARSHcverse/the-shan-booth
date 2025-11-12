import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';

import offer from '../images/offer.webp';

const PackagesPage = () => {
  const navigate = useNavigate();

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
      price: '$860',
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
    <>
      <Helmet>
        <title>Photo Booth Hire Packages Melbourne | Affordable Wedding & Party Booths</title>
        <meta
          name="description"
          content="Explore affordable photo booth hire packages in Melbourne. Choose from Standard or Glam Booth options with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/packages" />

        {/* Open Graph */}
        <meta property="og:title" content="Photo Booth Hire Packages in Melbourne | The Shan Booth" />
        <meta
          property="og:description"
          content="Choose from Standard or Glam Booth packages with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/packages" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/photobooth.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Packages in Melbourne | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Choose from Standard or Glam Booth packages with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/images/photobooth.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Photo Booth Hire Packages",
              "description": "Standard and Glam photo booth hire packages in Melbourne for weddings, parties, and corporate events.",
              "provider": {
                "@type": "Organization",
                "name": "The Shan Booth",
                "url": "https://www.photoboothwithshan.com.au"
              },
              "areaServed": "Melbourne, Australia",
              "serviceType": "Photo Booth Hire"
            }
          `}
        </script>
      </Helmet>

      <main className="main-content section-padding">
        <div className="container">
          <h1 className="page-heading">PHOTOBOOTH HIRE PACKAGE MELBOURNE</h1>
          <h2 className="package-section-heading">OPEN & ENCLOSED BOOTH PACKAGES</h2>
          <div className="floating-items-container-offer">
            <div className="floating-item-offer item-2-offer"><img src={offer} alt="Floating camera icon" /></div>
          </div>
          <div className="package-list">
            {standardPackages.map((pkg) => (
              <div className="package-card" key={pkg.id}>
                <p className="package-price">{pkg.price}</p>
                <h3 className="package-title">{pkg.duration}</h3>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="package-button" onClick={() => navigate('/quickquote')}>
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="package-section-heading">Glam Booth Packages</h2>
          <div className="package-list">
            {glamPackages.map((pkg) => (
              <div className="package-card" key={pkg.id}>
                <p className="package-price">{pkg.price}</p>
                <h3 className="package-title">{pkg.duration}</h3>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="package-button" onClick={() => navigate('/quickquote')}>
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PackagesPage;