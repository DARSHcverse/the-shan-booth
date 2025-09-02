import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import boothImg from "../images/boothimg4.webp";
import boothImg2 from "../images/boothimg5.webp";
import birthdayStrip from "../images/birthdaystrip.png";

const PhotoboothLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>Photobooth Hire Melbourne 📸 | Weddings, Birthdays & Corporate Events | The Shan Booth</title>
        <meta
          name="description"
          content="Premium photobooth hire in Melbourne, Tarneit & Geelong. Perfect for weddings, birthdays, corporate functions & parties. Unlimited prints, props & instant sharing."
        />
        <meta
          name="keywords"
          content="photobooth hire Melbourne, wedding photobooth hire Melbourne, birthday party photobooth Melbourne, corporate event photobooth Melbourne, Geelong photobooth hire, Tarneit photo booth hire"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photobooth-hire-melbourne" />

        {/* Open Graph */}
        <meta property="og:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          property="og:description"
          content="Make your event unforgettable with The Shan Booth. Weddings, birthdays & corporate photobooth hire across Melbourne, Tarneit & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photobooth-hire-melbourne" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/boothimg5.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          name="twitter:description"
          content="Book your Melbourne photobooth today! Unlimited prints, props & instant digital sharing."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/boothimg4.webp" />

        {/* ✅ LocalBusiness Schema JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "image": "https://www.photoboothwithshan.com.au/boothimg5.webp",
            "url": "https://www.photoboothwithshan.com.au",
            "telephone": "+61 475 116 521",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "priceRange": "$$",
            "description": "Premium photobooth hire services for weddings, birthdays, corporate events, and parties across Melbourne, Tarneit & Geelong."
          }
          `}
        </script>

        {/* ✅ FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a photobooth cost to hire in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Melbourne photobooth hire packages start with a 2-hour option and go up to full event coverage. Prices vary depending on duration, add-ons, and custom branding."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide wedding photobooths in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We specialize in wedding photobooth hire across Melbourne, with elegant backdrops, wedding-themed props, and unlimited prints for guests."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Melbourne CBD & suburbs, Geelong, Grovedale, Tarneit, and surrounding western suburbs."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="photobooth-landing">
        {/* Floating Birthday Strip */}
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>

        <h1>Photobooth Hire Melbourne | Weddings, Birthdays & Events</h1>
        <p>
          Looking for the <strong>best photobooth hire in Melbourne</strong>? The Shan Booth offers premium booths with
          <strong> unlimited prints, fun props, and instant digital sharing</strong>. Perfect for weddings, birthdays,
          school functions, and corporate events across Melbourne, Tarneit & Geelong.
        </p>

        <div className="photobooth-gallery">
          <img src={boothImg} alt="Photobooth hire setup in Melbourne event" loading="lazy" />
          <img src={boothImg2} alt="Guests enjoying photobooth props and prints in Melbourne" loading="lazy" />
        </div>

        <div className="photobooth-section">
          <h2>✨ Why Choose The Shan Booth for Your Melbourne Photobooth?</h2>
          <ul className="feature-list">
            <li>📸 <strong>Unlimited Prints & Digital Sharing</strong> – Take home instant memories & share online.</li>
            <li>🎉 <strong>Props & Backdrops</strong> – From elegant wedding styles to party vibes.</li>
            <li>💍 <strong>Perfect for Any Occasion</strong> – Weddings, birthdays, school events & corporate parties.</li>
            <li>🚗 <strong>We Come to You</strong> – Servicing Melbourne, Geelong & Tarneit.</li>
          </ul>
        </div>

        {/* ✅ Extra keyword-rich sections */}
        <div className="photobooth-section">
          <h2>💍 Wedding Photobooth Hire Melbourne</h2>
          <p>
            Make your special day unforgettable with our <strong>wedding photobooth hire Melbourne</strong> packages. 
            We provide elegant backdrops, custom templates, and fun props so your guests can take home lasting memories.
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🎂 Birthday Party Photobooth Hire Melbourne</h2>
          <p>
            Celebrate in style with our <strong>birthday photobooth hire Melbourne</strong> service. Whether it’s an 
            18th, 21st, or milestone birthday, our photobooths bring instant fun with unlimited prints and digital sharing.
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🏢 Corporate Photobooth Hire Melbourne</h2>
          <p>
            Hosting a work function, end-of-year party, or brand launch? Our <strong>corporate photobooth hire Melbourne</strong> 
            packages include branded templates, professional setups, and seamless guest experiences.
          </p>
        </div>

        <div className="photobooth-section">
          <h2>📦 Our Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for small parties or casual gatherings.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Our most popular package – ideal for weddings, birthdays, and office events.</p>
            </div>
            <div className="package-item">
              <h3>All Night Package</h3>
              <p>Unlimited fun & memories for your biggest events and galas.</p>
            </div>
          </div>
        </div>

        <div className="photobooth-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong & Grovedale</li>
            <li>Tarneit & Western Suburbs</li>
          </ul>
        </div>

        {/* ✅ FAQ Section for SEO */}
        <div className="photobooth-section faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <h3>How much does a photobooth cost in Melbourne?</h3>
          <p>Packages start from short 2-hour hires and go up to full-event coverage. Get in touch for a custom quote.</p>
          <h3>Do you offer wedding photobooth hire?</h3>
          <p>Yes! Our wedding packages include stylish templates, elegant props, and unlimited prints for guests.</p>
          <h3>Do you cover suburbs outside Melbourne?</h3>
          <p>We service Geelong, Tarneit, Grovedale, and surrounding areas in addition to Melbourne CBD & suburbs.</p>
        </div>

        {/* ✅ Local SEO Block */}
        <div className="photobooth-section local-info">
          <h2>📌 Contact & Location</h2>
          <p>
            <strong>The Shan Booth</strong> – Photobooth Hire Melbourne  
            <br />
            📞 +61 475 116 521
            <br />
            📍 Melbourne, VIC, Australia  
          </p>
          <iframe
            title="The Shan Booth Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315178.86514602136!2d144.7722436277079!3d-37.97169239217345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f2b77d63a4f0!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1694123456789"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">📩 Get a Quick Quote</a>
          <a href="/booking" className="cta-btn">📅 Book Now</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> photobooth hire Melbourne • wedding photo booth Melbourne • corporate event
          photo booth hire • birthday photobooth Melbourne • Geelong photobooth • Tarneit photo booth
        </div>

        {/* Floating Birthday Strip */}
        <div className="floating-strip right-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default PhotoboothLanding;
