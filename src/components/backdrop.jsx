import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import blackdrop from '../images/blackbackdrop.png';
import graddrop from '../images/gradbackdrop.png';
import whitedrop from '../images/whitebackdrop.png';
import flowerkdrop from '../images/flowerbackdrop.png';

const propIcons = [
    '🎩', '👑', '👓', '🎀', '🥳', '🌟', '🎈', '🎉', '🎤', '✨', '💖',
];

const backdropImages = [
    { id: 'b1', src: blackdrop, title: 'Black Backdrop', description: 'Sleek black backdrop suitable for weddings and formal events.' },
    { id: 'b2', src: whitedrop, title: 'White Backdrop', description: 'Classic white backdrop perfect for modern, clean photo setups.' },
    { id: 'b3', src: graddrop, title: 'Graduation Backdrop', description: 'Celebrate milestones with a themed graduation backdrop.' },
    { id: 'b4', src: flowerkdrop, title: 'Floral Backdrop', description: 'Bright and playful floral backdrop for weddings and parties.' },
];

const BackdropPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBackdrop, setSelectedBackdrop] = useState(null);
    const [propPositions, setPropPositions] = useState([]);

    const getRandomPosition = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        const generatedPropPositions = propIcons.map(() => ({
            top: getRandomPosition(5, 85) + '%',
            left: getRandomPosition(10, 90) + '%',
            scale: Math.random() * (1.2 - 0.7) + 0.7,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * (8 - 4) + 4}s`,
        }));
        setPropPositions(generatedPropPositions);
    }, []);

    const handleBackdropClick = (backdrop) => {
        setSelectedBackdrop(backdrop);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBackdrop(null);
    };

    return (
        <>
            <Helmet>
                <title>Backdrop Designs & Fun Props for Photo Booths | The Shan Booth</title>
                <meta
                    name="description"
                    content="Discover whimsical backdrop designs and fun props for photo booths in Melbourne. Perfect for weddings, parties, school graduations, and corporate events."
                />
                <link rel="canonical" href="https://photoboothwithshan.com.au/backdrop" />

                {/* Open Graph */}
                <meta property="og:title" content="Backdrop Designs & Fun Props | The Shan Booth" />
                <meta property="og:description" content="Explore whimsical backdrop designs and playful props for photo booths at weddings, parties, school graduations, and corporate events." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://photoboothwithshan.com.au/backdrop" />
                <meta property="og:image" content="https://photoboothwithshan.com.au/images/whitebackdrop.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Backdrop Designs & Fun Props | The Shan Booth" />
                <meta name="twitter:description" content="Explore whimsical backdrop designs and playful props for photo booths at weddings, parties, school graduations, and corporate events." />
                <meta name="twitter:image" content="https://photoboothwithshan.com.au/images/gradbackdrop.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Photo Booth Backdrops & Props",
                        "description": "Interactive backdrop designs and fun props for photo booths at weddings, parties, school graduations, and corporate events in Melbourne.",
                        "provider": {
                            "@type": "Organization",
                            "name": "The Shan Booth",
                            "url": "https://photoboothwithshan.com.au"
                        },
                        "areaServed": "Melbourne, Australia",
                        "serviceType": "Photo Booth Hire"
                    }
                    `}
                </script>
            </Helmet>

            <main className="backdrop-page-main section-padding">
                <div className="container backdrop-container">
                    <h1 className="page-heading">Our Backdrop Designs & Fun Props</h1>
                    <p className="backdrop-intro-text">
                        Explore a whimsical collection of our popular backdrops and playful props, floating to inspire your next event! Click a backdrop to view it closer.
                    </p>

                    <div className="interactive-floating-area">
                        {backdropImages.map((backdrop) => (
                            <div
                                key={backdrop.id}
                                className="backdrop-card"
                                onClick={() => handleBackdropClick(backdrop)}
                            >
                                <img
                                    src={backdrop.src}
                                    alt={backdrop.title}  // ✅ Updated alt text
                                    className="backdrop-item"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found'; }}
                                />
                                <h3 className="backdrop-card-title">{backdrop.title}</h3>
                                <p className="backdrop-card-description">{backdrop.description}</p>
                            </div>
                        ))}

                        {propIcons.map((icon, index) => (
                            <span
                                key={`prop-${index}`}
                                className="floating-item prop-item"
                                style={{
                                    top: propPositions[index]?.top,
                                    left: propPositions[index]?.left,
                                    transform: `scale(${propPositions[index]?.scale})`,
                                    animationDelay: propPositions[index]?.animationDelay,
                                    animationDuration: propPositions[index]?.animationDuration,
                                }}
                            >
                                {icon}
                            </span>
                        ))}
                    </div>
                </div>

                {isModalOpen && selectedBackdrop && (
                    <div
                        className={`backdrop-modal-overlay ${isModalOpen ? 'open' : ''}`}
                        onClick={handleCloseModal}
                    >
                        <div
                            className="backdrop-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="backdrop-modal-close" onClick={handleCloseModal}>
                                &times;
                            </button>
                            <h3 className="backdrop-modal-title">{selectedBackdrop.title}</h3>
                            <img
                                src={selectedBackdrop.src}
                                alt={selectedBackdrop.title} // ✅ Updated alt text
                                className="backdrop-modal-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found'; }}
                            />
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default BackdropPage;