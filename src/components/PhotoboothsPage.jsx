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
        <title>Event Photobooths | Unforgettable Event Experiences</title>
        <meta
          name="description"
          content="Explore our photobooths designed to bring joy and unforgettable memories to weddings, parties, and corporate events. Open, Glam, and Enclosed Booth options available."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/photobooths" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Event Photobooths | Unforgettable Event Experiences" />
        <meta
          property="og:description"
          content="Explore our photobooths designed to bring joy and unforgettable memories to weddings, parties, and corporate events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/photobooths" />
        <meta property="og:image" content="/images/boothimg6.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Event Photobooths | Unforgettable Event Experiences" />
        <meta
          name="twitter:description"
          content="Explore our photobooths designed to bring joy and unforgettable memories to weddings, parties, and corporate events."
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
        </div>
      </main>

    </>
  );
};

export default PhotoboothsPage;
