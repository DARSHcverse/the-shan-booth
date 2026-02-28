import React from 'react';
import Head from "next/head";
const openBoothVideo = '/images/openboothvideo.mp4';

const OpenBoothPage = () => (
  <>
    <Head>
      <title>Open Photo Booth Hire Melbourne | Interactive & Modern Booths</title>
      <meta
        name="description"
        content="Open Photo Booth Hire in Melbourne for weddings, parties, and corporate events. Capture stunning photos with Canon R100 mirrorless camera and Surface Pro setup."
        key="description"
      />
      <link rel="canonical" href="https://www.photoboothwithshan.com.au/open-booth" />
      <meta property="og:title" content="Open Photo Booth Hire Melbourne | Modern Event Fun" />
      <meta
        property="og:description"
        content="Experience interactive photo booth fun with our Open Booth. Surface Pro + Canon R100 + pro flash lighting. Perfect for events that love energy and crowd engagement!"
      />
      <meta property="og:image" content="/images/boothimg6.webp" />
    </Head>

    <main className="booth-page section-padding">
      <div className="container">
        <h1 className="page-heading">OPEN PHOTO BOOTH HIRE MELBOURNE</h1>
        <p className="intro-text">
          Our <strong>Open Booth</strong> is the life of the party — sleek, social, and built to make your event unforgettable!
          Perfect for <strong>weddings</strong>, <strong>birthdays</strong>, <strong>corporate events</strong>, and <strong>brand activations</strong>.
        </p>
        <div className='booth-wrapper'>
        <div className="booth-media">
          <div className="video-frame">
            <video
              src={openBoothVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="booth-video"
            ></video>
          </div>
        </div>

        <div className="booth-details">
          <h2>Why Choose the Open Booth?</h2>
          <ul>
            <li>✅ Uses a <strong>Microsoft Surface Pro</strong> with the latest updates for smooth performance.</li>
            <li>📸 Equipped with a <strong>Canon R100 Mirrorless Camera</strong> for crystal-clear, studio-quality shots.</li>
            <li>💡 Professional-grade <strong>flash lighting</strong> ensures perfect brightness in any venue.</li>
            <li>🎉 Open-space setup encourages <strong>group fun</strong> and <strong>guest interaction</strong>.</li>
            <li>🎨 Fully customizable backdrops to match your event theme or brand activation.</li>
          </ul>
        </div>

        </div>
        <p className="seo-text">
          Looking for <strong>photo booth hire in Melbourne</strong>? Our <strong>Open Booth</strong> delivers unmatched
          energy, fun, and professional results for every occasion. Whether it’s a <strong>wedding photo booth</strong>,
          <strong>birthday party booth</strong>, or <strong>corporate photo experience</strong>, we make memories shine.
        </p>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Bring the Fun?</h2>
          <p>Book your <strong>Open Photo Booth</strong> today and let’s capture unforgettable memories!</p>
          <a href="/quickquote" className="cta-button">Quick Quote Now</a>
        </div>
      </div>
    </main>
  </>
);

export default OpenBoothPage;
