import React from 'react';
// import { Helmet } from 'react-helmet';
import '../App.css';
import photobooth from '../images/boothimg6.webp';
import glam from '../images/glam.png';
import enclosure from '../images/enclosed.jpeg';
import SEO from './SEO.jsx';


const PhotoboothsPage = () => (
  <>
    <SEO>
      title= "Event Photobooths | Unforgettable Event Experiences"
      description= "Explore our photobooths designed to bring joy and unforgettable memories to weddings, parties, and corporate events. Open, Glam, and Enclosed Booth options available."
      pathname= "/photobooths"
    </SEO>

    <main className="main-content section-padding">
      <div className="container">
        <h1 className="page-heading">Event Photobooths</h1>
        <div className="photobooth-list">
          <div className="card">
            <img src={photobooth} alt="Open Booth" className="card-img"/>
            <h2 className="card-title">Open Booth</h2>
            <p className="card-text">A sleek and modern setup that fits into any space, the Open Booth offers flexibility and fun for events of all sizes. With no walls or enclosures, it creates a social, interactive experience that encourages group shots and guest engagement. Perfect for weddings, parties, and corporate events, it also allows for customizable backdrops to match your event’s theme.</p>
          </div>
          <div className="card">
            <img src={glam} alt="Glam Booth" className="card-img"/>
            <h2 className="card-title">Glam Booth</h2>
            <p className="card-text">Add a touch of luxury and Hollywood-style flair with the Glam Booth. Known for its signature black-and-white, high-contrast, skin-smoothing effect, this booth delivers studio-quality, flawless portraits. It's a favorite for upscale events, weddings, and brand activations. Think red carpet vibes with a modern twist.</p>
          </div>
          <div className="card">
            <img src={enclosure} alt="Enclosed Booth" className="card-img"/>
            <h2 className="card-title">Enclosed Booth</h2>
            <p className="card-text">The Enclosed Booth offers a classic photo booth experience with added privacy and charm. Guests step inside for a more intimate and nostalgic vibe, making it perfect for smaller groups or themed events. With curtains or sleek walls, it enhances the excitement and surprise of each snapshot—ideal for vintage-style weddings, proms, and private parties.</p>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default PhotoboothsPage;
