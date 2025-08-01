import React from 'react';
import '../App.css';
import img from '../images/boothimg2.jpg';

const HomePage = ({ setCurrentPage }) => (
    <main className="main-content">
        <section className="hero-section text-center">
            <div className="container">
                {/* <img src={img} alt="The Shan Booth img" className="main-img" /> */}
                <h2 className="hero-title">Welcome to The Shan Booth</h2>
                <p className="hero-subtitle">
                    Your premier destination for stunning photobooths and event packages.
                </p>
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

export default HomePage;