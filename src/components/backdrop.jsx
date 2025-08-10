import React, { useEffect, useState } from 'react';
import '../App.css'; // Assuming your main CSS is App.css
import blackdrop from '../images/blackbackdrop.png';
import graddrop from '../images/gradbackdrop.png';
import whitedrop from '../images/whitebackdrop.png';
import flowerkdrop from '../images/flowerbackdrop.png';

const BackdropPage = () => {
    // Backdrop image data, including their source and title for display
    const backdropImages = [
        { id: 'b1', src: blackdrop, title: '#1 Black' },
        { id: 'b2', src: whitedrop, title: '#2 White' },
        { id: 'b3', src: graddrop, title: '#3 Graduation' },
        { id: 'b4', src: flowerkdrop, title: '#4 Floral' },
        // Add more backdrop objects here as needed for your designs
    ];

    // Array of emojis representing fun props that will float
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

    // State to control the visibility of the full-screen image modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to store the details (src and title) of the currently selected backdrop for the modal
    const [selectedBackdrop, setSelectedBackdrop] = useState(null);

    // Helper function to generate a random position for floating props
    const getRandomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // State to hold random initial positions and animation properties for *only* the props
    const [propPositions, setPropPositions] = useState([]);

    // useEffect hook to run once on component mount to set initial random positions for props
    useEffect(() => {
        const generatedPropPositions = [];
        propIcons.forEach(() => {
            generatedPropPositions.push({
                top: getRandomPosition(5, 85) + '%', // Random vertical start position
                left: getRandomPosition(10, 90) + '%', // Random horizontal start position
                scale: Math.random() * (1.2 - 0.7) + 0.7, // Random scale for visual variety
                animationDelay: `${Math.random() * 2}s`, // Random delay before animation starts
                animationDuration: `${Math.random() * (8 - 4) + 4}s` // Random duration for animation cycle
            });
        });
        setPropPositions(generatedPropPositions);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Event handler for when a backdrop card is clicked
    const handleBackdropClick = (backdrop) => {
        setSelectedBackdrop(backdrop); // Set the clicked backdrop as the selected one
        setIsModalOpen(true); // Open the modal
    };

    // Event handler for closing the full-screen modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedBackdrop(null); // Clear the selected backdrop data
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
                            className="backdrop-card" // Applies the card styling
                            onClick={() => handleBackdropClick(backdrop)} // Makes the entire card clickable
                        >
                            <img
                                src={backdrop.src}
                                alt={backdrop.title}
                                className="backdrop-item" // Applies styling for the image within the card
                                // No inline styles for position or animation here, as they are now grid items
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found'; }}
                            />
                            <h3 className="backdrop-card-title">{backdrop.title}</h3> {/* Display backdrop title */}
                        </div>
                    ))}

                    {/* Render Prop Icons, which will float over the backdrop cards */}
                    {propIcons.map((icon, index) => (
                        <span
                            key={`prop-${index}`}
                            className="floating-item prop-item"
                            style={{
                                // Use propPositions for styling, as only props are floating
                                top: propPositions[index]?.top,
                                left: propPositions[index]?.left,
                                transform: `scale(${propPositions[index]?.scale})`,
                                animationDelay: propPositions[index]?.animationDelay,
                                animationDuration: propPositions[index]?.animationDuration,
                            }}
                            // No onClick handler here, props remain non-clickable
                        >
                            {icon}
                        </span>
                    ))}
                </div>
            </div>

            {/* Backdrop Modal - conditionally rendered when a backdrop is clicked */}
            {isModalOpen && selectedBackdrop && (
                <div className={`backdrop-modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={handleCloseModal}>
                    <div className="backdrop-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="backdrop-modal-close" onClick={handleCloseModal}>&times;</button>
                        <h3 className="backdrop-modal-title">{selectedBackdrop.title}</h3>
                        <img
                            src={selectedBackdrop.src}
                            alt={selectedBackdrop.title}
                            className="backdrop-modal-image"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/222222?text=Image+Not+Found'; }}
                        />
                    </div>
                </div>
            )}
        </main>
    );
};

export default BackdropPage;
