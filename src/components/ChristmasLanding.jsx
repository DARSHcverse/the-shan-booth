import React from "react";
import Head from "next/head";
import christmasImg from "../images/christmas.webp";
import christmasImg2 from "../images/christmas2.webp";

const ChristmasLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Head>
        <title>Christmas Photobooth Hire Melbourne 🎄 | The Shan Booth</title>
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
          href="https://www.photoboothwithshan.com.au/christmas"
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
          content="https://www.photoboothwithshan.com.au/christmas"
        />
        <meta
          property="og:image"
          content="https://www.photoboothwithshan.com.au/images/christmas.webp"
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
          content="https://www.photoboothwithshan.com.au/images/christmas2.webp"
        />

        {/* Schema.org JSON-LD for seasonal landing page */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Christmas Photo Booth Hire Melbourne",
            "description": "Festive photobooth hire for Christmas parties, corporate end-of-year events and holiday celebrations across Melbourne & Geelong.",
            "image": "https://www.photoboothwithshan.com.au/images/christmas.webp",
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
              "validFrom": "2025-09-01T00:00:00+10:00"
            }
          }
          `}
        </script>
      </Head>

      {/* ✅ Landing Page Content */}
      <div className="christmas-landing">
        <h1>Christmas Party Photo Booths for End-of-Year Events in Melbourne</h1>
        <p>
          Planning a Christmas or end-of-year party in Melbourne or Geelong? 
          Our festive photo booth experiences are designed exclusively for the holiday season, 
          featuring Christmas-themed props, seasonal backdrops, and party-ready booth setups 
          that bring teams, families, and guests together.
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
          <h2>🎅 Book Early for Christmas 2026</h2>
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
