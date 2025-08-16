import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';

const eventsData = [
  {
    title: 'Weddings',
    description:
      'A photobooth is the perfect way to capture the magic of your special day. Our booths provide endless entertainment, allowing guests to take fun photos with props and create lasting memories. Complement your wedding’s theme with a digital gallery and a physical guestbook filled with cherished moments.',
    offers: [
      'Custom photo templates to match your wedding theme',
      'Elegant backdrops and a wide selection of fun props',
      'A physical guestbook filled with printed photos and heartfelt messages',
      'A digital gallery of all photos for easy sharing',
    ],
  },
  {
    title: 'Birthday Parties',
    description:
      'From milestone birthdays to casual celebrations, our photobooths are the ultimate party starter. We customize the experience for any age group, with vibrant backdrops and fun props that match your theme. Guests leave with memorable keepsakes to treasure long after the party ends.',
    offers: [
      'Customizable experience tailored for any age group',
      'Themed backdrops and a huge variety of fun props',
      'Physical photo keepsakes for guests to take home',
      'Instant digital photo sharing',
    ],
  },
  {
    title: 'Corporate Events',
    description:
      'Impress clients and energize your team with a professional and engaging photobooth experience. Whether it’s a product launch, holiday party, or team-building event, our booths offer branding opportunities and high-quality, shareable content that boosts engagement.',
    offers: [
      'Branding opportunities with company logos on all photos and templates',
      'Custom-themed backdrops to fit your corporate identity',
      'Shareable social media content for increased brand visibility',
      'High-quality photos perfect for corporate newsletters and websites',
    ],
  },
  {
    title: 'University Open Days',
    description:
      'Attract prospective students and create buzz with an interactive photobooth. Students can take fun photos with friends, building community spirit while sharing moments online to boost your university’s presence.',
    offers: [
      'An interactive and engaging activity to attract students',
      'Customizable backdrops with university branding',
      'Instant social media sharing to boost your online presence',
      'High-quality photos for a vibrant digital memory of the event',
    ],
  },
  {
    title: 'School Graduations',
    description:
      'Celebrate graduates’ achievements with a photobooth that captures their excitement and pride. Our themed setups with caps, gowns, and school-colored backdrops create professional yet fun keepsakes for students and families.',
    offers: [
      'Professional-quality photos for graduates and their families',
      'Customizable backdrops with school colors and logos',
      'A range of graduation-themed props, including caps and gowns',
      'Instant prints and digital downloads for a memorable keepsake',
    ],
  },
];

const EventsPage = () => (
  <main className="main-content section-padding">
    {/* SEO Meta Tags */}
    <Helmet>
      <title>Photo Booth Hire for Weddings, Parties & Events in Melbourne | The Shan Booth</title>
      <meta
        name="description"
        content="Discover photo booth hire for weddings, birthdays, school graduations, corporate events & more in Melbourne. The Shan Booth creates unforgettable memories with custom templates, themed props & instant prints."
      />
      <link rel="canonical" href="https://www.photoboothwithshan.com.au/events" />
    </Helmet>

    <div className="container">
      <h2 className="page-heading">Events We Cover</h2>
      <p className="events-intro">
        We are passionate about bringing joy and unforgettable memories to a wide variety of events.
        No matter the occasion, we have a photobooth solution to match, providing a fun and interactive
        experience for all your guests.
      </p>

      <div className="card-grid">
        {eventsData.map((event, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{event.title}</h3>
            <p className="card-text">{event.description}</p>
            <ul className="package-features">
              {event.offers.map((offer, idx) => (
                <li key={idx}>{offer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default EventsPage;
