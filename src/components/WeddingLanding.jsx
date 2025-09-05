import React from "react";
import { Helmet } from "react-helmet";
import "../App.css"; // make sure this imports your CSS
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
          content="Make your wedding unforgettable with The Shan Booth! Elegant wedding photo booths with unlimited prints, props & instant sharing. Serving Melbourne, Tarneit & Geelong."
        />
        <meta
          name="keywords"
          content="wedding photo booth hire Melbourne, elegant wedding photobooth, Geelong wedding photo booth rental, wedding reception photo booth, bridal shower photo booth Melbourne, fun wedding photo booth hire, wedding party photo booth Geelong, romantic wedding photo booth packages"
        />
        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/weddings"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Wedding Photo Booth Hire Melbourne 💍 | The Shan Booth"
        />
        <meta
          property="og:description"
          content="Create lasting memories on your big day! Elegant wedding photo booths with unlimited prints, fun props & instant sharing across Melbourne & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.photoboothwithshan.com.au/weddings"
        />
        <meta
          property="og:image"
          content="https://www.photoboothwithshan.com.au/wedding.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wedding Photo Booth Hire Melbourne 💍 | The Shan Booth"
        />
        <meta
          name="twitter:description"
          content="Book your wedding photo booth today! Elegant backdrops, fun props & unlimited prints – serving Melbourne, Tarneit & Geelong."
        />
        <meta
          name="twitter:image"
          content="https://www.photoboothwithshan.com.au/wedding2.webp"
        />

        {/* ✅ Schema.org JSON-LD (Fixed Event Schema) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Wedding Photo Booth Hire Melbourne",
            "description": "Book a stylish photo booth for your wedding receptions, bridal showers & engagement parties across Melbourne, Tarneit & Geelong.",
            "image": "https://www.photoboothwithshan.com.au/wedding.webp",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "startDate": "2025-09-06T18:00:00+10:00",
            "endDate": "2025-12-30T00:00:00+10:00",
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
            "offers": {
              "@type": "Offer",
              "url": "https://www.photoboothwithshan.com.au/packages",
              "price": "500",
              "priceCurrency": "AUD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-08-19T00:00:00+10:00"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="wedding-landing">
        {/* Floating Wedding Strip */}
        <div className="floating-strip left-strip">
          <img src={WeddingStrip} alt="Wedding photobooth strip" />
        </div>

        <h1>Wedding Photobooth Hire in Melbourne & Geelong</h1>
        <p>
          Your wedding day deserves to be unforgettable.{" "}
          <strong>The Shan Booth</strong> brings elegant
          <strong> wedding photo booths</strong> that let guests capture
          memories, share instantly, and take home keepsakes they’ll treasure
          forever.
        </p>

        {/* Gallery */}
        <div className="wedding-gallery">
          <img
            src={weddingImg}
            alt="Couple enjoying the wedding booth"
            loading="lazy"
          />
          <img
            src={weddingImg2}
            alt="Guests posing with wedding props"
            loading="lazy"
          />
        </div>

        {/* Why Choose Us */}
        <div className="wedding-section">
          <h2>💍 Why Choose Our Wedding Photo Booths?</h2>
          <ul className="feature-list">
            <li>
              ✨ <strong>Elegant Backdrops & Props</strong> – Floral walls,
              wedding signs & classy props.
            </li>
            <li>
              ✨ <strong>Unlimited Prints & Digital Sharing</strong> – Guests
              keep a memory, couples get a copy of every photo.
            </li>
            <li>
              ✨ <strong>Perfect for Any Wedding Event</strong> – Receptions,
              engagement parties & bridal showers.
            </li>
            <li>
              ✨ <strong>Servicing Melbourne, Geelong & Tarneit</strong> – We
              deliver and set up at your venue.
            </li>
          </ul>
        </div>

        {/* Packages */}
        <div className="wedding-section">
          <h2>📸 Wedding Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for intimate weddings or small receptions.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>
                Ideal for most weddings – plenty of time for all guests to join
                the fun.
              </p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>From start to finish – unlimited photos, unlimited fun.</p>
            </div>
          </div>
          <p className="hint-text">
            💡 Customise your booth with personalised templates & guestbooks!
          </p>
        </div>

        {/* Areas */}
        <div className="wedding-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>Tarneit & surrounding areas</li>
          </ul>
        </div>

        {/* Closing CTA */}
        <div className="wedding-section">
          <h2>🎉 Make Your Wedding Unforgettable</h2>
          <p>
            Guests love capturing moments, and you’ll love looking back at the
            memories. Book now to make your wedding extra special.
          </p>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">
            Book Your Wedding Photobooth Today
          </a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> wedding photo booth hire Melbourne • elegant wedding photobooth Tarneit • Geelong wedding photo booth • bridal shower photo booth Melbourne • engagement party photo booth hire
        </div>

        {/* Floating Wedding Strip */}
        <div className="floating-strip right-strip">
          <img src={WeddingStrip} alt="Wedding photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default WeddingLanding;
