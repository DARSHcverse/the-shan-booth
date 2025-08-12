import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import photobooth from '../images/photobooth.jpg';
import events from '../images/boothimg7.jpg';
import packages from '../images/boothimg4.jpg';
import boothvideo from '../images/boothvideo.mp4';
import boothvideo2 from '../images/boothvideo2.mp4';

// Move videos outside the component (module scope)
const videos = [boothvideo, boothvideo2];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, []); // no ESLint warning now

  return (
    <main className="main-content">
      <section
        className="hero-section"
        style={{
          position: 'relative',
          height: '70vh',        // adjust height as needed
          minHeight: '400px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="video-wrapper"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: currentIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: 'none',
              }}
            />
          ))}
        </div>

        <div
          className="hero-text"
          style={{
            position: 'relative',
            zIndex: 2,
            color: '#fff',
            textAlign: 'center',
            padding: '0 20px',
            maxWidth: '600px',
          }}
        >
          <h2 className="hero-title">Welcome to The Shan Booth</h2>
          <p className="hero-subtitle">
            Your premier destination for stunning photobooths and event packages.
          </p>
          <br />
          <button onClick={() => navigate('/packages')} className="home-button">
            PACKAGES
          </button>
          <br />
          <br />
          <button onClick={() => navigate('/quickquote')} className="home-button">
            QUICK QUOTE
          </button>
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
              <button onClick={() => navigate('/photobooths')} className="card-button">
                Learn More
              </button>
            </div>
            <div className="card">
              <img src={events} alt="Events" className="card-img" />
              <h3 className="card-title">Events</h3>
              <p className="card-text">
                We cater to all types of events, from weddings to corporate parties.
              </p>
              <button onClick={() => navigate('/events')} className="card-button">
                Discover Events
              </button>
            </div>
            <div className="card">
              <img src={packages} alt="Packages" className="card-img" />
              <h3 className="card-title">Our Packages</h3>
              <p className="card-text">
                Browse our flexible and affordable packages to find the perfect fit for you.
              </p>
              <button onClick={() => navigate('/packages')} className="card-button">
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
