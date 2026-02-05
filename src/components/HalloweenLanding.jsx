import React from "react";
import Head from "next/head";
import halloweenBackdrop from "/images/halloween.webp"; 
import halloweenStrip from "/images/halloweenstrip.webp"; 
import ghostIcon from "/images/ghost.png"; 

const HalloweenLanding = () => {
  return (
    <>
      {/* SEO + Meta Tags */}
      <Head>
        <title>Halloween Photo Booth Hire Melbourne 🎃 | The Shan Booth</title>
        <meta
          name="description"
          content="Capture the spooky fun at your Halloween party with The Shan Booth. Spooky backdrops, fun props, and instant prints. Serving Melbourne, Geelong & Grovedale."
        />
        <meta
          name="keywords"
          content="halloween photo booth hire Melbourne, spooky party photobooth Melbourne, costume party photo booth, themed event photo booth Geelong, Grovedale halloween photobooth"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/halloween" />

        <meta property="og:title" content="Spooky Halloween Photo Booth 🎃 | The Shan Booth" />
        <meta
          property="og:description"
          content="Make your Halloween party unforgettable! Spooky backdrops, creepy props, instant prints and digital sharing across Melbourne & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/halloween" />
        <meta property="og:image" content="/images/halloween.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Halloween Photo Booth Hire Melbourne 🎃 | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book your spooky photobooth for Halloween! Serving Melbourne, Geelong & Grovedale with themed backdrops and instant prints."
        />
        <meta name="twitter:image" content="/images/halloween.webp" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Halloween Photo Booth Hire Melbourne",
            "startDate": "2025-10-01",
            "endDate": "2025-10-31",
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
              "url": "https://www.photoboothwithshan.com.au"
            },
            "image": "/images/halloween.webp",
            "description": "Photobooth hire for Halloween parties, costume events, and themed celebrations across Melbourne, Geelong & Grovedale."
          }
          `}
        </script>
      </Head>

      {/* Landing Content */}
      <div className="halloween-landing">
        {/* Floating Ghosts Animation */}
        <div className="floating-strip left-strip">
          <img src={halloweenStrip} alt="Halloween photobooth strip" />
        </div>
        <div className="floating-ghost ghost-1">
          <img src={ghostIcon} alt="Floating ghost" />
        </div>
        <div className="floating-ghost ghost-2">
          <img src={ghostIcon} alt="Floating ghost" />
        </div>
        
        <h1>Spooky Halloween Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Capture the frights and delights of your <strong>Halloween party</strong>, <strong>costume contest</strong>, or <strong>themed event</strong> with
          <strong> The Shan Booth</strong>. Spooky backdrops, creepy props, and instant prints your ghoulish guests will love.
        </p>

        <div className="halloween-gallery">
          <img src={halloweenBackdrop} alt="Halloween photobooth with spooky backdrop" loading="lazy" />
        </div>

        <div className="halloween-section">
          <h2>🎃 Why Our Booths Are a Scream for Halloween?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Spooky Backdrops & Props</strong> – Cobwebs, pumpkins, witch hats, and scary-good backdrop options.</li>
            <li>✨ <strong>Instant Spooky Prints</strong> – Haunted keepsakes to take home and share online instantly.</li>
            <li>✨ <strong>Perfect for Costume Parties</strong> – Ideal for private parties, corporate events, and clubs.</li>
            <li>✨ <strong>Servicing Melbourne, Geelong & Grovedale</strong> – We bring the haunted booth to your venue.</li>
          </ul>
        </div>

        <div className="halloween-section">
          <h2>👻 Halloween Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour "Quick Fright"</h3>
              <p>Great for smaller haunted house gatherings and pre-party photos.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour "Monster Mash"</h3>
              <p>Perfect for larger costume parties and events needing more time for monstrous memories.</p>
            </div>
            <div className="package-item">
              <h3>Full "Graveyard Smash"</h3>
              <p>Unlimited fun for the whole night – ideal for large venues and Halloween galas.</p>
            </div>
          </div>
          <p className="hint-text">💡 Custom spooky templates with your event name available on request!</p>
        </div>

        <div className="halloween-section">
          <h2>📍 Areas We Haunt</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>And all the creepy corners in between</li>
          </ul>
        </div>

        <div className="halloween-section">
          <h2>✅ Book Before It's Too Late... Mwahaha!</h2>
          <p>
            October dates vanish like ghosts in the night. Secure your photobooth today to avoid a real scare.
          </p>
          <h3 className="available-title">📅 Fang-tastic for:</h3>
          <ul className="available-list">
            <li>Halloween Parties</li>
            <li>Costume Contests</li>
            <li>Themed Corporate Events</li>
            <li>Spooky Celebrations</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your Spooky Photobooth Today</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> halloween photo booth hire Melbourne • spooky party photobooth Melbourne • costume party photo booth Geelong • themed event photobooth packages
        </div>
        
        {/* More Floating Ghosts */}
        <div className="floating-ghost ghost-3">
          <img src={ghostIcon} alt="Floating ghost" />
        </div>
        <div className="floating-strip right-strip">
          <img src={halloweenStrip} alt="Halloween photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default HalloweenLanding;