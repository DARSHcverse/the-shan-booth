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
        <title>Photo Booth Hire Melbourne 📸 | Weddings, Birthdays & Corporate Events | The Shan Booth</title>
        <meta
          name="description"
          content="Looking for premium photo booth hire in Melbourne? The Shan Booth provides modern, affordable photo booth rentals for weddings, birthdays, and corporate events. Unlimited prints, fun props, and instant digital sharing!"
        />
        <meta
          name="keywords"
          content="photo booth hire Melbourne, photobooth hire Melbourne, wedding photo booth hire Melbourne, birthday party photo booth Melbourne, corporate photo booth Melbourne, 360 photo booth hire Melbourne, mirror photo booth hire Melbourne"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photoboothhiremelbourne" />

        {/* Open Graph */}
        <meta property="og:title" content="Photo Booth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          property="og:description"
          content="Make your event unforgettable with The Shan Booth. Photo booth hire for weddings, birthdays & corporate events across Melbourne, Tarneit & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photoboothhiremelbourne" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/boothimg5.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Melbourne 📸 | Weddings, Parties & Corporate Events" />
        <meta
          name="twitter:description"
          content="Book your Melbourne photo booth today! Unlimited prints, props & instant digital sharing."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/boothimg4.webp" />

        {/* ✅ Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "description": "Photo booth hire for weddings, birthdays, and corporate events across Melbourne, Tarneit & Geelong.",
            "image": "https://www.photoboothwithshan.com.au/boothimg5.webp",
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
                "name": "How much does a photo booth cost to hire in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Photo booth hire in Melbourne starts with 2-hour packages and extends to full-event coverage. Pricing depends on booth type, duration, and add-ons."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide wedding photo booths in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, The Shan Booth offers elegant and fun photo booth setups for weddings, complete with themed props, custom templates, and unlimited prints."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer 360 or mirror photo booth hire in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Choose from modern open-air, 360, or mirror photo booths to suit your event’s style."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Melbourne CBD & suburbs, Geelong, Grovedale, Tarneit, Point Cook, and surrounding western suburbs."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* ✅ Landing Page Content */}
      <div className="photobooth-landing">
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>

        <h1>Photo Booth Hire Melbourne – Weddings, Parties & Events</h1>
        

        <div className="photobooth-section">
          <h2>Looking for the <strong>best photo booth hire in Melbourne</strong>?</h2>
        <p>
          The Shan Booth offers <strong>modern, affordable, and stylish photobooth rentals</strong> for every occasion — from <strong>weddings</strong> and <strong>birthday parties</strong> to <strong>corporate events</strong> and <strong>school functions</strong>. Enjoy <strong>unlimited prints</strong>, <strong>fun props</strong>, and <strong>instant digital sharing</strong> for your guests.
        </p><br />
        <p>
          When you search for <a href="/">photo booth hire Melbourne</a>, you'll find The Shan Booth stands out as a premier provider committed to excellence. Our comprehensive service covers all aspects of your event, from initial planning through to post-event delivery of digital memories. We understand that every event is unique, which is why we offer flexible packages that can be tailored to your specific requirements and budget.
        </p><br />
        <p>
          Our <a href="/">photo booth hire Melbourne</a> service is built on years of experience serving clients across Melbourne, Geelong, and regional Victoria. We've perfected our approach to ensure seamless operation, professional results, and unforgettable guest experiences. Whether you're hosting an intimate gathering or a large-scale celebration, our team brings the same level of dedication and expertise to every booking.
        </p>
        </div>

        <div className="photobooth-gallery">
          <img src={boothImg} alt="Photobooth setup at Melbourne event" loading="lazy" />
          <img src={boothImg2} alt="Guests using props at Melbourne photobooth" loading="lazy" />
        </div>

        {/* ✅ Why Choose Section */}
        <div className="photobooth-section">
          <h2>✨ Why Choose The Shan Booth?</h2>
          <ul className="feature-list">
            <li>📸 <strong>Unlimited Prints & Digital Sharing</strong> – Instant photos and online galleries.</li>
            <li>🎉 <strong>Fun Props & Stylish Backdrops</strong> – From elegant weddings to fun parties.</li>
            <li>💍 <strong>Perfect for All Events</strong> – Weddings, birthdays, school formals & corporate events.</li>
            <li>🚗 <strong>Servicing Melbourne, Tarneit & Geelong</strong> – We come to your venue and set up everything.</li>
          </ul>
        </div>

        {/* ✅ Types of Photo Booths */}
        <div className="photobooth-section">
          <h2>📸 Types of Photo Booths You Can Hire in Melbourne</h2>
          <p>Choose from a variety of <strong>photo booth hire options in Melbourne</strong> to suit your event:</p>
          <ul>
            <li><strong>Open-Air Photo Booths</strong> – Spacious and great for large groups.</li>
            <li><strong>Glam Photo Booths</strong> – Sleek, interactive, and perfect for Black and White events.</li>
            <li><strong>360 Photo Booths</strong> – Capture full-motion videos for social media sharing.</li>
            <li><strong>Enclosed Photo Booths</strong> – Fun and private setup ideal for birthdays.</li>
          </ul>
        </div>

        {/* ✅ Event-Specific Sections */}
        <div className="photobooth-section">
          <h2>💍 Wedding Photo Booth Hire Melbourne</h2>
          <p>
            Make your big day unforgettable with our <strong>wedding photo booth hire Melbourne</strong> packages. 
            Elegant backdrops, custom designs, and fun props create lasting memories for your guests. 
            <a href="/weddings"> Learn more about our wedding packages.</a>
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🎂 Birthday Party Photo Booth Hire Melbourne</h2>
          <p>
            Celebrate in style with our <strong>birthday photo booth hire Melbourne</strong> service. From 18ths and 21sts to milestone birthdays, our booths bring instant fun and unlimited prints. 
            <a href="/birthday"> Explore birthday photo booth options.</a>
          </p>
        </div>

        <div className="photobooth-section">
          <h2>🏢 Corporate Photo Booth Hire Melbourne</h2>
          <p>
            Hosting a corporate event or end-of-year celebration? Our <strong>corporate photo booth hire Melbourne</strong> packages include branded templates, professional setups, and seamless guest experiences. 
            <a href="/corporate-events"> See corporate booth packages.</a>
          </p>
        </div>

        {/* ✅ Packages */}
        <div className="photobooth-section">
          <h2>📦 Our Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Perfect for smaller gatherings or short events. Includes unlimited prints & a friendly booth attendant.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Our most popular option — ideal for weddings, birthdays, and corporate parties.</p>
            </div>
            <div className="package-item">
              <h3>All-Night Package</h3>
              <p>Unlimited fun for gala events, weddings, and large functions. <a href="/packages">View all package details.</a></p>
            </div>
          </div>
        </div>

        {/* ✅ How It Works */}
        <div className="photobooth-section">
          <h2>🎬 How Our Photobooth Hire Works</h2>
          <ol>
            <li>Choose your package and confirm your event date.</li>
            <li>We deliver, set up, and manage the booth on-site.</li>
            <li>Guests take unlimited photos, GIFs, and boomerangs.</li>
            <li>Instant prints and digital copies are shared right away.</li>
          </ol>
        </div>

        {/* ✅ Areas Covered */}
        <div className="photobooth-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
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

        {/* ✅ FAQ Section */}
        <div className="photobooth-section faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <h3>Do you offer 360 or mirror photo booth hire?</h3>
          <p>Yes! We offer 360, mirror, and open-air photo booths depending on your event needs and style.</p>

          <h3>Can the photo booth be branded for corporate events?</h3>
          <p>Absolutely. We can customize photo templates, backdrops, and digital overlays to include your logo or event branding.</p>

          <h3>Do you travel outside Melbourne?</h3>
          <p>Yes, we service Tarneit, Geelong, Grovedale, and nearby suburbs in addition to Melbourne CBD.</p>
        </div>

        {/* Additional Content Section */}
        <div className="photobooth-section">
          <h2>🌟 What Makes Our Photo Booth Hire Melbourne Service Special</h2>
          <p>
            Choosing the right <a href="/">photo booth hire Melbourne</a> provider can make all the difference in your event's success. At The Shan Booth, we combine professional-grade equipment with personalized service to create experiences that guests remember long after the celebration ends. Our commitment to quality is evident in every aspect of our service, from the Canon R100 cameras we use to the friendly, professional attendants who manage each event.
          </p>
          <p>
            Our <a href="/">photo booth hire Melbourne</a> packages are designed with flexibility in mind. We understand that events vary in size, duration, and style, which is why we offer customizable options that can be adjusted to match your specific needs. Whether you require additional hours, extra props, custom branding, or specialized backdrops, we work with you to create the perfect package for your celebration.
          </p>
          <p>
            When you book <a href="/">photo booth hire Melbourne</a> with The Shan Booth, you're investing in more than just equipment – you're choosing a partner dedicated to making your event extraordinary. Our team handles every detail, from delivery and setup to breakdown, allowing you to focus on enjoying your celebration while we ensure everything runs smoothly behind the scenes.
          </p>
        </div>

        {/* ✅ Local Info */}
        <div className="photobooth-section local-info">
          <h2>📌 Contact & Location</h2>
          <p>
            <strong>The Shan Booth</strong> – Photo Booth Hire Melbourne  
            <br />
            📞 +61 475 116 521  
            <br />
            📍 Melbourne, VIC, Australia
          </p>
          <p>
            Ready to experience the best <a href="/">photo booth hire Melbourne</a> has to offer? Contact us today to discuss your event requirements and discover how we can make your celebration unforgettable. Our friendly team is always ready to answer questions, provide recommendations, and help you choose the perfect package for your special occasion.
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

        {/* ✅ Calls to Action */}
        <div className="cta-center">
          <a href="/quickquote" className="cta-btn">📩 Get a Quick Quote</a>
          <a href="/booking" className="cta-btn">📅 Book Now</a>
        </div>

        {/* ✅ Keyword Footer */}
        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> photo booth hire Melbourne • wedding photo booth Melbourne • 360 photo booth hire • mirror photo booth Melbourne • corporate photo booth hire • birthday photobooth Melbourne • Geelong photo booth • Tarneit photo booth
        </div>

        <div className="floating-strip right-strip">
          <img src={birthdayStrip} alt="Birthday photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default PhotoboothLanding;
