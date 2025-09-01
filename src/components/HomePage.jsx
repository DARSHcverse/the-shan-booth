import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css'; 

// Image Imports
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Shan Booth",
    "description": "Melbourne's premier photo booth hire for school graduations, Christmas parties, and end-of-year corporate events. Based in Tarneit.",
    "image": "https://www.photoboothwithshan.com.au/static/media/photobooth.7f8b9c0d.webp",
    "telephone": "+61475116521",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tarneit",
      "addressRegion": "VIC",
      "postalCode": "3029",
      "addressCountry": "AU"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -37.8108,
        "longitude": 144.6932
      },
      "geoRadius": "50000" // 50km
    }
  };

  return (
    <main className="main-content">
      <Helmet>
        <title>Graduation & Christmas Party Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Book the perfect photo booth for your Melbourne school graduation, Christmas party, or EOY corporate event. Dates for Nov & Dec 2025 are booking fast!"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* --- ADDED 'snow-effect' CLASS --- */}
      <section className="hero-section snow-effect">
        <div className="hero-overlay">
          <img
            src={images[currentImageIndex]}
            alt="Students celebrating their graduation with a fun photobooth"
            className="main-img"
          />
          <div className="hero-text">
            <h1 className="hero-title">EOY Parties, Graduations & Christmas Events</h1>
            <p className="hero-subtitle">
              Melbourne's favourite photo booth for unforgettable end-of-year celebrations.
            </p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/packages')} className="home-button">
                VIEW PACKAGES
              </button>
              <button onClick={() => navigate('/quickquote')} className="home-button secondary">
                CHECK 2025 DATES
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- ADDED 'snow-effect' CLASS --- */}
      <section className="section-padding seasonal-banner snow-effect">
          <div className="container">
              <h2 className="seasonal-title">🎓 Celebrate a Year of Achievements! 🎉</h2>
              <p className="seasonal-text">
                  From Grade 6 graduations to corporate Christmas parties, our photo booths are the perfect way to capture the fun of a successful year.
                  <br/><strong>Key dates in November and December are filling up. Don't miss out!</strong>
              </p>
          </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Fun for Every End-of-Year Celebration</h2>
          <div className="card-grid">
            <div className="card">
              <img src={events} alt="Colleagues laughing at a corporate Christmas party in Melbourne" className="card-img" />
              <h3 className="card-title">Corporate & Christmas Parties</h3>
              <p className="card-text">
                Reward your team and impress your clients. Our booths are a brilliant addition to EOY functions and festive celebrations.
              </p>
              <button onClick={() => navigate('/events')} className="card-button">
                Corporate Events
              </button>
            </div>
            <div className="card">
              <img src={packages} alt="Happy students with their photostrips at a school graduation" className="card-img" />
              <h3 className="card-title">School Graduations & Formals</h3>
              <p className="card-text">
                The perfect, age-appropriate entertainment for Grade 6, Year 10, and Year 12 graduations. Safe, fun, and unforgettable!
              </p>
              <button onClick={() => navigate('/events')} className="card-button">
                School Events
              </button>
            </div>
            <div className="card">
              <img src={photobooth} alt="Sleek, modern photobooth with custom branding options" className="card-img" />
              <h3 className="card-title">All-Inclusive Packages</h3>
              <p className="card-text">
                Every package includes unlimited prints, custom designs, fun props, and a professional attendant to run the show.
              </p>
              <button onClick={() => navigate('/packages')} className="card-button">
                Explore Packages
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">What Our Clients Are Saying</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">"The photo booth was the absolute highlight of our Grade 6 Graduation! The kids had a safe, amazing time, and parents loved the photos. The Shan Booth team was so professional. Highly recommended!"</p>
              <span className="testimonial-author">- Sarah J. (Tarneit Primary School)</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"We hired The Shan Booth for our company EOY party and it was a massive hit. It really brought the team together for a laugh. Professional, seamless, and so much fun. We're booking again for next year!"</p>
              <span className="testimonial-author">- Mark R. (Corporate EOY Party)</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"The Shan Booth was the best part of our wedding! Our guests are still talking about how much fun they had. The attendant was amazing and the photo quality is fantastic. 10/10 recommend!"</p>
              <span className="testimonial-author">- Jessica & Tom (Wedding)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container faq-container">
          <h2 className="section-title">Your Questions Answered</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are your attendants suitable for school events?</h3>
              <p>Yes. All our attendants have a valid Working with Children Check (WWCC) and are experienced in creating a fun, safe, and appropriate environment for students of all ages.</p>
            </div>
             <div className="faq-item">
              <h3>Can you provide themed props for our event?</h3>
              <p>Absolutely! We have a fantastic collection of festive, graduation, and formal props to perfectly match your celebration. Let us know your theme when you book!</p>
            </div>
            <div className="faq-item">
              <h3>How much space do you need?</h3>
              <p>For the best experience, we recommend a clear, flat area of at least 4m x 4m. This allows enough room for the booth, backdrop, prop table, and your guests.</p>
            </div>
            <div className="faq-item">
              <h3>Do we get digital copies of the photos?</h3>
              <p>Yes! After your event, you'll receive a pendrive with all the high-resolution images and GIFs, ready for you to keep and share.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Lock in the Fun for Your End-of-Year Event?</h2>
          <p>
            Don't leave your party entertainment to the last minute. Secure The Shan Booth today!
          </p>
          <button onClick={() => navigate('/quickquote')} className="home-button">
            Secure Your 2025 Date
          </button>
        </div>
      </section>
      
      <div className="seo-footer">
          <div className="container">
              <p>
                  <strong>Our event services:</strong> school graduation ideas • grade 6 graduation photo booth • corporate Christmas party hire • EOY party entertainment Melbourne • festive photo booth
              </p>
          </div>
      </div>
    </main>
  );
};

export default HomePage;