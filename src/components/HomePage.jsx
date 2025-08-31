import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import boothimg5 from '../images/boothimg5.webp';
import boothimg2 from '../images/boothimg2.webp';
import photobooth from '../images/photobooth.webp';
import events from '../images/boothimg7.webp';
import packages from '../images/boothimg4.webp';

const HomePage = () => {
  const navigate = useNavigate();
  const images = [boothimg5, boothimg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <main className="main-content">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Photo Booth Hire Melbourne | The Shan Booth – Weddings, Parties & Events</title>
        <meta name="description" content="The Shan Booth offers premier photo booth hire in Melbourne. Perfect for weddings, birthdays, corporate events, school graduations & parties. Unlimited prints, props & modern backdrops."/>
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <img src={images[currentImageIndex]} alt="The Shan Booth slideshow" className="main-img"/>
          <div className="hero-text">
            <h2 className="hero-title">Photo Booth Hire Melbourne</h2>
            <p className="hero-subtitle">Your premier destination for stunning photobooths and event packages.</p><br/>
            <button onClick={() => navigate('/packages')} className="home-button">PACKAGES</button><br/><br/>
            <button onClick={() => navigate('/quickquote')} className="home-button">QUICK QUOTE</button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="card-grid">
            <div className="card">
              <img src={photobooth} alt="Photobooths" className="card-img"/>
              <h3 className="card-title">Our Photobooths</h3>
              <p className="card-text">Discover our range of modern and fun photobooths perfect for any event.</p><br/>
              <button onClick={() => navigate('/photobooths')} className="card-button">Learn More</button>
            </div>
            <div className="card">
              <img src={events} alt="Events" className="card-img"/>
              <h3 className="card-title">Events</h3>
              <p className="card-text">We cater to all types of events, from weddings to corporate parties.</p><br/>
              <button onClick={() => navigate('/events')} className="card-button">Discover Events</button>
            </div>
            <div className="card">
              <img src={packages} alt="Packages" className="card-img"/>
              <h3 className="card-title">Our Packages</h3>
              <p className="card-text">Browse our flexible and affordable packages to find the perfect fit for you.</p><br/>
              <button onClick={() => navigate('/packages')} className="card-button">View Packages</button>
            </div>

          </div>
          <div className="seo-keywords" aria-hidden="false">
            <strong>Popular searches:</strong> photobooth hire Melbourne • photo booth hire Melbourne • wedding photo booth hire Melbourne • party photo booth hire Melbourne • corporate events photo booth hire Melbourne • engagement party photo booth hire • birthdays photo booth hire • graduations photo booth hire • cheap photo booth hire • affordable photo booth hire
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
