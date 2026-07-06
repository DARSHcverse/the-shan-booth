import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Image from "next/image";
import { useConsent } from "./ConsentProvider";
import { QUICK_QUOTE_URL } from "../lib/siteLinks";
import { useRedesignReveal } from "../lib/useRedesign";

// Real image assets (unchanged)
const heroShot1 = '/images/hero-banner.webp';
const heroShot2 = '/images/hero-banner-2.webp';
const heroShot3 = '/images/photobooth.webp';
const boothOpen = '/images/boothimg5.webp';
const boothGlam = '/images/glam.png';
const boothEnclosed = '/images/enclosed.jpeg';
const booth360 = '/images/boothimg7.webp';
const qualityImg = '/images/photobooth.webp';

const HomePage = () => {
  const router = useRouter();
  const { consent, openDialog } = useConsent();
  const reviewsSectionRef = useRef(null);
  const [shouldLoadReviews, setShouldLoadReviews] = useState(false);

  useRedesignReveal();

  useEffect(() => {
    if (!consent.marketing) return;
    const el = reviewsSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadReviews(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [consent.marketing]);

  useEffect(() => {
    if (!consent.marketing) return;
    if (!shouldLoadReviews) return;
    if (typeof document === "undefined") return;

    if (!document.getElementById("sociablekit-google-reviews")) {
      const script = document.createElement("script");
      script.id = "sociablekit-google-reviews";
      script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [consent.marketing, shouldLoadReviews]);

  // ✅ Structured Data (unchanged content)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.photoboothwithshan.com.au/#localbusiness",
    "name": "The Shan Booth",
    "url": "https://www.photoboothwithshan.com.au/",
    "logo": "https://www.photoboothwithshan.com.au/images/logo.png",
    "image": "https://www.photoboothwithshan.com.au/images/photobooth.webp",
    "description": "The Shan Booth provides premium photo booth hire in Melbourne with open booths, glam booths, enclosed booths, 360 video booths, and audio guest books. Perfect for weddings, graduations, corporate events, and Christmas parties.",
    "telephone": "+61 414 521 425",
    "email": "mailto:theshanbooth@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "51 Celestial Circuit",
      "addressLocality": "Tarneit",
      "addressRegion": "VIC",
      "postalCode": "3029",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.852,
      "longitude": 144.692
    },
    "areaServed": [
      "Melbourne",
      "Geelong",
      "Tarneit",
      "Point Cook",
      "Werribee",
      "Victoria"
    ],
    "sameAs": [
      "https://www.facebook.com/theshanbooth",
      "https://www.instagram.com/the_shan_booth/",
      "https://twitter.com/theshanbooth"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61 414 521 425",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Open Photo Booth Hire Melbourne",
          "description": "Modern open photo booth hire for weddings, graduations, parties and corporate events with unlimited prints."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enclosed Photo Booth Hire Melbourne",
          "description": "Classic enclosed booth providing privacy and fun photo sessions for weddings and parties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Glam Photo Booth Hire Melbourne",
          "description": "High-end black & white glam booth ideal for weddings, galas, and premium events."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Magic Mirror Photo Booth Melbourne",
          "description": "Interactive magic mirror booth with animations, touch screen and instant prints."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "360 Spinner Booth Melbourne",
          "description": "Immersive 360-degree slow-motion video booth perfect for weddings and corporate launches."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Audio Guest Book Melbourne",
          "description": "Capture heartfelt voice messages from guests with our audio guest book service."
        }
      }
    ]
  };

  return (
    <main className="rd">
      <Head>
        <title>Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Affordable photo booth hire Melbourne for weddings, school graduations, corporate events & Christmas parties. Book our open, glam, magic mirror & 360 booths today!"
          key="description"
        />
        <meta
          name="keywords"
          content="photobooth hire melbourne, photo booth hire Melbourne, wedding photo booth Melbourne, corporate event photo booth Melbourne, school graduation photo booth, Christmas party photo booth Melbourne, glam booth hire, magic mirror photo booth Melbourne, 360 booth hire Melbourne, open photo booth hire, enclosed photo booth hire"
        />
        <meta name="author" content="The Shan Booth" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#F5921E" />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events" />
        <meta
          property="og:description"
          content="Affordable photo booth hire in Melbourne for weddings, school events, corporate functions & Christmas parties. Fun props, instant prints & 360 booths!"
        />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/" />
        <meta property="og:site_name" content="The Shan Booth" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/photobooth.webp" />
        <meta property="og:image:alt" content="Photo booth hire Melbourne - The Shan Booth setup" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events" />
        <meta
          name="twitter:description"
          content="Book affordable photo booth hire Melbourne – weddings, school graduations, Christmas parties & corporate events. Choose open, glam, magic mirror & 360 booths."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/images/photobooth.webp" />
        <meta name="twitter:creator" content="@TheShanBooth" />

        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
      </Head>

      {/* ✅ JSON-LD rendered so Google actually receives it (outside next/head) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* --- Hero --- */}
      <section className="rd-hero">
        <span className="rd-blob rd-b1" aria-hidden="true" />
        <span className="rd-blob rd-b2" aria-hidden="true" />
        <span className="rd-blob rd-b3" aria-hidden="true" />
        <div className="rd-wrap">
          <span className="rd-chip"><span className="rd-d" aria-hidden="true" /> Melbourne &amp; Geelong · 5★ rated</span>
          <h1><span className="rd-grad">Photo Booth Hire Melbourne</span> that makes the whole room smile.</h1>
          <p className="rd-lede">
            Open, glam, enclosed &amp; 360 booths with unlimited prints, custom strips and a friendly attendant —
            for weddings, parties, graduations &amp; corporate events across Melbourne.
          </p>
          <div className="rd-acts">
            <button onClick={() => window.location.assign(QUICK_QUOTE_URL)} className="rd-btn rd-btn-p" type="button">Get a quick quote →</button>
            <button onClick={() => router.push('/packages')} className="rd-btn rd-btn-s" type="button">View packages</button>
          </div>
          <div className="rd-hero-shots">
            <div className="rd-shot">
              <Image src={heroShot1} alt="Guests enjoying a photo booth at a Melbourne celebration" width={210} height={280} priority />
            </div>
            <div className="rd-shot">
              <Image src={heroShot2} alt="Couple posing at a wedding photo booth" width={210} height={280} priority />
            </div>
            <div className="rd-shot">
              <Image src={heroShot3} alt="The Shan Booth photo booth setup with props" width={210} height={280} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Trust bar --- */}
      <div className="rd-trust">
        <div className="rd-wrap">
          <div><div className="rd-n">5★</div><div className="rd-l">Google rating</div></div>
          <div><div className="rd-n">40km</div><div className="rd-l">Free delivery</div></div>
          <div><div className="rd-n">Canon</div><div className="rd-l">Real cameras</div></div>
          <div><div className="rd-n">Unlimited</div><div className="rd-l">Prints included</div></div>
        </div>
      </div>

      {/* --- Booths --- */}
      <section className="rd-sec">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal">
            <span className="rd-eyebrow">Choose your booth</span>
            <h2>Four ways to capture the night</h2>
            <p>Every booth includes unlimited prints, curated props and a real attendant. Pick the vibe.</p>
          </div>
          <div className="rd-grid4">
            <article className="rd-card rd-reveal" onClick={() => router.push('/open-booth')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/open-booth')} style={{ cursor: 'pointer' }}>
              <div className="rd-pic"><img src={boothOpen} alt="Open photo booth for group shots" /><span className="rd-badge">Popular</span></div>
              <div className="rd-cb"><h3>Open Booth</h3><p>Big backdrops, big group shots. The all-rounder.</p><span className="rd-go">Explore <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/glam-booth')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/glam-booth')} style={{ cursor: 'pointer' }}>
              <div className="rd-pic"><img src={boothGlam} alt="Glam black and white photo booth" /><span className="rd-badge">Premium</span></div>
              <div className="rd-cb"><h3>Glam Booth</h3><p>Black-and-white, red-carpet glam filter.</p><span className="rd-go">Explore <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/enclosed-booth')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/enclosed-booth')} style={{ cursor: 'pointer' }}>
              <div className="rd-pic"><img src={boothEnclosed} alt="Enclosed photo booth" /><span className="rd-badge">Classic</span></div>
              <div className="rd-cb"><h3>Enclosed Booth</h3><p>Private, classic &amp; a little cheeky.</p><span className="rd-go">Explore <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/photobooths')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/photobooths')} style={{ cursor: 'pointer' }}>
              <div className="rd-pic"><img src={booth360} alt="360 spinner video booth" /><span className="rd-badge">Viral</span></div>
              <div className="rd-cb"><h3>360 Spinner</h3><p>Slow-motion video made for socials.</p><span className="rd-go">Explore <span className="rd-ar">→</span></span></div>
            </article>
          </div>
        </div>
      </section>

      {/* --- How it works --- */}
      <section className="rd-sec rd-sec--soft">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal"><span className="rd-eyebrow">How it works</span><h2>Booked in three easy steps</h2></div>
          <div className="rd-steps">
            <div className="rd-step rd-reveal"><div className="rd-num">1</div><h3>Get your quote</h3><p>Tell us your date, venue and booth — we reply fast, usually the same day.</p></div>
            <div className="rd-step rd-reveal"><div className="rd-num">2</div><h3>We design your strips</h3><p>Custom photo-strip templates matched to your theme and colours.</p></div>
            <div className="rd-step rd-reveal"><div className="rd-num">3</div><h3>We run the show</h3><p>Delivery, setup, an attendant all night, then pack-down. You just enjoy it.</p></div>
          </div>
        </div>
      </section>

      {/* --- Quality difference --- */}
      <section className="rd-sec">
        <div className="rd-wrap rd-split">
          <div className="rd-vis rd-reveal"><img src={qualityImg} alt="High-quality photo booth prints from The Shan Booth" /></div>
          <div className="rd-reveal">
            <span className="rd-eyebrow">The quality difference</span>
            <h2 style={{ fontSize: 'var(--rd-s-3)', marginTop: 12 }}>Real cameras. Real prints. Real fun.</h2>
            <p style={{ color: 'var(--rd-muted)', marginTop: 14 }}>
              We shoot on Canon R100 mirrorless cameras with studio lighting — not tablets. Sharper detail, richer
              colour, prints your guests actually want to keep.
            </p>
            <ul>
              <li><span className="rd-ck">✓</span><span><b>Unlimited instant prints</b> plus a shared online gallery for every guest</span></li>
              <li><span className="rd-ck">✓</span><span><b>Custom-designed photo strips</b> matched to your event theme</span></li>
              <li><span className="rd-ck">✓</span><span><b>WWCC-cleared attendants</b> — safe and school-event ready</span></li>
              <li><span className="rd-ck">✓</span><span><b>Free delivery, setup &amp; pack-down</b> within 40km of Melbourne</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Plan Your Event (kept content, restyled) --- */}
      <section className="rd-sec rd-sec--soft">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal">
            <span className="rd-eyebrow">Any occasion</span>
            <h2>Plan Your Next Event With The Shan Booth</h2>
            <p>
              From intimate weddings to massive school graduations and corporate Christmas parties,
              we’ve got a tailored photo booth experience for every celebration across Melbourne.
            </p>
          </div>
          <div className="rd-grid4">
            <article className="rd-card rd-reveal" onClick={() => router.push('/weddings')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/weddings')} style={{ cursor: 'pointer' }}>
              <div className="rd-cb"><h3>Wedding Photo Booths</h3><p>Elegant, fun and unforgettable. Perfect backdrops, glam filters and keepsake prints for your big day.</p><span className="rd-go">Explore Wedding Packages <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/birthday')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/birthday')} style={{ cursor: 'pointer' }}>
              <div className="rd-cb"><h3>Birthday &amp; Milestone Parties</h3><p>From 18ths and 21sts to milestone birthdays, keep the party energy high with props, prints and instant sharing.</p><span className="rd-go">See Birthday Booths <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/corporate-events')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/corporate-events')} style={{ cursor: 'pointer' }}>
              <div className="rd-cb"><h3>Corporate &amp; Christmas Events</h3><p>Branded templates, team-building fun and end-of-year memories for staff and clients across Melbourne.</p><span className="rd-go">Corporate Event Options <span className="rd-ar">→</span></span></div>
            </article>
            <article className="rd-card rd-reveal" onClick={() => router.push('/graduation')} role="link" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && router.push('/graduation')} style={{ cursor: 'pointer' }}>
              <div className="rd-cb"><h3>Graduations &amp; Formals</h3><p>Grade 6, Year 10 &amp; Year 12 celebrations with WWCC-cleared attendants and age-appropriate fun.</p><span className="rd-go">View School Packages <span className="rd-ar">→</span></span></div>
            </article>
          </div>
        </div>
      </section>

      {/* --- Testimonials (kept content) --- */}
      <section className="rd-sec">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal"><span className="rd-eyebrow">Loved by hosts</span><h2>What Our Clients Are Saying</h2></div>
          <div className="rd-quotes">
            <div className="rd-q rd-reveal"><div className="rd-st">★★★★★</div><p>"It was absolutely fun everyone seemed to enjoyed it thanks for the amazing service you provided for the Sync Christmas Lunch 😊"</p><div className="rd-who">— Argi Lontos · Corporate Christmas Party</div></div>
            <div className="rd-q rd-reveal"><div className="rd-st">★★★★★</div><p>"The photo booth was the absolute highlight of our Grade 6 Graduation! The kids had a safe, amazing time, and parents loved the photos. Highly recommended!"</p><div className="rd-who">— Sarah J. · Tarneit Primary School</div></div>
            <div className="rd-q rd-reveal"><div className="rd-st">★★★★★</div><p>"The Shan Booth was the best part of our wedding! Our guests are still talking about how much fun they had. The photo quality is fantastic. 10/10 recommend!"</p><div className="rd-who">— Jessica &amp; Tom · Wedding</div></div>
          </div>
        </div>
      </section>

      {/* --- Google Reviews (kept behaviour) --- */}
      <section className="rd-sec rd-sec--soft" ref={reviewsSectionRef}>
        <div className="rd-wrap">
          {consent.marketing ? (
            <div
              id="google-reviews-container"
              className="sk-ww-google-reviews"
              data-embed-id="25643287"
            />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--rd-muted)', marginBottom: 16 }}>
                Google Reviews are disabled until you allow marketing cookies.
              </p>
              <button className="rd-btn rd-btn-s" type="button" onClick={openDialog}>
                Manage cookie preferences
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- FAQ (kept content) --- */}
      <section className="rd-sec">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal"><span className="rd-eyebrow">Good to know</span><h2>Your Questions Answered</h2></div>
          <div className="rd-faq rd-reveal">
            <details open>
              <summary>Are your attendants suitable for school events?</summary>
              <p className="rd-a">Yes. All our attendants have a valid Working with Children Check (WWCC) and are experienced in creating a fun, safe, and age-appropriate environment for students at graduations and formals.</p>
            </details>
            <details>
              <summary>Can you provide themed props for our event?</summary>
              <p className="rd-a">Absolutely! We provide a wide range of themed props for graduations, Christmas parties, school events, weddings, and corporate celebrations. Just tell us your theme when booking.</p>
            </details>
            <details>
              <summary>How much space do you need?</summary>
              <p className="rd-a">For the best experience, we recommend a clear, flat area of at least 4m x 4m. This allows enough room for the booth, backdrop, prop table, and your guests.</p>
            </details>
            <details>
              <summary>Do we get digital copies of the photos?</summary>
              <p className="rd-a">Yes! You’ll receive all high-resolution photos and GIFs after the event, provided on a USB or secure online gallery for easy sharing.</p>
            </details>
          </div>
        </div>
      </section>

      {/* --- SEO copy (kept content, restyled) --- */}
      <section className="rd-sec rd-sec--soft">
        <div className="rd-wrap rd-prose">
          <h2>Melbourne's Favourite Photo Booth Hire</h2>
          <p>
            When it comes to <strong>photo booth hire Melbourne</strong>, quality matters. That's why
            The Shan Booth invests in the latest <strong>Canon R100 mirrorless cameras</strong> to deliver
            crystal-clear, professional-grade photos at every event. Unlike basic webcam booths, our
            <strong> photo booths</strong> capture vibrant colours, sharp details, and stunning lighting so
            your memories look their absolute best both in print and digital formats. Each
            <strong> photo booth hire</strong> package includes unlimited instant prints, fun props, stylish
            backdrops, and a friendly attendant to make sure everything runs smoothly.
          </p>
          <p>
            Our photo booth hire Melbourne service extends throughout the greater Melbourne area, including Tarneit, Geelong, Point Cook, and surrounding suburbs. From intimate gatherings to large-scale corporate functions, our professional team ensures seamless setup and operation throughout your entire event.
            Looking specifically for <a href="/photoboothhiregeelong"><strong>photo booth hire Geelong</strong></a>? View our Geelong landing page for local service details.
          </p>
          <ul>
            <li>Equipped with <strong>Canon R100 mirrorless cameras</strong> for the highest photo quality</li>
            <li>Unlimited <strong>instant prints</strong> for all your guests to take home</li>
            <li>A wide selection of <strong>fun props</strong> to match your event theme</li>
            <li>Custom-designed <strong>photo strips</strong> and backdrops to suit weddings, graduations &amp; parties</li>
            <li>A professional <strong>photo booth attendant</strong> with every booking</li>
            <li>Free delivery within 40km</li>
            <li>Options include <strong>open booths</strong>, <strong>glam booths</strong> and <strong>enclosed booths</strong></li>
          </ul>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="rd-sec">
        <div className="rd-wrap rd-reveal">
          <div className="rd-cta">
            <div className="rd-glow" aria-hidden="true" />
            <h2>Ready to Lock in the Fun for Your Event?</h2>
            <p>Don't leave your party entertainment to the last minute. Secure The Shan Booth today — no obligation, no hidden fees.</p>
            <button onClick={() => window.location.assign(QUICK_QUOTE_URL)} className="rd-btn rd-btn-p" type="button">Secure Your 2026 Date →</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
