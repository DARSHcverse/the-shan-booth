import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import boothImg from "../images/boothimg4.webp";
import boothImg2 from "../images/boothimg5.webp";

const PhotoboothLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events | The Shan Booth</title>
        <meta
          name="description"
          content="Premium photobooth hire in Melbourne, Tarneit & Geelong. Perfect for weddings, birthdays, corporate functions & parties. Unlimited prints, props & instant sharing."
        />
        <meta
          name="keywords"
          content="photobooth hire Melbourne, wedding photo booth Melbourne, corporate photo booth Melbourne, party photo booth hire Melbourne, Geelong photobooth, Tarneit photo booth hire, birthday party photo booth Melbourne"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photobooth-hire-melbourne" />

        {/* Open Graph */}
        <meta property="og:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          property="og:description"
          content="Make your event unforgettable with The Shan Booth. Weddings, birthdays & corporate photobooth hire across Melbourne, Tarneit & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photobooth-hire-melbourne" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/boothimg5.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          name="twitter:description"
          content="Book your Melbourne photobooth today! Unlimited prints, props & instant digital sharing."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/boothimg4.webp" />

        {/* ✅ LocalBusiness Schema JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "image": "https://www.photoboothwithshan.com.au/boothimg5.webp",
            "url": "https://www.photoboothwithshan.com.au",
            "telephone": "+61 400 000 000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "priceRange": "$$",
            "description": "Premium photobooth hire services for weddings, corporate events, and parties across Melbourne, Tarneit & Geelong."
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="photobooth-landing">
        <h1>Photobooth Hire Melbourne | Weddings, Parties & Events</h1>
        <p>
          Looking for the <strong>best photobooth hire in Melbourne</strong>? The Shan Booth offers premium booths with
          <strong> unlimited prints, fun props, and instant digital sharing</strong>. Perfect for weddings, birthdays,
          school functions, and corporate events across Melbourne, Tarneit & Geelong.
        </p>

        <div className="photobooth-gallery">
          <img src={boothImg} alt="Photobooth hire setup in Melbourne event" loading="lazy" />
          <img src={boothImg2} alt="Guests enjoying photobooth props and prints in Melbourne" loading="lazy" />
        </div>

        <div className="photobooth-section">
          <h2>✨ Why Choose The Shan Booth?</h2>
          <ul className="feature-list">
            <li>📸 <strong>Unlimited Prints & Digital Sharing</strong> – Take home instant memories & share online.</li>
            <li>🎉 <strong>Props & Backdrops</strong> – From elegant wedding styles to party vibes.</li>
            <li>💍 <strong>Perfect for Any Occasion</strong> – Weddings, birthdays, school events & corporate parties.</li>
            <li>🚗 <strong>We Come to You</strong> – Servicing Melbourne, Geelong & Tarneit.</li>
          </ul>
        </div>

        <div className="photobooth-section">
          <h2>📦 Our Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for small parties or casual gatherings.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Our most popular package – ideal for weddings, birthdays, and office events.</p>
            </div>
            <div className="package-item">
              <h3>All Night Package</h3>
              <p>Unlimited fun & memories for your biggest events and galas.</p>
            </div>
          </div>
        </div>

        <div className="photobooth-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong & Grovedale</li>
            <li>Tarneit & Western Suburbs</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">📩 Get a Quick Quote</a>
          <a href="/booking" className="cta-btn">📅 Book Now</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> photobooth hire Melbourne • wedding photo booth Melbourne • corporate event
          photo booth hire • Geelong photobooth • Tarneit photo booth
        </div>
      </div>
    </>
  );
};

export default PhotoboothLanding;
