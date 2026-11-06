import React from "react";
import Head from "next/head";
import { serviceSchema, JsonLd } from "../lib/serviceSchema";
import { QUICK_QUOTE_URL } from "../lib/siteLinks";
const gradBackdrop = '/images/gradbooth.webp';
const gradStrip = '/images/GradStrip.webp';

const GraduationLanding = () => {
  return (
    <>
      {/* SEO + Meta Tags */}
      <Head>
        <title>Graduation Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Photo booths for graduations, school formals & uni balls. Classy backdrops, fun props & instant prints. Serving Melbourne, Geelong & Grovedale."
          key="description"
        />
        <meta
          name="keywords"
          content="graduation photo booth hire Melbourne, school formal photobooth Melbourne, university ball photo booth, end of year school event photo booth, graduation party photo booth Geelong, Grovedale graduation photobooth"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/graduation" />

        <meta property="og:title" content="Graduation & School Formal Photo Booth 🎓 | The Shan Booth" />
        <meta
          property="og:description"
          content="Make your graduation unforgettable! Classy backdrops, caps & gowns props, instant prints and digital sharing across Melbourne & Geelong."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/graduation" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/gradbooth.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Graduation Photo Booth Hire Melbourne 🎓 | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Book your graduation photobooth today! Serving Melbourne, Geelong & Grovedale with stylish backdrops and instant prints."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/images/gradbooth.jpg" />

        <JsonLd
          data={serviceSchema({
            name: "Graduation Photo Booth Hire Melbourne",
            serviceType: "Graduation Photo Booth Hire",
            description: "Professional photobooth hire for kinder, Grade 6, Year 12 and university graduations, school formals and valedictory dinners across Melbourne & Geelong.",
            path: "/graduation",
            image: "/images/gradbooth.jpg",
            highPrice: 860,
          })}
        />
      </Head>

      {/* Landing Content */}
      <div className="rd rd-landing graduation-landing">
        {/* Floating Graduation Strip */}
        <div className="floating-strip left-strip">
          <img src={gradStrip} alt="Graduation photobooth strip" />
        </div>
        
        <h1>Photo Booths for Graduations & School Formals</h1>
        <p>
          Graduation nights and school formals deserve something memorable. Our graduation-focused photo booth
          experiences are designed for milestone celebrations, featuring elegant backdrops, formal-friendly props,
          and keepsake photo strips that students and families treasure long after the night ends.
        </p>

        <div className="graduation-gallery">
          <img src={gradBackdrop} alt="Graduation photobooth backdrop" loading="lazy" />
        </div>

        <div className="graduation-section">
          <h2>🎓 Why Choose Our Photobooths for Graduation?</h2>
          <ul className="feature-list">
            <li>✨ <strong>Classy Backdrops & Props</strong> – Caps, gowns, confetti, and elegant backdrop options.</li>
            <li>✨ <strong>Instant Prints & Digital Sharing</strong> – Keepsakes to take home and share online instantly.</li>
            <li>✨ <strong>Perfect for Schools & Universities</strong> – High schools, colleges, and university faculties.</li>
            <li>✨ <strong>Servicing Melbourne, Geelong & Grovedale</strong> – We bring the booth to your venue.</li>
          </ul>
        </div>

        <div className="graduation-section">
          <h2>🎉 Graduation Packages</h2>
          <div className="package-list">
            <div className="package-item">
              <h3>2-Hour Package</h3>
              <p>Great for smaller ceremonies and quick post-ceremony celebrations.</p>
            </div>
            <div className="package-item">
              <h3>3–4 Hour Premium Package</h3>
              <p>Perfect for school formals and university events needing extra time and extra prints.</p>
            </div>
            <div className="package-item">
              <h3>Full Event Package</h3>
              <p>Unlimited fun for the full night – ideal for large venues and graduation galas.</p>
            </div>
          </div>
          <p className="hint-text">💡 Custom branded templates for your school or university available on request.</p>
        </div>

        <div className="graduation-section">
          <h2>📆 Graduation Season Peaks in November &amp; December</h2>
          <p>
            Victorian school formals, valedictory dinners and graduation nights cluster tightly into
            <strong> late November and the first three weeks of December</strong> — the same weeks as the
            corporate Christmas party rush. That overlap makes it the tightest availability window in
            our entire calendar, so a graduation booking is not something to leave until term four.
          </p>
          <ul className="feature-list">
            <li>🎓 <strong>Mid–late November</strong> – Year 12 formals and valedictory dinners peak</li>
            <li>🎓 <strong>Fri 4 &amp; Sat 5 December</strong> – graduation nights collide with corporate parties</li>
            <li>🎓 <strong>Fri 11 &amp; Sat 12 December</strong> – our busiest weekend of the year</li>
            <li>🎓 <strong>Week of 14–18 December</strong> – primary and secondary school break-ups</li>
          </ul>
          <p>
            Thursday nights are worth knowing about: many schools book valedictory dinners midweek,
            and Thursday availability in December is consistently better than Friday or Saturday.
            If your date is flexible, a Thursday is the easiest way to secure the season.
          </p>
          <p>
            Schools that confirm in September almost always get their preferred date. Schools enquiring
            in late November are usually choosing from what is left. If you are also planning a staff
            end-of-year function, see our <a href="/christmas">Christmas packages</a> — booking both
            together lets us carry your school branding across both events.
          </p>
        </div>

        <div className="graduation-section">
          <h2>🗓️ 2026 Graduation Calendar — Kinder to University</h2>
          <p>
            Every school level graduates at a different time, and Victorian government schools finish
            Term 4 on <strong>Friday 18 December 2026</strong>, so almost every school graduation has to
            land before then. Here is when each one usually falls:
          </p>
          <ul className="feature-list">
            <li>🧸 <strong>Kinder graduations</strong> – early to mid December, usually daytime. A 2-hour open booth suits big family groups.</li>
            <li>🎒 <strong>Grade 6 graduations</strong> – late November to 18 December, often midweek evenings in the school hall.</li>
            <li>🎓 <strong>Year 12 valedictory dinners &amp; formals</strong> – many held after VCE exams finish on <strong>Wed 18 November</strong>.</li>
            <li>🏛️ <strong>University &amp; TAFE</strong> – VU graduates 14–15 December and RMIT on 16 December, with family parties the same week.</li>
          </ul>
          <p>
            Dates, booth ideas and tips for each level are in our{" "}
            <a href="/blog/graduation-photo-booth-guide">2026 graduation photo booth guide</a>.
            Prices start at <strong>$390 for 2 hours</strong>, with delivery, setup, an attendant and unlimited prints included.
            See your exact price with our <a href={QUICK_QUOTE_URL}>quick quote</a>.
          </p>
        </div>

        <div className="graduation-section">
          <h2>📍 Areas We Cover</h2>
          <ul className="areas-list">
            <li>Melbourne (CBD & suburbs)</li>
            <li>Geelong</li>
            <li>Surrounding areas</li>
          </ul>
        </div>

        <div className="graduation-section">
          <h2>✅ Book Early for the 2026 Graduation Season</h2>
          <p>
            Peak November and December dates fill fast, and they compete directly with end-of-year
            corporate bookings. Secure your photobooth now to lock in your preferred night.
          </p>
          <h3 className="available-title">📅 Popular for:</h3>
          <ul className="available-list">
            <li>Graduation ceremonies</li>
            <li>School formals</li>
            <li>University balls</li>
            <li>Awards nights</li>
            <li>Valedictory dinners</li>
            <li>School break-up celebrations</li>
          </ul>
        </div>

        <div className="cta-center">
          <a href="/booking" className="cta-btn">Book Your Graduation Photobooth Today</a>
        </div>

        <div className="seo-keywords" aria-hidden="false">
          <strong>Popular searches:</strong> graduation photo booth hire Melbourne • school formal photobooth Melbourne • university ball photo booth Geelong • graduation event photobooth packages
        </div>
        
        {/* Floating Graduation Strip */}
        <div className="floating-strip right-strip">
          <img loading="lazy" decoding="async" src={gradStrip} alt="Graduation photobooth strip" />
        </div>
      </div>
    </>
  );
};

export default GraduationLanding;
