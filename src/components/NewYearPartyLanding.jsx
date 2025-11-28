import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

import newyearImg1 from "../images/newyear1.webp";
import newyearImg2 from "../images/newyear2.webp";

const NewYearPartyLanding = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>New Year Party Photo Booth Hire Melbourne 🎉 | The Shan Booth</title>
        <meta
          name="description"
          content="Kick off the New Year with style! Hire a photobooth for New Year’s Eve or New Year celebrations in Melbourne, Tarneit & Geelong. Unlimited prints, fun props, and instant sharing."
        />
        <meta
          name="keywords"
          content="New Year party photobooth Melbourne, NYE photobooth hire, New Year’s Eve party photo booth, event photo booth Melbourne, New Year celebration photobooth, New Year photo booth Geelong, Tarneit photobooth"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/new-year-party" />

        {/* OG */}
        <meta property="og:title" content="New Year Party Photo Booth Hire Melbourne 🎉 | The Shan Booth" />
        <meta
          property="og:description"
          content="Bring energy and fun to your New Year event! Unlimited prints, festive props & digital sharing for NYE & New Year celebrations."
        />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/newyear1.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/newyear2.webp" />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "New Year Party Photobooth Hire Melbourne",
            "startDate": "2025-12-31",
            "endDate": "2026-01-02",
            "location": {
              "@type": "Place",
              "name": "Melbourne & Geelong"
            },
            "image": "https://www.photoboothwithshan.com.au/newyear1.webp",
            "description": "Celebrate New Year's Eve and New Year parties with premium photobooth hire in Melbourne, Tarneit & Geelong."
          }
          `}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <div className="season-landing">
        <h1>New Year Party Photo Booth Hire in Melbourne & Geelong</h1>
        <p>
          Celebrate the start of a brand new year with a <strong>fun, modern and engaging photobooth</strong> setup!
          Whether you're hosting a <strong>New Year’s Eve countdown</strong>, an office <strong>New Year celebration</strong> or a 
          <strong>summer rooftop party</strong>, The Shan Booth brings high-energy fun and unforgettable memories.
        </p>

        <div className="season-gallery">
          <img src={newyearImg1} alt="New Year party photobooth in Melbourne" loading="lazy" />
          <img src={newyearImg2} alt="NYE celebration photobooth setup" loading="lazy" />
        </div>

        <div className="season-section">
          <h2>🎉 Why Choose Our Photobooth for Your New Year Celebration?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Festive backdrops & sparkly props</strong> perfect for NYE photos.</li>
            <li>✨ <strong>Instant prints</strong> for guests to keep as their first memory of the year.</li>
            <li>✨ <strong>Digital sharing</strong> for fast uploads to social media countdown posts.</li>
            <li>✨ <strong>Perfect for house parties, venues & rooftops</strong>.</li>
            <li>✨ <strong>We service Melbourne, Tarneit & Geelong</strong>.</li>
          </ul>
        </div>

        <div className="season-section">
          <h2>📦 New Year Party Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>NYE 2-Hour Package</h3>
              <p>Great for countdown parties & family gatherings.</p>
            </div>
            <div className="package-item">
              <h3>New Year Celebration 3–4 Hours</h3>
              <p>Perfect for clubs, events & hosted functions.</p>
            </div>
            <div className="package-item">
              <h3>Full Night NYE Package</h3>
              <p>Unlimited fun all night long!</p>
            </div>
          </div>
          <p className="hint-text">💡 Ask about our custom New Year print templates!</p>
        </div>

        <div className="season-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne CBD & suburbs</li>
            <li>Tarneit & western suburbs</li>
            <li>Geelong & surrounding areas</li>
          </ul>
        </div>

        <div className="season-section">
          <h2>🎊 Book Early – New Year Slots Fill Fast</h2>
          <p>NYE is one of the busiest nights of the year. Secure your booth early!</p>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">
            Book Your New Year Photobooth
          </a><br /><br />
          <a href="/" className="cta-btn">
            Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default NewYearPartyLanding;
