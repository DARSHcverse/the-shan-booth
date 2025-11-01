import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";
import birthdayBackdrop from "../images/joyful-young-man-wearing-party-hat-gestures-call-me-sign-standing-with-smiling-young-girl-wearing-party-hat-holding-birthday-cake-gesturing-call-me-sign-isolated-pink-wall.webp";
import birthdayBackdrop2 from "../images/smiling-young-man-wearing-party-hat-surprised-young-girl-holds-hands-together-isolated-pink-wall.webp";
import birthdayStrip from "../images/birthdaystrip.png";

const BirthdayLanding = () => {
  return (
    <>
      <Helmet>
        <title>Birthday Photo Booth Hire Melbourne 🎉 | Fun Party Booths | The Shan Booth</title>
        <meta
          name="description"
          content="Celebrate in style with The Shan Booth’s birthday photo booths! Unlimited prints, fun props & party energy for 18ths, 21sts, kids’ birthdays & milestone celebrations in Melbourne & Geelong."
        />
        <meta
          name="keywords"
          content="birthday photo booth hire Melbourne, 18th birthday photobooth, 21st party photo booth, kids party booth Melbourne, milestone birthday photobooth Geelong, birthday party photo booth Grovedale"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/birthday" />

        <meta property="og:title" content="Birthday Photo Booth Hire Melbourne 🎉 | The Shan Booth" />
        <meta
          property="og:description"
          content="Fun, laughter & unlimited prints! Book your birthday photobooth in Melbourne or Geelong today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/birthday" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/birthdaybooth.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Birthday Party Photo Booth Hire Melbourne 🎈 | The Shan Booth"
        />
        <meta
          name="twitter:description"
          content="Make your birthday unforgettable with props, lights & laughter from The Shan Booth."
        />
        <meta
          name="twitter:image"
          content="https://www.photoboothwithshan.com.au/birthdaybooth.jpg"
        />

        {/* Improved Event Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Birthday Photo Booth Hire Melbourne",
            "startDate": "2025-01-01",
            "endDate": "2025-12-31",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Melbourne & Geelong",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Add street here",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "postalCode": "3000",
                "addressCountry": "AU"
              }
            },
            "image": [
              "https://www.photoboothwithshan.com.au/birthdaybooth.jpg"
            ],
            "description": "Photo booth hire for birthday parties in Melbourne, Geelong & Grovedale. Fun props, unlimited prints, and vibrant backdrops for every age.",
            "organizer": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="birthday-landing">
        <div className="floating-strip left-strip">
          <img src={birthdayStrip} alt="Birthday photostrip design" />
        </div>

        <h1>Birthday Photo Booths That Make Memories 🎂</h1>
        <p>
          Birthdays deserve more than cake — they deserve memories! 
          The Shan Booth brings the <strong>fun, laughter, and photo magic</strong> to every celebration, 
          whether it’s an <strong>18th</strong>, <strong>21st</strong>, or <strong>family birthday bash</strong>.
        </p>

        <div className="birthday-gallery">
          <img src={birthdayBackdrop} alt="Party guests enjoying photobooth" loading="lazy" />
          <img src={birthdayBackdrop2} alt="Birthday photobooth backdrop setup" loading="lazy" />
        </div>

        <div className="birthday-section">
          <h2>🎈 What Makes Our Booths Party-Perfect</h2>
          <ul className="feature-list">
            <li>✨ <strong>Party Props & Themes</strong> – Hats, glasses & fun filters to match your vibe.</li>
            <li>✨ <strong>Unlimited Prints</strong> – Everyone leaves with a photo memory in hand.</li>
            <li>✨ <strong>Instant Digital Sharing</strong> – Send snaps directly to phones or socials.</li>
            <li>✨ <strong>Fits Any Venue</strong> – Homes, halls, rooftops or event spaces.</li>
          </ul>
        </div>

        <div className="birthday-section">
          <h2>🎉 Birthday Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Mini Party</h3>
              <p>Great for kids’ birthdays or intimate gatherings.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Celebration</h3>
              <p>Our most popular for 18ths & 21sts. Non-stop photos and laughter!</p>
            </div>
            <div className="package-item">
              <h3>All-Night Bash</h3>
              <p>Perfect for milestone birthdays with guests who love a good photo moment.</p>
            </div>
          </div>
        </div>

        <div className="birthday-section">
          <h2>📍 Service Areas</h2>
          <ul className="areas-list">
            <li>Melbourne Metro & Suburbs</li>
            <li>Geelong & Grovedale</li>
            <li>Werribee & Tarneit</li>
          </ul>
        </div>

        <div className="birthday-section">
          <h2>📅 Book Early to Party Right!</h2>
          <p>Our birthday booths book out fast on weekends. Secure your spot and let us bring the joy and creativity to your celebration.</p>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Birthday Booth</a>
          <a href="/quickquote" className="cta-btn">Get a Party Quote</a>
        </div>

        <div className="seo-keywords" aria-hidden="true">
          birthday photo booth hire Melbourne • 18th birthday photo booth • 21st birthday booth Geelong • kids party photo booth Grovedale
        </div>

        <div className="floating-strip right-strip">
          <img src={birthdayStrip} alt="Birthday photostrip graphic" />
        </div>
      </div>
    </>
  );
};

export default BirthdayLanding;
