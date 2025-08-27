import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import birthdayBackdrop from "../images/joyful-young-man-wearing-party-hat-gestures-call-me-sign-standing-with-smiling-young-girl-wearing-party-hat-holding-birthday-cake-gesturing-call-me-sign-isolated-pink-wall.jpg";
import birthdayBackdrop2 from "../images/smiling-young-man-wearing-party-hat-surprised-young-girl-holds-hands-together-isolated-pink-wall.jpg";
import birthdayStrip from "../images/birthdaystrip.png";

const BirthdayLanding = () => {
  return (
    <>
      {/* SEO + Meta Tags */}
      <Helmet>
        <title>Birthday Photo Booth Hire Melbourne 🎉 | The Shan Booth</title>
        <meta
          name="description"
          content="Make your birthday unforgettable with The Shan Booth! Fun props, stylish backdrops & unlimited prints. Perfect for 18ths, 21sts, kids’ parties & milestone birthdays in Melbourne & Geelong."
        />
        <meta
          name="keywords"
          content="birthday photo booth hire Melbourne, 18th birthday photobooth, 21st birthday photo booth, kids party photobooth hire, milestone birthday booth Geelong, birthday event photo booth Grovedale"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/birthday" />

        <meta property="og:title" content="Birthday Party Photo Booth 🎉 | The Shan Booth" />
        <meta
          property="og:description"
          content="Celebrate your birthday in style! Unlimited prints, fun props, and instant sharing. Available across Melbourne, Geelong & Grovedale."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/birthday" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/birthdaybooth.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Birthday Photo Booth Hire Melbourne 🎉 | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book a birthday photobooth today! Fun props, unlimited prints & stylish backdrops across Melbourne & Geelong."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/birthdaybooth.jpg" />

        {/* ✅ Schema for Birthday Events */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Birthday Photo Booth Hire Melbourne",
            "startDate": "2025-01-01",
            "endDate": "2025-12-31",
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
            "image": "https://www.photoboothwithshan.com.au/birthdaybooth.jpg",
            "description": "Photo booth hire for birthday parties across Melbourne, Geelong & Grovedale. Unlimited prints, fun props & stylish backdrops."
          }
          `}
        </script>
      </Helmet>

      {/* Landing Content */}
      <div className="birthday-landing">
        {/* Floating Birthday Strip */}
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
        
        <h1>Birthday Party Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Celebrate your <strong>birthday</strong> with <strong>The Shan Booth</strong>! Whether it’s an
          <strong> 18th</strong>, <strong>21st</strong>, <strong>kids’ party</strong>, or a
          <strong> milestone birthday</strong>, we bring the fun with stylish backdrops, awesome props, and unlimited prints.
        </p>

        <div className="birthday-gallery">
          <img src={birthdayBackdrop} alt="Birthday photobooth backdrop" loading="lazy" />
          <img src={birthdayBackdrop2} alt="Birthday photobooths backdrops" loading="lazy" />
        </div>

        <div className="birthday-section">
          <h2>🎂 Why Choose Our Birthday Photobooths?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Fun Props & Party Vibes</strong> – Balloons, hats, glasses & themed props.</li>
            <li>✨ <strong>Unlimited Prints & Digital Sharing</strong> – Guests take home memories instantly.</li>
            <li>✨ <strong>Perfect for Any Age</strong> – Kids’ parties, 18ths, 21sts & milestone birthdays.</li>
            <li>✨ <strong>We Come to You</strong> – Servicing Melbourne, Geelong & Grovedale venues.</li>
          </ul>
        </div>

        <div className="birthday-section">
          <h2>🎁 Birthday Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Great for kids’ parties and small gatherings.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Perfect for 18ths, 21sts & milestone celebrations.</p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>Unlimited fun for the full night – ideal for big birthday parties & venues.</p>
            </div>
          </div>
          <p className="hint-text">💡 Custom themed templates available to match your birthday party style.</p>
        </div>

        <div className="birthday-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>Grovedale</li>
            <li>Nearby areas</li>
          </ul>
        </div>

        <div className="birthday-section">
          <h2>🎉 Book Early for Your Birthday Party</h2>
          <p>
            Our photobooths are in high demand on weekends – secure yours now to avoid missing out.
          </p>
          <h3 className="available-title">📅 Popular for:</h3>
          <ul className="available-list">
            <li>18th birthdays</li>
            <li>21st birthdays</li>
            <li>Kids’ parties</li>
            <li>30th, 40th & 50th milestones</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your Birthday Photobooth Today</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> birthday photo booth hire Melbourne • 18th birthday photobooth • 21st birthday photo booth Geelong • kids’ party photobooth Grovedale
        </div>
        
        {/* Floating Birthday Strip */}
        <div className="floating-strip right-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default BirthdayLanding;
