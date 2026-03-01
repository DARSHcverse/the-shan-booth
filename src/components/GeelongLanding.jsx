import Head from "next/head";

const boothImg1 = "/images/hero-banner.webp";
const boothImg2 = "/images/hero-banner-2.webp";
const floatingStrip = "/images/birthdaystrip.png";

const GeelongLanding = () => {
  return (
    <>
      <Head>
        <title>
          Photo Booth Hire Geelong 📸 | Weddings, Birthdays & Corporate Events | The
          Shan Booth
        </title>

        <meta
          name="description"
          content="Need photo booth hire in Geelong? The Shan Booth brings premium booths to weddings, birthdays and corporate events across Geelong, the Bellarine Peninsula and Surf Coast. Unlimited prints, props, custom templates and instant digital sharing."
          key="description"
        />

        <meta
          name="keywords"
          content="photo booth hire Geelong, photobooth hire Geelong, wedding photobooth Geelong, birthday photobooth Geelong, corporate photo booth Geelong, Bellarine photo booth hire, Surf Coast photo booth hire"
        />

        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/photoboothhiregeelong"
        />

        <meta property="og:title" content="Photo Booth Hire Geelong 📸 | The Shan Booth" />
        <meta
          property="og:description"
          content="Premium photo booth hire in Geelong with unlimited prints, fun props and instant digital sharing. Perfect for weddings, birthdays and corporate events."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.photoboothwithshan.com.au/photoboothhiregeelong"
        />
        <meta property="og:image" content="/images/hero-banner-2.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Geelong 📸 | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book a modern photo booth in Geelong with unlimited prints, custom templates and instant sharing."
        />
        <meta name="twitter:image" content="/images/hero-banner.webp" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "description": "Photo booth hire Geelong for weddings, birthdays, and corporate events across Geelong, the Bellarine Peninsula and Surf Coast.",
            "image": "/images/hero-banner-2.webp",
            "url": "https://www.photoboothwithshan.com.au/photoboothhiregeelong",
            "telephone": "+61 475 116 521",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Geelong",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "areaServed": [
              "Geelong",
              "Bellarine Peninsula",
              "Surf Coast",
              "Ocean Grove",
              "Barwon Heads",
              "Torquay",
              "Anglesea"
            ],
            "priceRange": "$$"
          }
          `}
        </script>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What’s included with photo booth hire in Geelong?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Geelong photo booth hire includes delivery, setup and pack-down, a friendly attendant, unlimited photos and prints, fun props, custom templates, and instant digital sharing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you travel to the Bellarine Peninsula and Surf Coast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We service Geelong and surrounding areas including the Bellarine Peninsula and Surf Coast (e.g., Ocean Grove, Barwon Heads, Torquay and Anglesea)."
                }
              },
              {
                "@type": "Question",
                "name": "How far in advance should I book?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Popular weekends book out fast. We recommend locking in your date as early as possible, especially for weddings and peak seasons."
                }
              }
            ]
          }
          `}
        </script>
      </Head>

      <div className="geelong-landing">
        <div className="floating-strip left-strip">
          <img src={floatingStrip} alt="Photo booth strip design" />
        </div>

        <h1>Photo Booth Hire Geelong – Weddings, Birthdays & Corporate Events</h1>
        <p>
          Planning an event in <strong>Geelong</strong>? The Shan Booth delivers a modern, stylish
          photo booth experience with <strong>unlimited prints</strong>, <strong>fun props</strong>{" "}
          and <strong>instant digital sharing</strong>. Perfect for weddings, birthdays, school
          events and corporate functions across Geelong, the Bellarine Peninsula and Surf Coast.
        </p>

        <div className="photobooth-gallery">
          <img src={boothImg1} alt="Photo booth hire in Geelong" loading="lazy" />
          <img src={boothImg2} alt="Geelong photo booth for events" loading="lazy" />
        </div>

        <div className="photobooth-section">
          <h2>✨ What You Get With Our Geelong Photo Booth Hire</h2>
          <ul className="feature-list">
            <li>📸 <strong>Unlimited photos & prints</strong> during your hire</li>
            <li>🎭 <strong>Fun props</strong> and optional themed styling</li>
            <li>🖼️ <strong>Custom photo strip templates</strong> to match your event</li>
            <li>📲 <strong>Instant digital sharing</strong> (SMS / QR download)</li>
            <li>💡 <strong>Pro lighting</strong> and high-quality cameras for crisp shots</li>
            <li>👩‍💼 <strong>Friendly attendant</strong> + setup and pack-down included</li>
          </ul>
        </div>

        <div className="photobooth-section">
          <h2>📍 Geelong & Surrounding Areas We Cover</h2>
          <ul className="areas-list">
            <li>Geelong CBD, Newtown, South Geelong</li>
            <li>Belmont, Highton, Grovedale, Waurn Ponds</li>
            <li>Lara, Corio, Leopold</li>
            <li>Drysdale, Clifton Springs</li>
            <li>Ocean Grove, Barwon Heads</li>
            <li>Torquay, Anglesea (Surf Coast)</li>
          </ul>
        </div>

        <div className="photobooth-section">
          <h2>📦 Packages (Simple, Flexible & Great Value)</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for engagements, birthdays and smaller celebrations.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Our most popular option for weddings and corporate events.</p>
            </div>
            <div className="package-item">
              <h3>All-Night Package</h3>
              <p>
                Non-stop fun for big receptions and gala nights.{" "}
                <a href="/packages">View packages.</a>
              </p>
            </div>
          </div>
        </div>

        <div className="photobooth-section faq-section">
          <h2>❓ Photo Booth Hire Geelong – FAQs</h2>
          <h3>How much does a photo booth cost in Geelong?</h3>
          <p>
            Pricing depends on the booth type, duration and add-ons. The fastest way to get an
            exact quote is via our <a href="/quickquote">Quick Quote</a> form.
          </p>

          <h3>Do you set up at venues (wineries, waterfront, function rooms)?</h3>
          <p>
            Yes. We arrive early, set up smoothly, and coordinate with your venue so everything
            runs on time.
          </p>

          <h3>Can we get digital copies after the event?</h3>
          <p>
            Yes — you’ll receive access to the full gallery so you can relive the night and share
            with guests.
          </p>
        </div>

        <div className="photobooth-section local-info">
          <h2>🗺️ Servicing Geelong, Bellarine & Surf Coast</h2>
          <p>
            <strong>The Shan Booth</strong> – Photo Booth Hire Geelong
            <br />
            📞 +61 475 116 521
            <br />
            📍 Geelong, VIC, Australia
          </p>
          <iframe
            title="Geelong, VIC"
            src="https://www.google.com/maps?q=Geelong%20VIC&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">
            📩 Get a Geelong Quote
          </a>
          <a href="/booking" className="cta-btn">
            📅 Book Your Date
          </a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> photo booth hire Geelong • photobooth hire Geelong •
          wedding photo booth Geelong • birthday photo booth Geelong • Bellarine Peninsula photo
          booth hire • Surf Coast photo booth hire
        </div>

        <div className="floating-strip right-strip">
          <img src={floatingStrip} alt="Photo booth strip design" />
        </div>
      </div>
    </>
  );
};

export default GeelongLanding;
