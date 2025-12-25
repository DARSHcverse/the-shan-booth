import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import gradBackdrop from "../images/gradbooth.jpg";
import gradStrip from "../images/GradStrip.png";

const GraduationLanding = () => {
  return (
    <>
      {/* SEO + Meta Tags */}
      <Helmet>
        <title>Graduation Photo Booth Hire Melbourne 🎓 | The Shan Booth</title>
        <meta
          name="description"
          content="Celebrate graduations, school formals, and uni balls with The Shan Booth. Classy backdrops, fun props, and instant prints. Serving Melbourne, Geelong & Grovedale."
        />
        <meta
          name="keywords"
          content="graduation photo booth hire Melbourne, school formal photobooth Melbourne, university ball photo booth, end of year school event photo booth, graduation party photo booth Geelong, Grovedale graduation photobooth"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/graduation" />

        <meta property="og:title" content="Graduation & School Formal Photo Booth 🎓 | The Shan Booth" />
        <meta
          property="og:description"
          content="Make your graduation unforgettable! Classy backdrops, caps & gowns props, instant prints and digital sharing across Melbourne & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/graduation" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/gradbooth.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Graduation Photo Booth Hire Melbourne 🎓 | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book your graduation photobooth today! Serving Melbourne, Geelong & Grovedale with stylish backdrops and instant prints."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/gradbooth.jpg" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Graduation Photo Booth Hire Melbourne",
            "description": "Professional photobooth hire for graduations, school formals and university balls across Melbourne & Geelong.",
            "image": "https://www.photoboothwithshan.com.au/gradbooth.jpg",
            "startDate": "2025-12-20T09:00:00+10:00",
            "endDate": "2026-01-20T23:00:00+11:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Melbourne & Geelong",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "VIC",
                "addressCountry": "AU"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            },
            "performer": {
            "@type": "Organization",
            "name": "The Shan Booth",
            "url": "https://www.photoboothwithshan.com.au"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.photoboothwithshan.com.au/booking",
              "priceCurrency": "AUD",
              "price": "390",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-07-01T00:00:00+10:00"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Landing Content */}
      <div className="graduation-landing">
        {/* Floating Graduation Strip */}
        <div className="floating-strip left-strip">
          <img src={gradStrip} alt="Graduation photobooth strip" />
        </div>
        
        <h1>Graduation & School Formal Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Celebrate your <strong>graduation</strong>, <strong>school formal</strong>, or <strong>uni ball</strong> with
          <strong> The Shan Booth</strong>. Classy backdrops, fun props, and instant prints your guests will love.
        </p>

        <div className="graduation-gallery">
          <img src={gradBackdrop} alt="Graduation photobooth backdrop" loading="lazy" />
        </div>

        <div className="graduation-section">
          <h2>🎓 Why Choose Our Photobooths for Graduation?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Classy Backdrops & Props</strong> – Caps, gowns, confetti, and elegant backdrop options.</li>
            <li>✨ <strong>Instant Prints & Digital Sharing</strong> – Keepsakes to take home and share online instantly.</li>
            <li>✨ <strong>Perfect for Schools & Universities</strong> – High schools, colleges, and university faculties.</li>
            <li>✨ <strong>Servicing Melbourne, Geelong & Grovedale</strong> – We bring the booth to your venue.</li>
          </ul>
        </div>

        <div className="graduation-section">
          <h2>🎉 Graduation Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Great for smaller ceremonies and quick post-ceremony celebrations.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Perfect for school formals and university events needing extra time and extra prints.</p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>Unlimited fun for the full night – ideal for large venues and graduation galas.</p>
            </div>
          </div>
          <p className="hint-text">💡 Custom branded templates for your school or university available on request.</p>
        </div>

        <div className="graduation-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>Surrounding areas</li>
          </ul>
        </div>

        <div className="graduation-section">
          <h2>✅ Book Early for the 2025 Graduation Season</h2>
          <p>
            Peak graduation dates fill fast. Secure your photobooth today to avoid missing out.
          </p>
          <h3 className="available-title">📅 Popular for:</h3>
          <ul className="available-list">
            <li>Graduation ceremonies</li>
            <li>School formals</li>
            <li>University balls</li>
            <li>Awards nights</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your Graduation Photobooth Today</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> graduation photo booth hire Melbourne • school formal photobooth Melbourne • university ball photo booth Geelong • graduation event photobooth packages
        </div>
        
        {/* Floating Graduation Strip */}
        <div className="floating-strip right-strip">
          <img src={gradStrip} alt="Graduation photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default GraduationLanding;