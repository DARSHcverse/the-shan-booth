import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import openBoothVideo from '../images/enclosedVID.mp4';

const EnclosedBoothPage = () => (
  <>
    <Helmet>
      <title>Enclosed Photo Booth Hire Melbourne | Private & Fun Event Booth</title>
      <meta
        name="description"
        content="Enclosed Photo Booth Hire in Melbourne with Canon R100 mirrorless camera and Surface Pro setup. Step into an enclosed, bouncy-castle-style booth and enjoy private fun shots."
      />
      <link rel="canonical" href="https://www.photoboothwithshan.com.au/enclosed-booth" />
      <meta property="og:title" content="Enclosed Photo Booth Hire Melbourne | Private Event Fun" />
      <meta
        property="og:description"
        content="Enjoy private, exciting photos with our Enclosed Booth setup — feels like a bouncy castle but with pro camera gear and vibrant lighting!"
      />
      <meta property="og:image" content="https://www.photoboothwithshan.com.au/images/enclosed.jpeg" />
    </Helmet>

    <main className="booth-page section-padding">
      <div className="container">
        <div className="booth-wrapper">
          <h1 className="page-heading">ENCLOSED PHOTO BOOTH HIRE MELBOURNE</h1>
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
          <p className="intro-text">
            Step inside our <strong>Enclosed Booth</strong> — where the excitement happens in private!
            Designed to feel like a fun <strong>bouncy castle</strong>, this booth gives guests an awesome space
            to laugh, pose, and let loose while capturing unforgettable moments.
          </p>

          <div className="booth-details">
            <h2>Inside the Enclosed Booth</h2>
            <ul>
              <li>💻 Runs on the reliable <strong>Microsoft Surface Pro</strong> for flawless performance.</li>
              <li>📸 Uses the same <strong>Canon R100 Mirrorless Camera</strong> for ultra-clear images.</li>
              <li>💡 Perfect lighting setup with soft flash for even skin tones and vivid colors.</li>
              <li>🎪 Unique enclosed structure feels cozy, private, and full of fun energy!</li>
            </ul>
          </div>
        </div>

        <p className="seo-text">
          Our <strong>Enclosed Photo Booth Hire</strong> gives your Melbourne event that private, nostalgic vibe. 
          Ideal for <strong>weddings</strong>, <strong>school formals</strong>, <strong>birthday parties</strong>, 
          or <strong>corporate celebrations</strong>. Step in, smile, and create magical memories!
        </p>

        <div className="cta-section">
          <h2>Make Your Event Extra Special</h2>
          <p>Book your <strong>Enclosed Photo Booth</strong> and create a cozy, laughter-filled photo space!</p>
          <a href="/quickquote" className="cta-button">Quick Quote Now</a>
        </div>
      </div>
    </main>
  </>
);

export default EnclosedBoothPage;
