import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';

// Main Image Imports
import boothimg5 from '../images/boothimg5.webp';
import boothimg2 from '../images/boothimg2.webp';
import photobooth from '../images/photobooth.webp';
import events from '../images/boothimg7.webp';
import packages from '../images/boothimg4.webp';

// Floating Icons
import iconCamera from '../images/prop2.png';
import iconChristmasTree from '../images/prop3.png';
import iconPartyPopper from '../images/prop4.png';
import iconPhotoStrip from '../images/prop5.png';

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

  // ✅ Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Shan Booth",
    "description": "Melbourne's premier photo booth hire for weddings, school graduations, Christmas parties, and corporate events. Based in Tarneit.",
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
      "geoRadius": "50000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Open Photo Booth Hire Melbourne",
          "description": "Spacious, modern open photo booth hire in Melbourne for weddings, graduations, birthdays, and corporate events."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enclosed Photo Booth Hire Melbourne",
          "description": "Classic enclosed photo booth for private, fun photo sessions at weddings, birthdays, and Christmas parties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Glam Photo Booth Hire Melbourne",
          "description": "High-end glam photo booth with elegant black & white photography, perfect for weddings and premium events."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Magic Mirror Photo Booth Melbourne",
          "description": "Interactive magic mirror photo booth with animations, touch screen, and instant prints. A crowd favourite for all events."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "360 Spinner Booth Hire Melbourne",
          "description": "Immersive 360-degree video booth for parties, corporate launches, and weddings. Shareable on TikTok & Instagram."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Audio Guest Book Melbourne",
          "description": "Capture heartfelt voice messages from your guests with our modern audio guest book service for weddings & parties."
        }
      }
    ]
  };

  return (
    <main className="main-content">
      <Helmet>
        <title>Photo Booth Hire Melbourne | Weddings, Graduations & Events | The Shan Booth</title>
        <meta
          name="description"
          content="Affordable photo booth hire Melbourne for weddings, school graduations, corporate events & Christmas parties. Book our open, glam, magic mirror & 360 booths today!"
        />
        <meta
          name="keywords"
          content="photobooth hire melbourne, photo booth hire Melbourne, wedding photo booth Melbourne, corporate event photo booth Melbourne, school graduation photo booth, Christmas party photo booth Melbourne, glam booth hire, magic mirror photo booth Melbourne, 360 booth hire Melbourne, open photo booth hire, enclosed photo booth hire"
        />
        <meta name="author" content="The Shan Booth" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#d6336c" />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events | The Shan Booth" />
        <meta
          property="og:description"
          content="Affordable photo booth hire in Melbourne for weddings, school events, corporate functions & Christmas parties. Fun props, instant prints & 360 booths!"
        />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/" />
        <meta property="og:site_name" content="The Shan Booth" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/static/media/photobooth.7f8b9c0d.webp" />
        <meta property="og:image:alt" content="Photo booth hire Melbourne - The Shan Booth setup" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book affordable photo booth hire Melbourne – weddings, school graduations, Christmas parties & corporate events. Choose open, glam, magic mirror & 360 booths."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/static/media/photobooth.7f8b9c0d.webp" />
        <meta name="twitter:creator" content="@TheShanBooth" />

        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* --- Hero Section --- */}
      <section className="hero-section snow-effect" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="floating-items-container">
          <div className="floating-item item-2"><img src={iconCamera} alt="Floating camera icon" /></div>
          <div className="floating-item item-3"><img src={iconChristmasTree} alt="Floating Christmas tree icon" /></div>
          <div className="floating-item item-4"><img src={iconPartyPopper} alt="Floating party popper icon" /></div>
          <div className="floating-item item-5"><img src={iconPhotoStrip} alt="Floating strip icon" /></div>
        </div>

        <div className="hero-overlay">
          <img
            src={images[currentImageIndex]}
            alt="Students celebrating their graduation with a fun photobooth"
            className="main-img"
          />
          <div className="hero-text">
            <h1 className="hero-title">PHOTO BOOTH HIRE MELBOURNE</h1>
            <p className="hero-subtitle">Melbourne's favourite photo booth for unforgettable end-of-year celebrations.</p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/packages')} className="home-button">VIEW PACKAGES</button>
              <button onClick={() => navigate('/quickquote')} className="home-button secondary">CHECK 2025 DATES</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="section-padding seasonal-banner snow-effect">
        <div className="container">
          <h2 className="seasonal-title">🎓 Celebrate a Year of Achievements! 🎉</h2>
          <p className="seasonal-text">
            From Grade 6 graduations to corporate Christmas parties, our photo booths are the perfect way to capture the fun of a successful year.
            <br /><strong>Key dates in November and December are filling up. Don't miss out!</strong>
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Fun for Every End-of-Year Celebration</h2>
          <div className="card-grid">
            <div className="card">
              <img src={events} alt="Colleagues laughing at a corporate Christmas party in Melbourne" className="card-img" />
              <h3 className="card-title">Corporate & Christmas Parties</h3>
              <p className="card-text">Reward your team and impress your clients. Our booths are a brilliant addition to EOY functions and festive celebrations.</p>
              <button onClick={() => navigate('/events')} className="card-button">Corporate Events</button>
            </div>
            <div className="card">
              <img src={packages} alt="Happy students with their photostrips at a school graduation" className="card-img" />
              <h3 className="card-title">School Graduations & Formals</h3>
              <p className="card-text">The perfect, age-appropriate entertainment for Grade 6, Year 10, and Year 12 graduations. Safe, fun, and unforgettable!</p>
              <button onClick={() => navigate('/events')} className="card-button">School Events</button>
            </div>
            <div className="card">
              <img src={photobooth} alt="Sleek, modern photobooth with custom branding options" className="card-img" />
              <h3 className="card-title">All-Inclusive Packages</h3>
              <p className="card-text">Every package includes unlimited prints, custom designs, fun props, and a professional attendant to run the show.</p>
              <button onClick={() => navigate('/packages')} className="card-button">Explore Packages</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO Section --- */}
      <section className="seo-section">
        <div className="container">
          <h2>Melbourne’s Favourite Photo Booth Hire</h2>
          <p>
            When it comes to <strong>photo booth hire Melbourne</strong>, quality matters. That’s why 
            The Shan Booth invests in the latest <strong>Canon R100 mirrorless cameras</strong> to deliver 
            crystal-clear, professional-grade photos at every event. Unlike basic webcam booths, our 
            <strong> photo booths</strong> capture vibrant colours, sharp details, and stunning lighting so 
            your memories look their absolute best both in print and digital formats. Each 
            <strong> photo booth hire</strong> package includes unlimited instant prints, fun props, stylish 
            backdrops, and a friendly attendant to make sure everything runs smoothly. Whether you choose our 
            <strong> open photo booth</strong>, elegant <strong>glam booth</strong>, interactive 
            <strong> Enclosed photo booth</strong>, 
            you’ll enjoy premium service that keeps guests smiling all night. For weddings, graduations, 
            birthdays, and corporate functions, trust The Shan Booth for the best <strong>photo booth hire Melbourne</strong> experience.
          </p>
          <ul className="feature-list">
            <li>📸 Equipped with <strong>Canon R100 mirrorless cameras</strong> for the highest photo quality</li>
            <li>🖨️ Unlimited <strong>instant prints</strong> for all your guests to take home</li>
            <li>🎭 A wide selection of <strong>fun props</strong> to match your event theme</li>
            <li>🎨 Custom-designed <strong>photo strips</strong> and backdrops to suit weddings, graduations & parties</li>
            <li>👩‍💼 A professional <strong>photo booth attendant</strong> with every booking</li>
            <li>🚚 Free delivery within 40km </li>
            <li>🎉 Options include <strong>open booths</strong>, <strong>glam booths</strong> and <strong>Enclosed booths</strong></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* FAQ */}
      <section className="section-padding">
        <div className="container faq-container">
          <h2 className="section-title">Your Questions Answered</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are your attendants suitable for school events?</h3>
              <p>Yes. All our attendants have a valid Working with Children Check (WWCC) and are experienced in creating a fun, safe, and appropriate environment for students of all ages. <strong>Photo booth hire Melbourne</strong></p>
            </div>
            <div className="faq-item">
              <h3>Can you provide themed props for our event?</h3>
              <p>Absolutely! We have a fantastic collection of festive, graduation, and formal props to perfectly match your celebration. Let us know your theme when you book!<strong>photo booth hire Melbourne</strong></p>
            </div>
            <div className="faq-item">
              <h3>How much space do you need?</h3>
              <p>For the best experience, we recommend a clear, flat area of at least 4m x 4m. This allows enough room for the booth, backdrop, prop table, and your guests.<strong>photo booth hire Melbourne</strong></p>
            </div>
            <div className="faq-item">
              <h3>Do we get digital copies of the photos?</h3>
              <p>Yes! After your event, you'll receive a pendrive with all the high-resolution images and GIFs, ready for you to keep and share.<strong>photo booth hire Melbourne</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Lock in the Fun for Your End-of-Year Event?</h2>
          <p>Don't leave your party entertainment to the last minute. Secure The Shan Booth today!</p>
          <button onClick={() => navigate('/quickquote')} className="home-button">Secure Your 2025 Date</button>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="seo-footer">
        <div className="container">
          <p>
            <strong>Our event services:</strong> photo booth hire Melbourne • school graduation ideas • grade 6 graduation photo booth • corporate Christmas party hire • EOY party entertainment Melbourne • festive photo booth • open booth hire Melbourne • glam booth hire Melbourne • enclosed booth hire Melbourne • magic mirror photo booth hire Melbourne • 360 spinner booth Melbourne • audio guest book hire Melbourne
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
