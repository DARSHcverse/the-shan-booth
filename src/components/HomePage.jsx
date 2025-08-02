import React, { useState, useEffect } from 'react';
import '../App.css';
import boothimg1 from '../images/boothimg.jpg'; // Assuming you have other images
import boothimg2 from '../images/boothimg2.jpg';


const HomePage = ({ setCurrentPage }) => {

    const images = [boothimg1, boothimg2];
    

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % images.length
            );
        }, 5000); // Change image every 5 seconds

        
        return () => clearInterval(intervalId);
    }, [images.length]); 

    return (
        <main className="main-content">
            <section className="hero-section">
                <div className="hero-overlay">
                    <img src={images[currentImageIndex]} alt="The Shan Booth slideshow" className="main-img" />
                    <div className="hero-text">
                        <h2 className="hero-title">Welcome to The Shan Booth</h2>
                        <p className="hero-subtitle">
                            Your premier destination for stunning photobooths and event packages.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <div className="card-grid">
                        <div className="card">
                            <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=Photo Booths" alt="Photobooths" className="card-img" />
                            <h3 className="card-title">Our Photobooths</h3>
                            <p className="card-text">Discover our range of modern and fun photobooths perfect for any event.</p>
                            <button onClick={() => setCurrentPage('photobooths')} className="card-button">
                                Learn More
                            </button>
                        </div>
                        <div className="card">
                            <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=Events" alt="Events" className="card-img" />
                            <h3 className="card-title">Events</h3>
                            <p className="card-text">We cater to all types of events, from weddings to corporate parties.</p>
                            <button onClick={() => setCurrentPage('events')} className="card-button">
                                Discover Events
                            </button>
                        </div>
                        <div className="card">
                            <img src="https://placehold.co/400x250/E5E7EB/4B5563?text=Packages" alt="Packages" className="card-img" />
                            <h3 className="card-title">Our Packages</h3>
                            <p className="card-text">Browse our flexible and affordable packages to find the perfect fit for you.</p>
                            <button onClick={() => setCurrentPage('packages')} className="card-button">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;