import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Image from "next/image";
import { useConsent } from "./ConsentProvider";

// Main Image Imports
const boothimg5 = '/images/hero-banner.webp';
const boothimg2 = '/images/hero-banner-2.webp';
const boothimg3 = '/images/hero-banner-3.webp';
const boothimg4 = '/images/hero-banner-4.webp';
const photobooth = '/images/photobooth.webp';
const events = '/images/boothimg7.webp';
const packages = '/images/inclusivepack.webp';
const gifvideo = '/images/fun-vdo.webm';
const gifvideo2 = '/images/fun-vdo-2.webm';
const gifvideo3 = '/images/fun-vdo-3.webm';

// Floating Icons (currently not in use, can be enabled if needed later for christmas theme)
// import iconCamera from '/images/prop2.png';
// import iconChristmasTree from '/images/prop3.png';
// import iconPartyPopper from '/images/prop4.png';
// import iconPhotoStrip from '/images/prop5.png';

const HomePage = () => {
  const router = useRouter();
  const { consent, openDialog } = useConsent();
  const images = [boothimg5, boothimg2, boothimg3, boothimg4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const reviewsSectionRef = useRef(null);
  const [shouldLoadReviews, setShouldLoadReviews] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

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

  // ✅ Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.photoboothwithshan.com.au/#localbusiness",
    "name": "The Shan Booth",
    "url": "https://www.photoboothwithshan.com.au/",
    "logo": "/images/logo.png",
    "image": "/images/photobooth.webp",
    "description": "The Shan Booth provides premium photo booth hire in Melbourne with open booths, glam booths, enclosed booths, 360 video booths, and audio guest books. Perfect for weddings, graduations, corporate events, and Christmas parties.",
    "telephone": "+61 475 116 521",
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
      "telephone": "+61 475 116 521",
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
    <main className="main-content">
      <Head>
        <title>Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Affordable photo booth hire Melbourne for weddings, school graduations, corporate events & Christmas parties. Book our open, glam, magic mirror & 360 booths today!"
        />
        <meta
          name="keywords"
          content="photobooth hire melbourne, photo booth hire Melbourne, wedding photo booth Melbourne, corporate event photo booth Melbourne, school graduation photo booth, Christmas party photo booth Melbourne, glam booth hire, magic mirror photo booth Melbourne, 360 booth hire Melbourne, open photo booth hire, enclosed photo booth hire"
        />
        <meta name="author" content="The Shan Booth" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#d6336c" />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events" />
        <meta
          property="og:description"
          content="Affordable photo booth hire in Melbourne for weddings, school events, corporate functions & Christmas parties. Fun props, instant prints & 360 booths!"
        />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/" />
        <meta property="og:site_name" content="The Shan Booth" />
        <meta property="og:image" content="/images/photobooth.webp" />
        <meta property="og:image:alt" content="Photo booth hire Melbourne - The Shan Booth setup" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Melbourne | Weddings, Graduations & Events" />
        <meta
          name="twitter:description"
          content="Book affordable photo booth hire Melbourne – weddings, school graduations, Christmas parties & corporate events. Choose open, glam, magic mirror & 360 booths."
        />
        <meta name="twitter:image" content="/images/photobooth.webp" />
        <meta name="twitter:creator" content="@TheShanBooth" />

        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      {/* --- Hero Section --- */}
      <section className="hero-section snow-effect" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* <div className="floating-items-container">  // Floating icons (currently not in use, can be enabled if needed later for christmas theme)
          <div className="floating-item item-2"><img src={iconCamera} alt="Floating camera icon" /></div>
          <div className="floating-item item-3"><img src={iconChristmasTree} alt="Floating Christmas tree icon" /></div>
          <div className="floating-item item-4"><img src={iconPartyPopper} alt="Floating party popper icon" /></div>
          <div className="floating-item item-5"><img src={iconPhotoStrip} alt="Floating strip icon" /></div>
        </div> */}

        <div className="hero-overlay">
          <Image
            src={images[currentImageIndex]}
            alt="Students celebrating their graduation with a fun photobooth"
            className="main-img"
            fill
            priority={currentImageIndex === 0}
            sizes="100vw"
          />
          <div className="hero-text">
            <h1 className="hero-title">PHOTO BOOTH HIRE MELBOURNE</h1>
            <p className="hero-subtitle">Melbourne's favourite photo booth for unforgettable end-of-year celebrations.</p>
            <div className="hero-buttons">
              <button onClick={() => router.push('/packages')} className="home-button">VIEW PACKAGES</button>
              <button onClick={() => router.push('/quickquote')} className="home-button secondary">Quick Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="section-padding seasonal-banner snow-effect">
        <div className="container">
          <h2 className="seasonal-title">🎓 Celebrate a Year of Achievements! 🎉</h2>
          <p className="seasonal-text">
            From Grade 6 graduations to corporate Christmas parties, our photo booths are the perfect way to capture the fun of a successful year.
            <br /><strong>Key dates in November and December are filling up. Don't miss out!</strong>
          </p>
          <p className="seasonal-text">
            When you choose photo booth hire Melbourne from The Shan Booth, you're selecting a trusted provider that has served hundreds of events across Melbourne, Geelong, and regional Victoria. Our commitment to excellence ensures every celebration becomes unforgettable.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding info-cards">
        <div className="container">
          <h2 className="section-title info-cards-title">
            Fun for Every End-of-Year Celebration
          </h2>

          <div className="info-card-grid">
            <article className="info-card info-card--corporate">
              <img
                src={events}
                alt="Colleagues laughing at a corporate Christmas party in Melbourne"
                className="info-card-img"
              />
              <div className="info-card-body">
                <h3>Corporate & Christmas Parties</h3>
                <p>
                  Reward your team and impress your clients. Our booths are a brilliant
                  addition to EOY functions and festive celebrations.
                </p>
                <button
                  onClick={() => router.push('/events')}
                  className="info-card-button"
                >
                  Corporate Events
                </button>
              </div>
            </article>

            <article className="info-card info-card--schools">
              <img
                src={photobooth}
                alt="Happy students with their photostrips at a school graduation"
                className="info-card-img"
              />
              <div className="info-card-body">
                <h3>School Graduations & Formals</h3>
                <p>
                  The perfect, age-appropriate entertainment for Grade 6, Year 10, and
                  Year 12 graduations. Safe, fun, and unforgettable!
                </p>
                <button
                  onClick={() => router.push('/events')}
                  className="info-card-button"
                >
                  School Events
                </button>
              </div>
            </article>

            <article className="info-card info-card--packages">
              <img
                src={packages}
                alt="Sleek, modern photobooth with custom branding options"
                className="info-card-img"
              />
              <div className="info-card-body">
                <h3>All-Inclusive Packages</h3>
                <p>
                  Every package includes unlimited prints, custom designs, fun props, and
                  a professional attendant to run the show.
                </p>
                <button
                  onClick={() => router.push('/packages')}
                  className="info-card-button"
                >
                  Explore Packages
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* --- Events SEO Section --- */}
      <section className="section-padding event-links">
        <div className="container">
          <h2 className="section-title event-links-title">
            Plan Your Next Event With The Shan Booth
          </h2>
          <p className="event-links-intro">
            From intimate weddings to massive school graduations and corporate Christmas parties,
            we’ve got a tailored photo booth experience for every celebration across Melbourne.
          </p>

          <div className="event-links-grid">
            <article className="event-link-card event-link-card--wedding">
              <div className="event-link-pill">Weddings</div>
              <h3>Wedding Photo Booths</h3>
              <p>
                Elegant, fun and unforgettable. Perfect backdrops, glam filters and keepsake prints
                for your big day.
              </p>
              <button
                className="event-link-button"
                onClick={() => router.push('/weddings')}
              >
                Explore Wedding Packages
              </button>
            </article>

            <article className="event-link-card event-link-card--birthday">
              <div className="event-link-pill">Birthdays</div>
              <h3>Birthday & Milestone Parties</h3>
              <p>
                From 18ths and 21sts to milestone birthdays, keep the party energy high with
                props, prints and instant sharing.
              </p>
              <button
                className="event-link-button"
                onClick={() => router.push('/birthday')}
              >
                See Birthday Booths
              </button>
            </article>

            <article className="event-link-card event-link-card--corporate">
              <div className="event-link-pill">Corporate & EOY</div>
              <h3>Corporate & Christmas Events</h3>
              <p>
                Branded templates, team-building fun and end-of-year memories for staff and clients
                across Melbourne.
              </p>
              <button
                className="event-link-button"
                onClick={() => router.push('/corporate-events')}
              >
                Corporate Event Options
              </button>
            </article>

            <article className="event-link-card event-link-card--graduation">
              <div className="event-link-pill">Schools</div>
              <h3>Graduations & Formals</h3>
              <p>
                Grade 6, Year 10 & Year 12 celebrations with WWCC-cleared attendants and
                age-appropriate fun.
              </p>
              <button
                className="event-link-button"
                onClick={() => router.push('/graduation')}
              >
                View School Packages
              </button>
            </article>

            <article className="event-link-card event-link-card--christmas">
              <div className="event-link-pill">Seasonal</div>
              <h3>Christmas Party Booths</h3>
              <p>
                Festive props, Christmas templates and end-of-year vibes for families, schools
                and workplaces.
              </p>
              <button
                className="event-link-button"
                onClick={() => router.push('/christmas')}
              >
                Christmas Photo Booths
              </button>
            </article>
          </div>
        </div>
      </section>


      {/* --- SEO Section --- */}
      <section className="seo-section">
        <div className="container">
          <h2>Melbourne's Favourite Photo Booth Hire</h2>
          <p>
            When it comes to <strong>photo booth hire Melbourne</strong>, quality matters. That's why 
            The Shan Booth invests in the latest <strong>Canon R100 mirrorless cameras</strong> to deliver 
            crystal-clear, professional-grade photos at every event. Unlike basic webcam booths, our 
            <strong> photo booths</strong> capture vibrant colours, sharp details, and stunning lighting so 
            your memories look their absolute best both in print and digital formats. Each 
            <strong> photo booth hire</strong> package includes unlimited instant prints, fun props, stylish 
            backdrops, and a friendly attendant to make sure everything runs smoothly. Whether you choose our 
            <strong> open photo booth</strong>, elegant <strong>glam booth</strong>, interactive 
            <strong> Enclosed photo booth</strong>, 
            you'll enjoy premium service that keeps guests smiling all night. For weddings, graduations, 
            birthdays, and corporate functions, trust The Shan Booth for the best <strong>photo booth hire Melbourne</strong> experience.
          </p>
          <p>
            Our photo booth hire Melbourne service extends throughout the greater Melbourne area, including Tarneit, Geelong, Point Cook, and surrounding suburbs. We understand that every event is unique, which is why we offer flexible packages that can be customized to match your specific needs. From intimate gatherings to large-scale corporate functions, our professional team ensures seamless setup and operation throughout your entire event.
          </p>
          <p>
            What sets our photo booth hire Melbourne apart is our dedication to using cutting-edge technology combined with exceptional customer service. Every booking includes a professional attendant who manages the booth, assists guests, and ensures everything runs smoothly. This hands-on approach means you can relax and enjoy your event while we handle all the technical details, from setup to breakdown.
          </p>
          <ul className="feature-list">
            <li>📸 Equipped with <strong>Canon R100 mirrorless cameras</strong> for the highest photo quality</li>
            <li>🖨️ Unlimited <strong>instant prints</strong> for all your guests to take home</li>
            <li>🎭 A wide selection of <strong>fun props</strong> to match your event theme</li>
            <li>🎨 Custom-designed <strong>photo strips</strong> and backdrops to suit weddings, graduations & parties</li>
            <li>👩‍💼 A professional <strong>photo booth attendant</strong> with every booking</li>
            <li>🚚 Free delivery within 40km </li>
            <li>🎉 Options include <strong>open booths</strong>, <strong>glam booths</strong> and <strong>Enclosed booths</strong></li>
          </ul>
        </div>
      </section>

      {/* --- Why Hire Us Section --- */}
      <section className="section-padding why-hire-us">
        <div className="container">
          <h2 className="section-title">Why Hire The Shan Booth</h2>
          <p>
            Choosing <strong>The Shan Booth</strong> means choosing the best <strong>photo booth hire in Melbourne</strong>. 
            We combine <strong>high-quality photo booths</strong>, professional service, and creative design to make every 
            event unforgettable. From <strong>weddings</strong> and <strong>corporate events</strong> to <strong>birthday parties</strong>, 
            our booths bring fun, interaction, and picture-perfect memories.
          </p>

          <div className="why-grid">
            <div className="why-item">
              <h3>🎉 Affordable Photo Booth Packages</h3>
              <p>
                We make <strong>photo booth hire</strong> affordable for everyone. Enjoy unlimited prints, digital sharing, 
                and a friendly booth attendant — all tailored for your event size and style.
              </p>
            </div>

            <div className="why-item">
              <h3>💡 Custom Booth Designs</h3>
              <p>
                Personalised templates, themed props, and stylish backdrops make your <strong>photo booth hire</strong> 
                experience unique. Whether it’s a wedding, graduation, or Christmas party, we match your theme perfectly.
              </p>
            </div>

            <div className="why-item">
              <h3>🏆 Trusted Melbourne Photo Booth Experts</h3>
              <p>
                Hundreds of Melbourne clients trust <strong>The Shan Booth</strong> for professional <strong>photo booth hire </strong> 
                services. With Canon cameras, studio lighting, and seamless tech, every moment looks magazine-ready.
              </p>
            </div>
          </div>

          <div className="why-cta">
            <a href="/blog" className="why-button secondary">
              Read Full Blog: Why Choose The Shan Booth →
            </a>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">What Our Clients Are Saying</h2>
          <div className="testimonial-card">
            <video
              src={gifvideo3}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="testimonial-webm"
            >
            </video>
            <video
              src={gifvideo2}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="testimonial-webm"
            >
            </video>
            <video
              src={gifvideo}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="testimonial-webm"
            >
            </video>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">"It was absolutely fun everyone seemed to enjoyed it thanks for the amazing service you provided for the Sync Christmas Lunch 😊"</p>
              <span className="testimonial-author">- ARGI LONTOS. (Corporate Christmas Party)</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"The photo booth was the absolute highlight of our Grade 6 Graduation! The kids had a safe, amazing time, and parents loved the photos. The Shan Booth team was so professional. Highly recommended!"</p>
              <span className="testimonial-author">- Sarah J. (Tarneit Primary School)</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">"The Shan Booth was the best part of our wedding! Our guests are still talking about how much fun they had. The attendant was amazing and the photo quality is fantastic. 10/10 recommend!"</p>
              <span className="testimonial-author">- Jessica & Tom (Wedding)</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-light" ref={reviewsSectionRef}>
        {consent.marketing ? (
          <div
            id="google-reviews-container"
            className="sk-ww-google-reviews"
            data-embed-id="25643287"
          />
        ) : (
          <div className="reviews-consent">
            <p className="reviews-consent__text">
              Google Reviews are disabled until you allow marketing cookies.
            </p>
            <button className="cookie-btn cookie-btn--primary" type="button" onClick={openDialog}>
              Manage cookie preferences
            </button>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container faq-container">
          <h2 className="section-title">Your Questions Answered</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are your attendants suitable for school events?</h3>
              <p>Yes. All our attendants have a valid Working with Children Check (WWCC) and are experienced in creating a fun, safe, and age-appropriate environment for students at graduations and formals.</p>
            </div>
            <div className="faq-item">
              <h3>Can you provide themed props for our event?</h3>
              <p>Absolutely! We provide a wide range of themed props for graduations, Christmas parties, school events, weddings, and corporate celebrations. Just tell us your theme when booking.</p>
            </div>
            <div className="faq-item">
              <h3>How much space do you need?</h3>
              <p>For the best experience, we recommend a clear, flat area of at least 4m x 4m. This allows enough room for the booth, backdrop, prop table, and your guests.<strong>photo booth hire Melbourne</strong></p>
            </div>
            <div className="faq-item">
              <h3>Do we get digital copies of the photos?</h3>
              <p>Yes! You’ll receive all high-resolution photos and GIFs after the event, provided on a USB or secure online gallery for easy sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Why Melbourne Chooses The Shan Booth</h2>
          <p>
            Melbourne event planners and hosts consistently choose The Shan Booth for their photo booth hire Melbourne needs because we deliver more than just equipment – we create experiences. Our comprehensive service includes everything from initial consultation to post-event digital delivery, ensuring a stress-free experience from start to finish.
          </p><br />
          <p>
            Whether you're planning a wedding reception, corporate gala, school formal, or birthday celebration, our photo booth hire Melbourne packages are designed to exceed expectations. We work closely with you to understand your vision and bring it to life with custom templates, themed props, and professional-grade photography that captures every special moment.
          </p><br />
          <p>
            Booking your photo booth hire Melbourne with The Shan Booth means choosing reliability, quality, and exceptional value. Our transparent pricing includes all essential services, so you won't encounter any hidden fees or surprise charges. We believe in making professional photo booth experiences accessible to everyone, which is why we offer competitive rates without compromising on quality or service.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Lock in the Fun for Your End-of-Year Event?</h2>
          <p>Don't leave your party entertainment to the last minute. Secure The Shan Booth today! Explore our photo booth hire Melbourne options and discover why we're Melbourne's trusted choice for unforgettable event experiences.</p>
          <button onClick={() => router.push('/quickquote')} className="home-button">Secure Your 2026 Date</button>
        </div>
      </section>

      {/* SEO Footer */}
      <div className="seo-footer">
        <div className="container">
          <p>
            <strong>Our event services:</strong> photo booth hire Melbourne • school graduation ideas • grade 6 graduation photo booth • corporate Christmas party hire • EOY party entertainment Melbourne • festive photo booth • open booth hire Melbourne • glam booth hire Melbourne • enclosed booth hire Melbourne • magic mirror photo booth hire Melbourne • 360 spinner booth Melbourne • audio guest book hire Melbourne
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
