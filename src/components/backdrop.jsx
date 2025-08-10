import React, { useEffect, useState } from 'react';
import '../App.css'; // Assuming your main CSS is App.css
import blackdrop from '../images/blackbackdrop.png';
import graddrop from '../images/gradbackdrop.png';
import whitedrop from '../images/whitebackdrop.png';
import flowerkdrop from '../images/flowerbackdrop.png';

// Static array of emojis representing fun props that will float
const propIcons = [
    '🎩', // Top hat
    '👑', // Crown
    '👓', // Glasses
    '🎀', // Bow
    '🥳', // Party popper
    '🌟', // Star
    '🎈', // Balloon
    '🎉', // Party popper
    '🎤', // Microphone
    '✨', // Sparkles
    '💖', // Heart
];

// Backdrop image data, including their source and title for display
const backdropImages = [
    { id: 'b1', src: blackdrop, title: '#1 Black' },
    { id: 'b2', src: whitedrop, title: '#2 White' },
    { id: 'b3', src: graddrop, title: '#3 Graduation' },
    { id: 'b4', src: flowerkdrop, title: '#4 Floral' },
    // Add more backdrop objects here as needed for your designs
];

const BackdropPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBackdrop, setSelectedBackdrop] = useState(null);
    const [propPositions, setPropPositions] = useState([]);

    // Helper function to generate a random position for floating props
    const getRandomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Generate initial random positions for props
    useEffect(() => {
        const generatedPropPositions = propIcons.map(() => ({
            top: getRandomPosition(5, 85) + '%', // Random vertical start position
            left: getRandomPosition(10, 90) + '%', // Random horizontal start position
            scale: Math.random() * (1.2 - 0.7) + 0.7, // Random scale for visual variety
            animationDelay: `${Math.random() * 2}s`, // Random delay before animation starts
            animationDuration: `${Math.random() * (8 - 4) + 4}s`, // Random duration for animation cycle
        }));
        setPropPositions(generatedPropPositions);
    }, []); // Runs only once on mount

    const handleBackdropClick = (backdrop) => {
        setSelectedBackdrop(backdrop);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBackdrop(null);
    };

    return (
        <main className="backdrop-page-main section-padding">
            <div className="container backdrop-container">
                <h2 className="page-heading">Our Backdrop Designs & Fun Props</h2>
                <p className="backdrop-intro-text">
                    Explore a whimsical collection of our popular backdrops and playful props,
                    floating to inspire your next event! Click a backdrop to view it closer.
                </p>

                <div className="interactive-floating-area">
                    {/* Render Backdrop Images as Cards */}
                    {backdropImages.map((backdrop) => (
                        <div
                            key={backdrop.id}
                            className="backdrop-card"
                            onClick={() => handleBackdropClick(backdrop)}
                        >
                            <img
                                src={backdrop.src}
                                alt={backdrop.title}
                                className="backdrop-item"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found';
                                }}
                            />
                            <h3 className="backdrop-card-title">{backdrop.title}</h3>
                        </div>
                    ))}

                    {/* Render Prop Icons */}
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

            {/* Modal */}
            {isModalOpen && selectedBackdrop && (
                <div
                    className={`backdrop-modal-overlay ${isModalOpen ? 'open' : ''}`}
                    onClick={handleCloseModal}
                >
                    <div
                        className="backdrop-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="backdrop-modal-close"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <h3 className="backdrop-modal-title">{selectedBackdrop.title}</h3>
                        <img
                            src={selectedBackdrop.src}
                            alt={selectedBackdrop.title}
                            className="backdrop-modal-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found';
                            }}
                        />
                    </div>
                </div>
            )}
        </main>
    );
};

export default BackdropPage;
