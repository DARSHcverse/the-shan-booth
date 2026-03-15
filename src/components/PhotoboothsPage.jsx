import React from 'react';
import Head from "next/head";
const photobooth = '/images/boothimg6.webp';
const glam = '/images/glam.png';
const enclosure = '/images/enclosed.jpeg';
import { useRouter } from 'next/router';

const PhotoboothsPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Photo Booth Options for Events | The Shan Booth</title>
        <meta
          name="description"
          content="Compare open-air, glam, and enclosed photo booths from The Shan Booth. Find the right style for weddings, birthdays, and corporate events."
          key="description"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photobooths" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Photo Booth Options for Events | The Shan Booth" />
        <meta
          property="og:description"
          content="Compare open-air, glam, and enclosed photo booths from The Shan Booth. Choose the right style for your event."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photobooths" />
        <meta property="og:image" content="/images/boothimg6.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photo Booth Options for Events | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Compare open-air, glam, and enclosed photo booths from The Shan Booth. Find the perfect fit for your event."
        />
        <meta name="twitter:image" content="/images/boothimg6.webp" />
      </Head>

      <main className="main-content section-padding">
        <div className="container">
          <h1 className="page-heading">
            PHOTOBOOTH HIRE <br /> VARIOUS EVENT EXPERIENCES
          </h1>

          <div className="photobooth-list event-card-grid">
            <article className="event-card" onClick={() => router.push('/open-booth')}>
              <img src={photobooth} alt="Open Booth" className="event-card-img" />
              <div className="event-card-body">
                <h2 className="event-card-title">Open Booth</h2>
                <p className="event-card-text">
                  A sleek and modern setup that fits into any space, the Open Booth offers flexibility
                  and fun for events of all sizes. With no walls or enclosures, it creates a social,
                  interactive experience that encourages group shots and guest engagement.
                </p>
              </div>
            </article>

            <article className="event-card" onClick={() => router.push('/glam-booth')}>
              <img src={glam} alt="Glam Booth" className="event-card-img" />
              <div className="event-card-body">
                <h2 className="event-card-title">Glam Booth</h2>
                <p className="event-card-text">
                  Add a touch of luxury and Hollywood-style flair with the Glam Booth. Known for its
                  signature B&W glam effect, this booth delivers flawless portraits for weddings,
                  parties and upscale events.
                </p>
              </div>
            </article>

            <article className="event-card" onClick={() => router.push('/enclosed-booth')}>
              <img src={enclosure} alt="Enclosed Booth" className="event-card-img" />
              <div className="event-card-body">
                <h2 className="event-card-title">Enclosed Booth</h2>
                <p className="event-card-text">
                  The Enclosed Booth offers the classic photobooth feel with privacy and charm. Perfect
                  for vintage weddings, school formals and intimate party settings.
                </p>
              </div>
            </article>
          </div>

          <div className="photobooth-section">
            <h2>Compare Our Photo Booth Styles</h2>
            <p>
              Each booth style creates a different experience for your guests. Open-air booths are
              social and flexible, giving you space for group shots and creative backdrops. Glam booths
              deliver a high-end look with flattering lighting and a sleek, studio-style finish. Enclosed
              booths are a nostalgic classic, ideal for guests who want a little privacy while they laugh,
              pose, and grab a strip.
            </p>
            <p>
              If you’re unsure, think about your venue size, guest count, and event vibe. Our team can
              help you match the right setup to your timeline, layout, and aesthetic so your booth feels
              like a natural part of the celebration rather than an add-on.
            </p>
          </div>

          <div className="photobooth-section">
            <h2>What’s Included With Every Booth Hire</h2>
            <ul className="feature-list">
              <li>Professional camera and lighting for crisp, flattering photos</li>
              <li>Unlimited sessions during your hire window</li>
              <li>Instant prints plus digital copies for easy sharing</li>
              <li>Fun props and styling to suit your event theme</li>
              <li>Friendly attendant to manage the booth and guest flow</li>
              <li>Setup and pack-down handled by our team</li>
            </ul>
            <p>
              We focus on reliability and quality, so your booth runs smoothly from the first guest to the
              final photo. Want a custom template, branded overlay, or a guestbook station? Those can be
              added to any package.
            </p>
          </div>

          <div className="photobooth-section">
            <h2>How to Choose the Right Booth</h2>
            <ul className="feature-list">
              <li>Space and layout: open-air booths need a little more room for group shots.</li>
              <li>Event tone: glam booths suit formal weddings and premium celebrations.</li>
              <li>Guest comfort: enclosed booths are great for shy guests or intimate venues.</li>
              <li>Branding: open-air setups work well for logos and sponsor backdrops.</li>
              <li>Timeline: longer events benefit from packages with extra hours.</li>
            </ul>
            <p>
              If you’re not sure which style fits best, explore our <a href="/packages">packages</a> or reach
              out through the <a href="/quickquote">Quick Quote</a> form for tailored advice.
            </p>
          </div>

          <div className="photobooth-section">
            <h2>Popular Event Types</h2>
            <ul className="areas-list">
              <li>Weddings, engagements, and anniversary celebrations</li>
              <li>Birthdays, milestone parties, and family gatherings</li>
              <li>Corporate events, product launches, and brand activations</li>
              <li>School formals, graduations, and university events</li>
              <li>Festivals, community events, and charity fundraisers</li>
            </ul>
          </div>

          <div className="photobooth-section">
            <h2>Frequently Asked Questions</h2>
            <h3>How much space do we need?</h3>
            <p>
              Most setups work best with a clear 3m x 3m area, plus room for a short queue. We’ll confirm
              details once you share your venue layout.
            </p>
            <h3>Can we customise the prints?</h3>
            <p>
              Yes. We can add names, dates, logos, and colours to the print template so every photo matches
              your event theme.
            </p>
            <h3>Do you service Geelong and surrounding areas?</h3>
            <p>
              Absolutely. We cover Melbourne, Geelong, and regional Victoria. Let us know your location and
              we’ll confirm travel details.
            </p>
          </div>

          <div className="cta-center">
            <a href="/packages" className="cta-btn">View Packages</a>
            <a href="/quickquote" className="cta-btn">Get a Quick Quote</a>
          </div>
        </div>
      </main>

    </>
  );
};

export default PhotoboothsPage;
