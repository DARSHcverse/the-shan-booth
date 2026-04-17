import React from "react";
import Head from "next/head";
import { QUICK_QUOTE_URL } from "../lib/siteLinks";
const corporateImg1 = '/images/coperateimg.webp';
const corporateImg2 = '/images/photobooth.webp';
const corporateStrip = '/images/coporatestrip.png';

const CorporateEventsLanding = () => {
  return (
    <>
      <Head>
        <title>Corporate Photo Booth Hire Melbourne | Brand Activations & Events | The Shan Booth</title>
        <meta
          name="description"
          content="Elevate your corporate events with The Shan Booth. Branded photo booths for business functions, product activations, conferences & award nights in Melbourne & Geelong."
          key="description"
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
          <h2>✅ Corporate-Ready Experience From Start to Finish</h2>
          <p>
            We understand corporate timelines, venue constraints, and brand expectations. Our team
            coordinates with your event manager to align bump-in times, power requirements, and on-site
            traffic flow so the booth feels seamless within your run sheet.
          </p>
          <p>
            Every booth is staffed by a professional attendant who manages guest queues, encourages
            participation, and keeps the experience polished. Your guests get a fun interaction, while
            your brand gets consistent visuals that look great both on prints and online.
          </p>
        </div>

        <div className="corporate-section">
          <h2>💼 Event Types We Cover</h2>
          <ul className="areas-list">
            <li>Corporate parties & award nights</li>
            <li>Brand activations & trade shows</li>
            <li>Networking events</li>
            <li>Staff celebrations & end-of-year functions</li>
          </ul>
          <p>
            Whether your goal is team bonding or audience engagement, we tailor the booth flow to match
            your objectives. We can place the booth near entry points for maximum visibility or close to
            the bar and lounge areas to capture the most social moments.
          </p>
        </div>

        <div className="corporate-section">
          <h2>📈 Brand Activation Ideas That Work</h2>
          <ul className="feature-list">
            <li>Step-and-repeat backdrops for a red-carpet style experience</li>
            <li>Hashtag and logo overlays for instant brand recall</li>
            <li>Email capture to follow up after the event</li>
            <li>Gifts or prizes for the best team photo</li>
            <li>On-brand props that match your campaign theme</li>
          </ul>
          <p>
            These small touches turn a fun photo booth into a measurable marketing moment. We can help
            you choose the right combination based on your audience, venue, and campaign objectives.
          </p>
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
          <h2>🧭 Planning Checklist for Corporate Booths</h2>
          <ul className="feature-list">
            <li>Confirm your booth location and access for bump-in/bump-out</li>
            <li>Share brand guidelines so we can match colours and fonts</li>
            <li>Decide on print size and whether you want a digital-only option</li>
            <li>Choose a backdrop that complements your stage or media wall</li>
            <li>Plan how you want to use the photos after the event</li>
          </ul>
          <p>
            Need help? We’ll guide you through each step and recommend the best setup for your venue
            and audience.
          </p>
        </div>

        <div className="corporate-section">
          <h2>📊 Post-Event Deliverables</h2>
          <p>
            After the event, you’ll receive a curated gallery of high-resolution images for internal
            communications, social posts, and brand wrap-ups. If you choose digital sharing or email
            capture, we can also provide a report so you can track engagement and measure outcomes.
          </p>
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
          <a href={QUICK_QUOTE_URL} className="cta-btn">Get a Business Quote</a>
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
