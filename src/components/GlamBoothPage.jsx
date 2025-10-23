import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import glam from '../images/glam.png';

const GlamBoothPage = () => (
  <>
    <Helmet>
      <title>Glam Photo Booth Hire Melbourne | Hollywood-Style AI Filter Booth</title>
      <meta
        name="description"
        content="Glam Photo Booth Hire in Melbourne featuring AI glam filters, Canon R100 camera, and Surface Pro setup. Capture flawless, high-end portraits with luxury style."
      />
      <link rel="canonical" href="https://www.photoboothwithshan.com.au/glam-booth" />
      <meta property="og:title" content="Glam Photo Booth Hire Melbourne | Hollywood Experience" />
      <meta
        property="og:description"
        content="Add luxury and style to your event with our Glam Booth. AI filter magic, pro lighting, and mirrorless camera clarity — perfect for weddings and red carpet events."
      />
      <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/glam.png" />
    </Helmet>

    <main className="booth-page section-padding">
      <div className="container">
        <div className="booth-wrapper">
          <h1 className="page-heading">GLAM PHOTO BOOTH HIRE MELBOURNE</h1>
          <img src={glam} alt="Glam PhotoBooth Melbourne" className="booth-img" />
          <p className="intro-text">
            Step into the spotlight with our <strong>Glam Booth</strong> — where luxury meets technology!
            Known for its signature <strong>black-and-white glam filter</strong> and <strong>AI-powered beauty effects</strong>,
            it’s perfect for <strong>weddings</strong>, <strong>engagements</strong>, and <strong>corporate brand events</strong>.
          </p>

          <div className="booth-details">
            <h2>The Glam Experience</h2>
            <ul>
              <li>💻 Powered by <strong>Microsoft Surface Pro</strong> for seamless touch interaction.</li>
              <li>📷 Captured through a <strong>Canon R100 Mirrorless Camera</strong> for stunning clarity.</li>
              <li>✨ Features an exclusive <strong>AI Glam Filter</strong> that smooths skin and enhances every photo.</li>
              <li>🌟 Studio lighting and soft flash for flawless portraits worthy of a magazine cover.</li>
            </ul>
          </div>
        </div>

        <p className="seo-text">
          Searching for the best <strong>Glam Photo Booth Hire Melbourne</strong> has to offer? You’ve found it.
          Perfect for <strong>luxury weddings</strong>, <strong>fashion nights</strong>, and <strong>corporate galas</strong> —
          this booth transforms every snapshot into a red-carpet moment.
        </p>

        <div className="cta-section">
          <h2>Book the Glam Experience</h2>
          <p>Let our <strong>AI Glam Photo Booth</strong> make your next event shine brighter than ever.</p>
          <a href="/quickquote" className="cta-button">Quick Quote Now</a>
        </div>
      </div>
    </main>
  </>
);

export default GlamBoothPage;
