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
      <meta property="og:url" content="https://www.photoboothwithshan.com.au/glam-booth" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Glam Photo Booth Hire Melbourne" />
      <meta
        name="twitter:description"
        content="Luxury Glam Photo Booth hire in Melbourne with AI beauty filters and professional lighting."
      />
      <meta
        name="twitter:image"
        content="https://www.photoboothwithshan.com.au/images/glam.png"
      />
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
          this booth transforms every snapshot into a red-carpet moment.<br />

          <br /><strong>Why Choose a Glam Booth for Your Melbourne Event?</strong>
          
          <br />While standard photo booths are great for props and high-energy fun, the Glam Booth is designed for sophistication. 
          This specific setup is highly sought after for Melbourne weddings and black-tie events because it prioritizes portrait 
          quality above all else. By utilizing the Canon R100 Mirrorless system combined with studio-grade softbox lighting, 
          we create a light wrap that eliminates harsh shadows and highlights your guests' best features. 
          This isn't just a photo booth; it's a mobile professional portrait studio that brings a refined, editorial feel to your venue.

          <br />The secret to the "Hollywood Look" lies in our specialized AI post-processing. 
          As soon as the shutter clicks, our software applies a custom-tuned skin-smoothing filter. 
          This digital retouching works instantly to provide a flawless, high-fashion finish that guests are excited to share on social media. 
          Whether you prefer the timeless elegance of high-contrast black and white or the vibrant clarity of full color, our Glam Booth 
          setup ensures every person who steps in front of the lens feels like a celebrity. From the inner suburbs of Melbourne to the wineries 
          of the Mornington Peninsula, we bring this luxury experience directly to your doorstep, providing a memorable activity that doubles as 
          a high-end party favor.
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
