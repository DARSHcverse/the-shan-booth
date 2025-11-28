import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

import schoolHoliday1 from "../images/schoolholiday1.webp";
import schoolHoliday2 from "../images/schoolholiday2.webp";

const SchoolHolidayLanding = () => {
  return (
    <>
      {/* ✅ SEO + Meta Tags */}
      <Helmet>
        <title>School Holiday Photo Booth Hire Melbourne 🎒 | Kids Parties, Programs & Events | The Shan Booth</title>

        <meta
          name="description"
          content="Make school holidays unforgettable with fun photo booth hire for kids parties, school programs, childcare centres, and community events across Melbourne, Tarneit & Geelong. Unlimited prints, digital sharing & kid-friendly props!"
        />

        <meta
          name="keywords"
          content="school holiday photo booth hire Melbourne, kids party photobooth Melbourne, school program photo booth hire, holiday program activities Melbourne, kid-friendly photo booth, Geelong kids photo booth, Tarneit school holidays activity, children's event photo booth"
        />

        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/school-holiday"
        />

        {/* Open Graph */}
        <meta property="og:title" content="School Holiday Photo Booth Hire Melbourne 🎉 | Kids Parties & Holiday Programs" />
        <meta
          property="og:description"
          content="Fun and interactive photo booth hire for school holidays, kids parties, programs & community events in Melbourne, Tarneit & Geelong. Unlimited prints, fun props & safe setup!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.photoboothwithshan.com.au/school-holiday"
        />
        <meta
          property="og:image"
          content="https://www.photoboothwithshan.com.au/schoolholiday1.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School Holiday Photo Booth Hire Melbourne 🎒 | Kids Parties & Programs" />
        <meta
          name="twitter:description"
          content="Hire a fun, safe and kid-friendly photo booth for school holidays in Melbourne & Geelong. Perfect for programs, family events & kids birthdays."
        />
        <meta
          name="twitter:image"
          content="https://www.photoboothwithshan.com.au/schoolholiday2.webp"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "School Holiday Photo Booth Hire Melbourne",
              "startDate": "2025-12-20",
              "endDate": "2026-02-01",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "Melbourne, Tarneit & Geelong",
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
              "image": "https://www.photoboothwithshan.com.au/schoolholiday1.webp",
              "description": "Hire a fun and kid-friendly photo booth for school holidays, kids birthday parties, school programs and community events in Melbourne, Tarneit & Geelong."
            }
          `}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <div className="season-landing">
        <h1>School Holiday Photo Booth Hire in Melbourne</h1>
        <p>
          Make your <strong>school holidays</strong> exciting, fun and unforgettable! Our kid-friendly photobooths are
          loved by children, families, holiday programs and community centres across Melbourne, Tarneit & Geelong.
        </p>

        <div className="season-gallery">
          <img src={schoolHoliday1} alt="Kids enjoying a photobooth during school holidays" loading="lazy" />
          <img src={schoolHoliday2} alt="School holiday photobooth setup with props" loading="lazy" />
        </div>

        <div className="season-section">
          <h2>🎒 Why Our Booths Are Perfect for School Holidays</h2>
          <ul className="feature-list">
            <li>✨ <strong>Kid-safe & fully supervised</strong> photobooth experience</li>
            <li>✨ <strong>Fun props</strong> that kids of all ages love</li>
            <li>✨ <strong>Unlimited prints</strong> for everyone to take home</li>
            <li>✨ <strong>Perfect for programs, birthdays & community events</strong></li>
            <li>✨ <strong>Instant digital sharing</strong> for parents & families</li>
          </ul>
        </div>

        <div className="season-section">
          <h2>📦 School Holiday Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Kids Party Package</h3>
              <p>Perfect for small birthdays and family gatherings.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Package</h3>
              <p>Ideal for childcare centres, school holiday programs & events.</p>
            </div>
            <div className="package-item">
              <h3>Community Event Package</h3>
              <p>Designed for busy public events and high guest volume.</p>
            </div>
          </div>
        </div>

        <div className="season-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne CBD & suburbs</li>
            <li>Tarneit, Truganina & West Melbourne</li>
            <li>Geelong, Grovedale & surrounding regions</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your School Holiday Photobooth</a>
          <br /><br />
          <a href="/" className="cta-btn">Homepage</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> school holiday photobooth | kids party photo booth Melbourne | holiday program activities | Geelong kids photobooth hire | Tarneit children’s event booth
        </div>
      </div>
    </>
  );
};

export default SchoolHolidayLanding;
