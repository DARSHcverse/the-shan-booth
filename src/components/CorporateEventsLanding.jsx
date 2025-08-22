import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import corporateImg1 from "../images/coperateimg.webp";
import corporateImg2 from "../images/photobooth.webp";
import corporateStrip from "../images/coporatestrip.png";

const CorporateEventsLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>Corporate Event Photobooth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Professional corporate photobooth hire in Melbourne & Geelong. Perfect for office parties, warehouse events, product launches & company galas. Unlimited prints, branding & digital sharing."
        />
        <meta
          name="keywords"
          content="corporate event photobooth hire Melbourne, office party photobooth, warehouse event photo booth, product launch photobooth Melbourne, corporate gala photo booth hire, branded photo booth Melbourne, company party photobooth Geelong"
        />
        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/corporate-events"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Corporate Event Photobooth Hire Melbourne | The Shan Booth"
        />
        <meta
          property="og:description"
          content="Hire premium photobooths for office parties, product launches, and company events in Melbourne, Tarneit & Geelong. Unlimited prints & branded experiences."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.photoboothwithshan.com.au/corporate-events"
        />
        <meta
          property="og:image"
          content="https://www.photoboothwithshan.com.au/coperateimg.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Corporate Event Photobooth Hire Melbourne | The Shan Booth"
        />
        <meta
          name="twitter:description"
          content="Professional photobooth hire for office & corporate events in Melbourne & Geelong. Fun, modern & branded experiences for staff & clients."
        />
        <meta
          name="twitter:image"
          content="https://www.photoboothwithshan.com.au/photobooth.webp"
        />

        {/* Schema.org JSON-LD for corporate services */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Corporate Event Photobooth Hire",
            "provider": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Melbourne, Tarneit & Geelong"
            },
            "description": "Premium photobooth hire for corporate events, office parties, and product launches across Melbourne & Geelong. Includes unlimited prints, branding & instant sharing.",
            "image": "https://www.photoboothwithshan.com.au/coperateimg.webp"
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="corporate-landing">
        {/* Floating Corporate Strip */}
        <div className="floating-strip left-strip">
          <img src={corporateStrip} alt="Corporate photobooth strip" />
        </div>
        
        <h1>Corporate Event Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Whether it’s an <strong>office party</strong>, <strong>product launch</strong>, or a{" "}
          <strong>large corporate gala</strong>, The Shan Booth delivers premium
          photobooths that add excitement, create memories, and boost engagement.
          Perfect for staff, clients, and guests alike.
        </p>

        <div className="corporate-gallery">
          <img src={corporateImg1} alt="Corporate event photobooth setup in Melbourne" loading="lazy" />
          <img src={corporateImg2} alt="Office party photobooth setup in Geelong" loading="lazy" />
        </div>

        <div className="corporate-section">
          <h2>📸 Why Businesses Choose Us</h2>
          <ul className="feature-list">
            <li>✨ <strong>Branded Experiences</strong> – Add your company logo & colours to prints and screens.</li>
            <li>✨ <strong>Instant Sharing</strong> – Guests can share directly to social media.</li>
            <li>✨ <strong>Team Building Fun</strong> – Great for morale and making events memorable.</li>
            <li>✨ <strong>Scalable Packages</strong> – Perfect for small offices or large warehouse parties.</li>
          </ul>
        </div>

        <div className="corporate-section">
          <h2>🎉 Corporate Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Office Package</h3>
              <p>Ideal for small teams and quick celebrations.</p>
            </div>
            <div className="package-item">
              <h3>Half-Day Package</h3>
              <p>Perfect for warehouse events, launches & medium-size functions.</p>
            </div>
            <div className="package-item">
              <h3>Full Corporate Event Package</h3>
              <p>Unlimited prints & branding for company galas & major activations.</p>
            </div>
          </div>
        </div>

        <div className="corporate-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Tarneit</li>
            <li>Geelong & Grovedale</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">Get a Quick Quote</a>
          <a href="/booking" className="cta-btn">Book Your Corporate Photobooth</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> corporate photobooth hire Melbourne • office party photobooth • warehouse event photo booth hire • branded photo booth Melbourne • product launch photobooth
        </div>
        
        {/* Floating Corporate Strip */}
        <div className="floating-strip right-strip">
          <img src={corporateStrip} alt="Corporate photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default CorporateEventsLanding;
