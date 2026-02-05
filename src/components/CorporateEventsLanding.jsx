import React from "react";
import Head from "next/head";
import corporateImg1 from "/images/coperateimg.webp";
import corporateImg2 from "/images/photobooth.webp";
import corporateStrip from "/images/coporatestrip.png";

const CorporateEventsLanding = () => {
  return (
    <>
      <Head>
        <title>Corporate Photo Booth Hire Melbourne | Brand Activations & Events | The Shan Booth</title>
        <meta
          name="description"
          content="Elevate your corporate events with The Shan Booth. Branded photo booths for business functions, product activations, conferences & award nights in Melbourne & Geelong."
        />
        <meta
          name="keywords"
          content="corporate photo booth hire Melbourne, business event photo booth, product launch photobooth, staff party photo booth, brand activation booth Melbourne, corporate gala photo booth hire, company event photo booth Geelong"
        />
        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/corporate-events"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Corporate Photo Booth Hire Melbourne | The Shan Booth"
        />
        <meta
          property="og:description"
          content="Premium branded photobooths for conferences, launches & business events. Boost brand visibility and engagement with The Shan Booth Melbourne."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.photoboothwithshan.com.au/corporate-events"
        />
        <meta
          property="og:image"
          content="/images/coperateimg.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Corporate Photo Booth Hire Melbourne | The Shan Booth"
        />
        <meta
          name="twitter:description"
          content="Corporate photo booth hire for business launches, office celebrations & brand activations in Melbourne and Geelong."
        />
        <meta
          name="twitter:image"
          content="/images/photobooth.webp"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Corporate Photo Booth Hire",
            "provider": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            },
            "areaServed": [
              {
                "@type": "Place",
                "name": "Melbourne"
              },
              {
                "@type": "Place",
                "name": "Geelong"
              }
            ],
            "description": "Corporate photo booth hire for product launches, trade shows, and office celebrations in Melbourne & Geelong. Includes branding, instant prints, and digital sharing.",
            "image": "/images/coperateimg.webp"
          }
          `}
        </script>
      </Head>

      <div className="corporate-landing">
        {/* Floating Corporate Strip */}
        <div className="floating-strip left-strip">
          <img src={corporateStrip} alt="Corporate event photostrip" />
        </div>

        <h1>Corporate Photo Booth Hire for Melbourne Businesses</h1>
        <p>
          Create a professional yet fun atmosphere at your next{" "}
          <strong>corporate gathering</strong>, <strong>product launch</strong>,
          or <strong>brand activation</strong> with <strong>The Shan Booth</strong>.
          Our modern photo booths make every event engaging while showcasing your company’s brand and culture.
        </p>

        <div className="corporate-gallery">
          <img src={corporateImg1} alt="Corporate photobooth at business event" loading="lazy" />
          <img src={corporateImg2} alt="Staff enjoying photobooth at Melbourne event" loading="lazy" />
        </div>

        <div className="corporate-section">
          <h2>🚀 Make Your Brand Stand Out</h2>
          <ul className="feature-list">
            <li>✨ <strong>Branded Templates</strong> – Add your logo, theme, and brand colours to every print and screen.</li>
            <li>✨ <strong>Professional Setup</strong> – Clean, modern booth design to suit business aesthetics.</li>
            <li>✨ <strong>Data Capture Options</strong> – Collect emails and insights from attendees.</li>
            <li>✨ <strong>Social Sharing</strong> – Amplify reach instantly on social media platforms.</li>
          </ul>
        </div>

        <div className="corporate-section">
          <h2>💼 Event Types We Cover</h2>
          <ul className="areas-list">
            <li>Corporate parties & award nights</li>
            <li>Brand activations & trade shows</li>
            <li>Networking events</li>
            <li>Staff celebrations & end-of-year functions</li>
          </ul>
        </div>

        <div className="corporate-section">
          <h2>🎁 Tailored Corporate Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>Business Socials Package</h3>
              <p>2-hour setup ideal for small team or client celebrations.</p>
            </div>
            <div className="package-item">
              <h3>Launch & Activation Package</h3>
              <p>Half-day hire with full branding, overlays & digital delivery.</p>
            </div>
            <div className="package-item">
              <h3>Conference & Gala Package</h3>
              <p>Full-day setup with unlimited prints, analytics & brand integration.</p>
            </div>
          </div>
        </div>

        <div className="corporate-section">
          <h2>📍 Service Locations</h2>
          <ul className="areas-list">
            <li>Melbourne CBD & inner suburbs</li>
            <li>Tarneit</li>
            <li>Geelong & Bellarine Peninsula</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">Get a Business Quote</a>
          <a href="/booking" className="cta-btn">Book a Corporate Booth</a>
        </div>

        <div className="seo-keywords" aria-hidden="true">
          corporate event photo booth Melbourne • brand activation photobooth • product launch booth • business photo booth hire Geelong
        </div>

        {/* Floating Corporate Strip */}
        <div className="floating-strip right-strip">
          <img src={corporateStrip} alt="Corporate photobooth design" />
        </div>
      </div>
    </>
  );
};

export default CorporateEventsLanding;
