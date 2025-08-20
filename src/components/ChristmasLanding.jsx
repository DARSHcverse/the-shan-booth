import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import christmasImg from "../images/christmas.webp";
import christmasImg2 from "../images/christmas2.webp";

const ChristmasLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>Christmas Photo Booth Hire Melbourne 🎄 | The Shan Booth</title>
        <meta
          name="description"
          content="Celebrate Christmas & end-of-year parties in Melbourne with The Shan Booth! Fun festive photo booths with unlimited prints, props, and instant sharing. Serving Melbourne, Tarneit & Geelong."
        />
        <meta
          name="keywords"
          content="Christmas party photobooth hire Melbourne, Corporate end-of-year photobooth Melbourne, Geelong & Grovedale holiday party photo booth, Christmas event photo booth packages, Christmas photo booth Melbourne, Christmas party photo booth, end of year photo booth hire, corporate event photo booth Melbourne, holiday photo booth Geelong, Christmas photo booth Tarneit, festive party photobooth"
        />
        <link
          rel="canonical"
          href="https://photoboothwithshan.com.au/christmas"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Christmas & Holiday Photo Booth Hire Melbourne 🎅 | The Shan Booth"
        />
        <meta
          property="og:description"
          content="Make your Christmas party unforgettable! The Shan Booth offers festive photo booths with unlimited prints, props & instant sharing across Melbourne & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://photoboothwithshan.com.au/christmas"
        />
        <meta
          property="og:image"
          content="https://photoboothwithshan.com.au/christmas.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Christmas & Holiday Photo Booth Hire Melbourne 🎄 | The Shan Booth"
        />
        <meta
          name="twitter:description"
          content="Book your Christmas photo booth today! Serving Melbourne, Tarneit & Geelong with festive props & unlimited prints."
        />
        <meta
          name="twitter:image"
          content="https://photoboothwithshan.com.au/christmas2.webp"
        />

        {/* Schema.org JSON-LD for seasonal landing page */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Christmas Photo Booth Hire Melbourne",
            "startDate": "2025-12-01",
            "endDate": "2026-01-05",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Melbourne & Geelong",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "addressCountry": "AU"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://photoboothwithshan.com.au"
            },
            "image": "https://photoboothwithshan.com.au/christmas.webp",
            "description": "Book a festive photo booth for your Christmas parties, corporate events & end-of-year celebrations across Melbourne, Tarneit & Geelong."
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="christmas-landing">
        <h1>Christmas & End-of-Year Party Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Make your <strong>Christmas party</strong>, <strong>corporate event</strong>, or
          <strong> end-of-year celebration</strong> unforgettable with <strong>The Shan Booth</strong>!
          Our premium photobooths bring the fun, capture memories, and create instant keepsakes your guests will love.
        </p>

        <div className="christmas-gallery">
          <img src={christmasImg} alt="Christmas photobooth setup in Melbourne" loading="lazy" />
          <img src={christmasImg2} alt="Festive Christmas photobooth props and backdrop" loading="lazy" />
        </div>

        <div className="christmas-section">
          <h2>📸 Why Choose Our Photobooths for Your Holiday Event?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Festive Backdrops & Props</strong> – Christmas hats, reindeer antlers, Santa beards, and more!</li>
            <li>✨ <strong>Instant Prints & Digital Sharing</strong> – Guests can take home a keepsake or share instantly online.</li>
            <li>✨ <strong>Perfect for Any Event</strong> – Office parties, family gatherings, and large corporate galas.</li>
            <li>✨ <strong>Servicing Melbourne, Geelong & Grovedale</strong> – We bring the booth to your venue.</li>
          </ul>
        </div>

        <div className="christmas-section">
          <h2>🎉 Christmas Party Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for smaller celebrations and quick end-of-day team events.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Great for Christmas parties and end-of-year events needing extra time, extra prints, and fun.</p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>Unlimited fun for the whole night – ideal for big corporate galas and community events.</p>
            </div>
          </div>
          <p className="hint-text">💡 Ask about our custom holiday props and backdrops for an extra festive touch!</p>
        </div>

        <div className="christmas-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>Surrounding areas</li>
          </ul>
        </div>

        <div className="christmas-section">
          <h2>🎅 Book Early for Christmas 2025</h2>
          <p>
            The holiday season is one of our busiest times of the year! Secure your booth today to avoid missing out.
          </p>
          <h3 className="available-title">📅 Available for:</h3>
          <ul className="available-list">
            <li>Christmas parties</li>
            <li>Corporate end-of-year events</li>
            <li>School functions</li>
            <li>Community & holiday festivals</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your Christmas Photobooth Today</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> Christmas party photobooth hire Melbourne • Corporate end-of-year photobooth Melbourne • Geelong & Grovedale holiday party photo booth • Christmas event photo booth packages
        </div>
      </div>
    </>
  );
};

export default ChristmasLanding;
