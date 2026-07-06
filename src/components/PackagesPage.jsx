import React, { useState } from 'react';
import Head from "next/head";
import { QUICK_QUOTE_URL } from "../lib/siteLinks";
import { useRedesignReveal } from "../lib/useRedesign";

const PackagesPage = () => {
  const [activeType, setActiveType] = useState('standard');
  useRedesignReveal();

  const standardPackages = [
    {
      id: 'standard-1',
      price: '$390',
      duration: '2 HOURS',
      features: [
        'Unlimited Photos',
        'Instant Prints',
        'Event Props',
        'Photostrip Design',
        'USB Digital Images',
        'Photo Booth Attendant',
        'Standard Backdrop',
        'Custom Start-up Page',
      ],
    },
    {
      id: 'standard-2',
      price: '$550',
      duration: '3 HOURS',
      featured: true,
      features: [
        'Unlimited Photos',
        'Instant Prints',
        'Extra Prints',
        'Event Props',
        'Photostrip Design',
        'USB Digital Images',
        'Online Gallery',
        'Photo Booth Attendant',
        'Standard Backdrop',
        'Custom Start-up Page',
      ],
    },
    {
      id: 'standard-3',
      price: '$700',
      duration: '4 HOURS',
      features: [
        'Unlimited Photos',
        'Instant Prints',
        'Extra Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Online Gallery',
        'Attendant Male/Female',
        'Standard Backdrop',
        'Custom Start-up Page',
        'Traditional Guest Book',
      ],
    },
    {
      id: 'standard-4',
      price: '$800',
      duration: '5 HOURS',
      features: [
        'Unlimited Photos',
        'Instant Prints',
        'Extra Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Online Gallery',
        'Attendant Male/Female',
        'Standard Backdrop',
        'Custom Start-up Page',
        'Traditional Guest Book',
      ],
    },
  ];

  const glamPackages = [
    {
      id: 'glam-1',
      price: '$490',
      duration: '2 HOURS',
      features: [
        'Unlimited Photos',
        'Postcard Size Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Photo Booth Attendant',
        'Standard White Backdrop',
      ],
    },
    {
      id: 'glam-2',
      price: '$590',
      duration: '3 HOURS',
      featured: true,
      features: [
        'Unlimited Photos',
        'Postcard Size Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Photo Booth Attendant',
        'Standard White Backdrop',
      ],
    },
    {
      id: 'glam-3',
      price: '$750',
      duration: '4 HOURS',
      features: [
        'Unlimited Photos',
        'Postcard Size Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Photo Booth Attendant',
        'Standard White Backdrop',
        'Attendant Male/Female',
        'Traditional Guest Book',
      ],
    },
    {
      id: 'glam-4',
      price: '$860',
      duration: '5 HOURS',
      features: [
        'Unlimited Photos',
        'Postcard Size Prints',
        'Event Props',
        'Photostrip Design',
        'Free USB',
        'Photo Booth Attendant',
        'Standard White Backdrop',
        'Attendant Male/Female',
        'Traditional Guest Book',
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Photo Booth Hire Packages",
    "description": "Standard and Glam photo booth hire packages in Melbourne for weddings, parties, and corporate events.",
    "provider": {
      "@type": "Organization",
      "name": "The Shan Booth",
      "url": "https://www.photoboothwithshan.com.au"
    },
    "areaServed": "Melbourne, Australia",
    "serviceType": "Photo Booth Hire"
  };

  const activePackages = activeType === 'standard' ? standardPackages : glamPackages;

  return (
    <main className="rd">
      <Head>
        <title>Photo Booth Hire Packages Melbourne | Affordable Wedding &amp; Party Booths</title>
        <meta
          name="description"
          content="Explore affordable photo booth hire packages in Melbourne. Choose from Standard or Glam Booth options with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
          key="description"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/packages" />

        <meta property="og:title" content="Photo Booth Hire Packages in Melbourne | The Shan Booth" />
        <meta
          property="og:description"
          content="Choose from Standard or Glam Booth packages with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/packages" />
        <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/photobooth.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Hire Packages in Melbourne | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Choose from Standard or Glam Booth packages with unlimited prints, props, guest books & more. Perfect for weddings, parties & corporate events."
        />
        <meta name="twitter:image" content="https://www.photoboothwithshan.com.au/images/photobooth.webp" />
      </Head>

      {/* ✅ JSON-LD rendered so Google actually receives it */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* --- Hero --- */}
      <section className="rd-pkg-hero rd-hero">
        <span className="rd-blob rd-b1" aria-hidden="true" />
        <span className="rd-blob rd-b2" aria-hidden="true" />
        <div className="rd-wrap">
          <span className="rd-eyebrow">Transparent pricing · No hidden fees</span>
          <h1>Photo Booth Hire Packages Melbourne</h1>
          <p className="rd-lede">
            Every package includes unlimited photos, instant prints, props, a custom start-up screen and a
            professional attendant. Choose your booth style and duration below.
          </p>
        </div>
      </section>

      {/* --- Package toggle + grid --- */}
      <section className="rd-sec" style={{ paddingTop: 'clamp(24px, 3vw, 40px)' }}>
        <div className="rd-wrap" style={{ textAlign: 'center' }}>
          <div className="rd-toggle" role="tablist" aria-label="Booth type">
            <button
              type="button"
              className={activeType === 'standard' ? 'rd-on' : ''}
              onClick={() => setActiveType('standard')}
              aria-selected={activeType === 'standard'}
            >
              Open &amp; Enclosed
            </button>
            <button
              type="button"
              className={activeType === 'glam' ? 'rd-on' : ''}
              onClick={() => setActiveType('glam')}
              aria-selected={activeType === 'glam'}
            >
              Glam Booth
            </button>
          </div>

          <div className="rd-plans">
            {activePackages.map((pkg) => (
              <div className={`rd-plan${pkg.featured ? ' rd-featured' : ''}`} key={pkg.id}>
                <div className="rd-dur">{pkg.duration}</div>
                <div className="rd-price">{pkg.price}</div>
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a className="rd-book" href={QUICK_QUOTE_URL}>Inquire</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Always included --- */}
      <section className="rd-sec rd-sec--soft">
        <div className="rd-wrap">
          <div className="rd-head rd-reveal">
            <span className="rd-eyebrow">Always included</span>
            <h2>Every package, no upsells</h2>
            <p>The price you see covers the whole experience — from delivery to pack-down.</p>
          </div>
          <div className="rd-incl rd-reveal">
            <div><span className="rd-ic" aria-hidden="true">🚚</span><div><b>Delivery &amp; setup</b><small>Free within 40km</small></div></div>
            <div><span className="rd-ic" aria-hidden="true">🖨️</span><div><b>Unlimited prints</b><small>Every guest, every session</small></div></div>
            <div><span className="rd-ic" aria-hidden="true">🎭</span><div><b>Curated props</b><small>Themed to your event</small></div></div>
            <div><span className="rd-ic" aria-hidden="true">🎨</span><div><b>Custom strip design</b><small>Matched to your style</small></div></div>
            <div><span className="rd-ic" aria-hidden="true">👩‍💼</span><div><b>Pro attendant</b><small>Runs the whole night</small></div></div>
            <div><span className="rd-ic" aria-hidden="true">☁️</span><div><b>Online gallery</b><small>Share everything after</small></div></div>
          </div>
        </div>
      </section>

      {/* --- Why / How to choose (kept content, restyled) --- */}
      <section className="rd-sec">
        <div className="rd-wrap rd-prose">
          <h2>Why Choose Our Photo Booth Hire Melbourne Packages</h2>
          <p>
            Our <a href="/">photo booth hire Melbourne</a> packages are designed to provide exceptional value while maintaining the highest standards of quality and service. We've structured our pricing to be competitive and transparent, ensuring you know exactly what's included in each package. Whether you select a standard 2-hour package or opt for our premium all-night option, you'll receive the same level of professional service and attention to detail.
          </p>
          <p>
            Each <a href="/">photo booth hire Melbourne</a> package from The Shan Booth comes complete with expert setup and teardown, skilled booth operators, unlimited photo opportunities, instant printouts, and full digital image access. Our all-inclusive approach means everything you need is included upfront, eliminating concerns about extra charges or overlooked services.
          </p>
          <h3>What’s Included in Every Package</h3>
          <ul>
            <li>Professional delivery, setup, and pack-down</li>
            <li>Friendly attendant to keep the booth running smoothly</li>
            <li>Unlimited sessions during your hire window</li>
            <li>Instant prints and digital copies for every guest</li>
            <li>Custom templates that match your event style</li>
            <li>Props and styling to enhance the experience</li>
          </ul>
          <p style={{ marginTop: 22 }}>
            If you need a guestbook, extra hours, or a custom backdrop, we can tailor your package to
            match the venue layout and timeline. Our team will walk you through the options so you book
            the right package without paying for extras you don’t need.
          </p>
          <h3>How to Choose the Right Package</h3>
          <p>
            Start with your guest count and event length. Smaller celebrations often fit a 2-hour option,
            while weddings and corporate functions typically benefit from 3–4 hours to cover the peak
            moments. If you’re planning speeches, dinner service, or multiple segments, a longer hire
            ensures guests always have access to the booth.
          </p>
          <p>
            For weekends and peak seasons, we recommend securing your package early so you can lock in
            your preferred time slot. If you’re unsure, we’ll help you choose the most cost-effective
            option based on your event schedule and venue layout.
          </p>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="rd-sec rd-sec--soft">
        <div className="rd-wrap rd-reveal">
          <div className="rd-cta">
            <div className="rd-glow" aria-hidden="true" />
            <h2>Found your package?</h2>
            <p>Send a quick quote request and we'll confirm availability for your date — usually same day.</p>
            <a className="rd-btn rd-btn-p" href={QUICK_QUOTE_URL}>Get a quick quote →</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackagesPage;
