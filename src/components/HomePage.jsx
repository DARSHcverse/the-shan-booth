import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import boothimg5 from '../images/boothimg5.jpg';
// import boothimg2 from '../images/boothimg2.jpg';
import photobooth from '../images/photobooth.jpg';
import events from '../images/boothimg7.jpg';
import packages from '../images/boothimg4.jpg';
import boothvideo from '../images/boothvideo.mp4';
import boothvideo2 from '../images/boothvideo2.mp4';

const HomePage = () => {
  const navigate = useNavigate();
  const images = [boothvideo, boothvideo2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-overlay">
          <video
            key={currentImageIndex}          // <-- key forces remount on index change
            className="main-img"
            src={images[currentImageIndex]}  // <-- use src directly here
            autoPlay
            loop
            muted
          />
          <div className="hero-text">
            <h2 className="hero-title">Welcome to The Shan Booth</h2>
            <p className="hero-subtitle">
              Your premier destination for stunning photobooths and event packages.
            </p><br />
            <button
              onClick={() => navigate('/packages')}
              className="home-button"
            >
              PACKAGES
            </button><br /><br />
            <button
              onClick={() => navigate('/quickquote')}
              className="home-button"
            >
              QUICK QUOTE
            </button>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="card-grid">
            <div className="card">
              <img src={photobooth} alt="Photobooths" className="card-img" />
              <h3 className="card-title">Our Photobooths</h3>
              <p className="card-text">
                Discover our range of modern and fun photobooths perfect for any event.
              </p>
              <button
                onClick={() => navigate('/photobooths')}
                className="card-button"
              >
                Learn More
              </button>
            </div>
            <div className="card">
              <img src={events} alt="Events" className="card-img" />
              <h3 className="card-title">Events</h3>
              <p className="card-text">
                We cater to all types of events, from weddings to corporate parties.
              </p>
              <button
                onClick={() => navigate('/events')}
                className="card-button"
              >
                Discover Events
              </button>
            </div>
            <div className="card">
              <img src={packages} alt="Packages" className="card-img" />
              <h3 className="card-title">Our Packages</h3>
              <p className="card-text">
                Browse our flexible and affordable packages to find the perfect fit for you.
              </p>
              <button
                onClick={() => navigate('/packages')}
                className="card-button"
              >
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
