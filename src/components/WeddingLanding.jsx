import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import weddingImg from "../images/wedding.webp";
import weddingImg2 from "../images/wedding2.webp";
import WeddingStrip from "../images/weddingstrip.webp";

const WeddingLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>Wedding Photo Booth Hire Melbourne 💍 | The Shan Booth</title>

        <meta
          name="description"
          content="Looking for wedding photo booth hire in Melbourne? The Shan Booth offers elegant photobooths with unlimited prints, classy props & instant sharing. Servicing Melbourne, Geelong & Tarneit."
        />

        <meta
          name="keywords"
          content="wedding photo booth hire Melbourne, wedding photobooth Melbourne, wedding reception photo booth hire, Geelong wedding photo booth, Tarneit wedding photobooth, bridal shower photo booth Melbourne, engagement party photo booth hire"
        />

        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/weddings"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Wedding Photo Booth Hire Melbourne 💍 | The Shan Booth" />
        <meta
          property="og:description"
          content="Wedding photo booth hire across Melbourne & Geelong. Unlimited prints, premium props & instant sharing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/weddings" />
        <meta
          property="og:image"
          content="https://www.photoboothwithshan.com.au/wedding.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Photo Booth Hire Melbourne 💍" />
        <meta
          name="twitter:description"
          content="Book an elegant wedding photo booth with unlimited prints & instant sharing. Servicing Melbourne, Geelong & Tarneit."
        />
        <meta
          name="twitter:image"
          content="https://www.photoboothwithshan.com.au/wedding2.webp"
        />

        {/* ✅ CORRECT Schema for Wedding Page (Service + LocalBusiness) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wedding Photo Booth Hire Melbourne",
            "description": "Wedding photo booth hire across Melbourne, Geelong and Tarneit with unlimited prints, premium props and instant digital sharing.",
            "serviceType": "Wedding Photo Booth Hire",
            "provider": {
              "@type": "LocalBusiness",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "VIC",
                "addressCountry": "AU"
              }
            },
            "areaServed": [
              "Melbourne",
              "Geelong",
              "Tarneit"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="wedding-landing">
        {/* Floating Wedding Strips */}
        <div className="floating-strip left-strip">
          <img src={WeddingStrip} alt="Wedding photobooth strip Melbourne" />
        </div>

        <h1>Wedding Photo Booth Hire Melbourne – Elegant & Fun Wedding Photobooths</h1>

        <p>
          Your wedding day deserves unforgettable memories.{" "}
          <strong>The Shan Booth</strong> provides elegant{" "}
          <strong>wedding photo booth hire in Melbourne</strong>, giving your
          guests instant prints, digital sharing, and keepsakes you’ll cherish
          forever.
        </p>

        {/* Gallery */}
        <div className="wedding-gallery">
          <img
            src={weddingImg}
            alt="Wedding photobooth hire Melbourne reception"
            loading="lazy"
          />
          <img
            src={weddingImg2}
            alt="Guests enjoying elegant wedding photobooth"
            loading="lazy"
          />
        </div>

        {/* Why Choose Us */}
        <div className="wedding-section">
          <h2>💍 Why Choose Our Wedding Photo Booth?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Elegant Backdrops & Classy Props</strong> – Designed to match your wedding theme.</li>
            <li>✨ <strong>Unlimited Prints & Digital Copies</strong> – Guests take one home, couples get them all.</li>
            <li>✨ <strong>Perfect for Weddings & Bridal Events</strong> – Receptions, engagements & bridal showers.</li>
            <li>✨ <strong>Servicing Melbourne, Geelong & Tarneit</strong> – Full delivery, setup & pack-down included.</li>
          </ul>
        </div>

        {/* Packages */}
        <div className="wedding-section">
          <h2>📸 Wedding Photo Booth Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Wedding Package</h3>
              <p>Ideal for intimate weddings and smaller receptions.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Our most popular option for Melbourne weddings.</p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>From start to finish – unlimited photos and fun all night.</p>
            </div>
          </div>
          <p className="hint-text">
            💡 Custom photo templates, guestbooks & personalised prints available.
          </p>
        </div>

        {/* Areas */}
        <div className="wedding-section">
          <h2>📍 Areas We Service</h2>
          <ul className="areas-list">
            <li>Melbourne & surrounding suburbs</li>
            <li>Geelong</li>
            <li>Tarneit & Western suburbs</li>
          </ul>
        </div>

        {/* FAQ Section (SEO BOOST) */}
        <div className="wedding-section">
          <h2>❓ Wedding Photo Booth Hire FAQs</h2>

          <h3>How long should I book a wedding photo booth for?</h3>
          <p>
            Most Melbourne weddings book a 3–4 hour package to capture peak guest
            activity after dinner and speeches.
          </p>

          <h3>Do wedding photo booths suit formal weddings?</h3>
          <p>
            Absolutely. Our elegant backdrops and classy props are designed to
            blend seamlessly with formal wedding receptions.
          </p>

          <h3>Do we receive digital copies of the photos?</h3>
          <p>
            Yes! You receive all photos digitally after the event, plus guests
            get instant prints on the night.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-center">
          <a href="/booking" className="cta-btn">
            Book Your Wedding Photo Booth Today
          </a>
        </div>

        {/* SEO Keywords */}
        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> wedding photo booth hire Melbourne •
          elegant wedding photo booth Geelong • Tarneit wedding photobooth •
          bridal shower photo booth Melbourne • engagement party photo booth hire
        </div>

        <div className="floating-strip right-strip">
          <img src={WeddingStrip} alt="Wedding photobooth strip hire Melbourne" />
        </div>
      </div>
    </>
  );
};

export default WeddingLanding;
