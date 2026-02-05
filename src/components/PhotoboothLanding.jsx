import React from "react";
import Head from "next/head";
import boothImg from "/images/boothimg4.webp";
import boothImg2 from "/images/boothimg5.webp";
import birthdayStrip from "/images/birthdaystrip.png";

const PhotoboothLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Head>
        <title>Photobooth Hire Melbourne 📸 | Christmas, Weddings, Birthdays & Corporate Events | The Shan Booth</title>

        <meta
          name="description"
          content="Looking for professional photobooth hire Melbourne? The Shan Booth offers modern, stylish, and affordable photobooth rentals for weddings, birthdays, and corporate events with unlimited prints, props, and instant digital sharing."
        />

        <meta
          name="keywords"
          content="photobooth hire Melbourne, wedding photobooth Melbourne, birthday photobooth hire Melbourne, corporate photobooth hire Melbourne, 360 photobooth hire Melbourne, mirror photobooth hire Melbourne"
        />

        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photoboothhiremelbourne" />

        {/* Open Graph */}
        <meta property="og:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          property="og:description"
          content="Make your event unforgettable with The Shan Booth. Premium photobooth hire Melbourne for weddings, birthdays & corporate events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photoboothhiremelbourne" />
        <meta property="og:image" content="/images/boothimg5.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photobooth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          name="twitter:description"
          content="Book the best photobooth hire Melbourne today! Unlimited prints, fun props & instant digital sharing."
        />
        <meta name="twitter:image" content="/images/boothimg4.webp" />

        {/* ✅ Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "description": "Photobooth hire Melbourne for weddings, birthdays, and corporate events.",
            "image": "/images/boothimg5.webp",
            "url": "https://www.photoboothwithshan.com.au",
            "telephone": "+61 475 116 521",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "priceRange": "$$"
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
                "name": "How much does photobooth hire in Melbourne cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Photobooth hire Melbourne starts with 2-hour packages. Prices vary depending on booth type, duration, and optional add-ons."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide wedding photobooths in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide elegant and fun photobooths for weddings, including themed props, custom templates, and unlimited prints."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer 360 or mirror photobooth hire in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We offer open-air, 360, glam, and mirror photobooths to suit your event style."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Melbourne CBD & suburbs, Geelong, Tarneit, Point Cook, and surrounding western suburbs."
                }
              }
            ]
          }
          `}
        </script>
      </Head>

      {/* PAGE CONTENT */}
      <div className="photobooth-landing">
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>

        {/* MAIN TITLE */}
        <h1>Photobooth Hire Melbourne – Christmas, Weddings, Parties & Events</h1>

        <div className="photobooth-section">
          <h2>Looking for the <strong>best photobooth hire Melbourne</strong>?</h2>
          <p>
            The Shan Booth offers <strong>modern, affordable, and stylish photobooth rentals</strong> for every occasion — from <strong>weddings</strong> and <strong>birthday parties</strong> to <strong>corporate events</strong> and <strong>school functions</strong>. Enjoy <strong>unlimited prints</strong>, <strong>fun props</strong>, and <strong>instant digital sharing</strong> for your guests.
          </p>
          <br />
          <p>
            When you search for <a href="/">photobooth hire Melbourne</a>, you'll find The Shan Booth stands out as a premier provider committed to excellence. Our comprehensive service covers every aspect of your event, from initial planning to post-event delivery of digital memories. We understand that each event is unique, which is why we offer flexible packages tailored to your specific requirements and budget.
          </p>
          <br />
          <p>
            Our <a href="/">photobooth hire Melbourne</a> service is backed by years of experience serving clients across Melbourne, Geelong, and regional Victoria. We've perfected our approach to ensure seamless operation, professional results, and unforgettable guest experiences. Whether you're hosting an intimate gathering or a large celebration, our team brings the same dedication and expertise to every booking.
          </p>

        </div>

        {/* Gallery */}
        <div className="photobooth-gallery">
          <img src={boothImg} alt="Photobooth setup at Melbourne event" loading="lazy" />
          <img src={boothImg2} alt="Guests using props at Melbourne photobooth" loading="lazy" />
        </div>

        {/* Why Choose */}
        <div className="photobooth-section">
          <h2>✨ Why Choose The Shan Booth?</h2>
          <ul className="feature-list">
            <li>📸 <strong>Unlimited Prints & Digital Sharing</strong></li>
            <li>🎉 <strong>Fun Props & Stylish Backdrops</strong></li>
            <li>💍 <strong>Perfect for All Events</strong></li>
            <li>🚗 <strong>Servicing Melbourne, Tarneit & Geelong</strong></li>
          </ul>
        </div>

        {/* Types of Booths */}
        <div className="photobooth-section">
          <h2>📸 Types of Photobooths You Can Hire</h2>
          <ul>
            <li><strong>Open-Air Photobooths</strong> – Spacious for large groups.</li>
            <li><strong>Glam Photobooths</strong> – Sleek and interactive.</li>
            <li><strong>360 Photobooths</strong> – Full-motion videos for social sharing.</li>
            <li><strong>Enclosed Photobooths</strong> – Private setup ideal for birthdays.</li>
          </ul>
        </div>

        {/* Event Sections */}
        <div className="photobooth-section">
          <h2>💍 Wedding Photobooth Hire Melbourne</h2>
          <p>
            Make your wedding day unforgettable with elegant <strong>photobooth hire Melbourne</strong> packages.  
            <a href="/weddings"> Learn more about wedding packages.</a>
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🎂 Birthday Photobooth Hire Melbourne</h2>
          <p>
            Celebrate birthdays in style with <strong>photobooth hire Melbourne</strong>.  
            <a href="/birthday"> Explore birthday options.</a>
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🏢 Corporate Photobooth Hire Melbourne</h2>
          <p>
            Host a corporate event or gala with professional <strong>photobooth hire Melbourne</strong>.  
            <a href="/corporate-events"> View corporate packages.</a>
          </p>
        </div>

        {/* Packages */}
        <div className="photobooth-section">
          <h2>📦 Our Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for smaller gatherings. Includes unlimited prints & friendly attendant.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Most popular for weddings, birthdays, and corporate events.</p>
            </div>
            <div className="package-item">
              <h3>All-Night Package</h3>
              <p>Unlimited fun for gala events and large functions. <a href="/packages">View details.</a></p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="photobooth-section">
          <h2>🎬 How Our Photobooth Hire Works</h2>
          <ol>
            <li>Choose your package and confirm your date.</li>
            <li>We deliver, set up, and manage the booth on-site.</li>
            <li>Guests take unlimited photos, GIFs, and boomerangs.</li>
            <li>Instant prints and digital copies are shared immediately.</li>
          </ol>
        </div>

        {/* Areas */}
        <div className="photobooth-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne CBD & Suburbs</li>
            <li>Tarneit & Point Cook</li>
            <li>Werribee & Hoppers Crossing</li>
            <li>Geelong & Grovedale</li>
            <li>Footscray & Sunshine</li>
            <li>St Kilda & South Yarra</li>
            <li>Brighton & Elwood</li>
            <li>Richmond & Hawthorn</li>
            <li>Collingwood & Fitzroy</li>
            <li>Northcote & Thornbury</li>
            <li>Glen Waverley & Mount Waverley</li>
            <li>Box Hill & Blackburn</li>
            <li>Mordialloc & Mentone</li>
            <li>Frankston & Mornington Peninsula</li>
            <li>Clayton & Dandenong</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="photobooth-section faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <h3>Do you offer 360 or Mirror Photobooths?</h3>
          <p>Yes! We offer 360, mirror, glam & open-air photobooths to suit your event.</p>

          <h3>Can photobooths be branded for corporate events?</h3>
          <p>Yes, we can customize templates, backdrops, and digital overlays with logos or branding.</p>

          <h3>Do you travel outside Melbourne?</h3>
          <p>Yes! We service Geelong, Tarneit, and surrounding suburbs in addition to Melbourne CBD.</p>
        </div>

        {/* Contact & Location */}
        <div className="photobooth-section local-info">
          <h2>📌 Contact & Location</h2>
          <p>
            <strong>The Shan Booth</strong> – Photobooth Hire Melbourne  
            <br />📞 +61 475 116 521  
            <br />📍 Melbourne, VIC, Australia
          </p>
          <p>
            Ready to book professional <strong>photobooth hire Melbourne</strong>? Contact us today to discuss your event requirements and choose the perfect package.
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

        {/* CTA */}
        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">📩 Get a Quick Quote</a>
          <a href="/booking" className="cta-btn">📅 Book Now</a>
        </div>

        {/* SEO Footer */}
        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> photobooth hire Melbourne • wedding photobooth Melbourne • birthday photobooth hire Melbourne • corporate photobooth hire • 360 photobooth hire Melbourne • mirror photobooth hire Melbourne
        </div>

        <div className="floating-strip right-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default PhotoboothLanding;
