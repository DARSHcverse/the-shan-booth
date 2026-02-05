import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';

const eventsData = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'A photobooth is the perfect way to capture the magic of your special day. Our booths provide endless entertainment, allowing guests to take fun photos with props and create lasting memories. Complement your wedding’s theme with a digital gallery and a physical guestbook filled with cherished moments.',
    offers: [
      'Custom photo templates to match your wedding theme',
      'Elegant backdrops and a wide selection of fun props',
      'A physical guestbook filled with printed photos and heartfelt messages',
      'A digital gallery of all photos for easy sharing',
    ],
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    description: 'From milestone birthdays to casual celebrations, our photobooths are the ultimate party starter. We customize the experience for any age group, with vibrant backdrops and fun props that match your theme. Guests leave with memorable keepsakes to treasure long after the party ends.',
    offers: [
      'Customizable experience tailored for any age group',
      'Themed backdrops and a huge variety of fun props',
      'Physical photo keepsakes for guests to take home',
      'Instant digital photo sharing',
    ],
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Impress clients and energize your team with a professional and engaging photobooth experience. Whether it’s a product launch, holiday party, or team-building event, our booths offer branding opportunities and high-quality, shareable content that boosts engagement.',
    offers: [
      'Branding opportunities with company logos on all photos and templates',
      'Custom-themed backdrops to fit your corporate identity',
      'Shareable social media content for increased brand visibility',
      'High-quality photos perfect for corporate newsletters and websites',
    ],
  },
  {
    id: 'graduation',
    title: 'University Open Days',
    description: 'Attract prospective students and create buzz with an interactive photobooth. Students can take fun photos with friends, building community spirit while sharing moments online to boost your university’s presence.',
    offers: [
      'An interactive and engaging activity to attract students',
      'Customizable backdrops with university branding',
      'Instant social media sharing to boost your online presence',
      'High-quality photos for a vibrant digital memory of the event',
    ],
  },
  {
    id: 'graduation',
    title: 'School Graduations',
    description: 'Celebrate graduates’ achievements with a photobooth that captures their excitement and pride. Our themed setups with caps, gowns, and school-colored backdrops create professional yet fun keepsakes for students and families.',
    offers: [
      'Professional-quality photos for graduates and their families',
      'Customizable backdrops with school colors and logos',
      'A range of graduation-themed props, including caps and gowns',
      'Instant prints and digital downloads for a memorable keepsake',
    ],
  },
];

const EventsPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Event Photobooth Hire for Weddings, Parties & Corporate Events | The Shan Booth</title>
        <meta name="description" content="Hire photobooths for weddings, birthdays, school graduations, corporate events & university open days in Melbourne. The Shan Booth creates unforgettable memories with custom templates, themed props & instant prints."/>
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/events"/>

      {/* Open Graph */}
      <meta property="og:title" content="Event Photobooth Hire in Melbourne | The Shan Booth"/>
      <meta property="og:description" content="Hire photobooths for weddings, birthdays, corporate events, school graduations & university open days in Melbourne. Custom templates, themed props & instant prints."/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.photoboothwithshan.com.au/events"/>
      <meta property="og:image" content="/images/events.png"/>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Event Photobooth Hire in Melbourne | The Shan Booth"/>
      <meta name="twitter:description" content="Hire photobooths for weddings, birthdays, corporate events, school graduations & university open days in Melbourne."/>
      <meta name="twitter:image" content="/images/glam.png"/>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Event Photobooth Hire",
            "description": "Photo booth hire for weddings, birthdays, corporate events, school graduations, and university open days in Melbourne.",
            "provider": {
              "@type": "Organization",
              "name": "The Shan Booth",
              "url": "https://www.photoboothwithshan.com.au"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Melbourne, Australia"
            },
            "serviceType": "Photobooth Hire"
          }
        `}
      </script>
    </Head>
    

    <main className="main-content section-padding">
      <div className="container">
        <h1 className="page-heading">PHOTOBOOTH HIRE <br /> EVENTS WE COVER</h1>

        <p className="events-intro">
          We are passionate about bringing joy and unforgettable memories to a wide variety of events.
          No matter the occasion, we have a photobooth solution to match, providing a fun and interactive
          experience for all your guests.
        </p>

        <p className="events-intro" style={{ marginTop: '1rem' }}>
          Our <a href="/">photo booth hire Melbourne</a> service is versatile enough to enhance any type
          of celebration. From intimate gatherings to large-scale corporate functions, we adapt our
          approach to match the unique atmosphere and requirements of each event.
        </p>

        <p className="events-intro" style={{ marginTop: '1rem' }}>
          When you choose our <a href="/">photo booth hire Melbourne</a> for your event, you're selecting
          a service refined through years of experience across diverse celebrations.
        </p>

        {/* NEW Modern Cards */}
        <div className="event-type-grid">
          {eventsData.map((event, index) => (
            <article
              key={index}
              className="event-type-card"
              onClick={() => router.push(`/${event.id}`)}
            >
              <div className="event-type-body">
                <h2 className="event-type-title">{event.title}</h2>
                <p className="event-type-text">{event.description}</p>

                <ul className="event-type-list">
                  {event.offers.map((offer, idx) => (
                    <li key={idx}>{offer}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>


    {/* Additional Content Section */}
    <section className="seo-section">
      <div className="container">
        <h2 className="section-title">Comprehensive Photo Booth Hire Melbourne for Every Event Type</h2>
        <p>
          Our <a href="/">photo booth hire Melbourne</a> service extends beyond just providing equipment – we create experiences that enhance the atmosphere of your event and leave lasting impressions on your guests. Whether you're planning a formal corporate gala, a casual birthday celebration, or an elegant wedding reception, we have the expertise and resources to deliver a photo booth experience that perfectly matches your vision.
        </p>
        <p>
          The versatility of our <a href="/">photo booth hire Melbourne</a> service stems from our dedication to adaptability and personalization. We collaborate extensively with event organizers, hosts, and planning teams to grasp the unique requirements and objectives of each occasion. Through this partnership model, we guarantee that all elements of the photo booth setup – including backdrop designs, prop collections, and template styles – integrate seamlessly with your event's aesthetic and elevate the overall attendee experience.
        </p>
        <p>
          Partnering with The Shan Booth for your <a href="/">photo booth hire Melbourne</a> means working with a company that prioritizes your event's success. We combine extensive industry experience, state-of-the-art equipment, and genuine passion for creating memorable moments at every celebration. Get in touch with us to learn more about how we can transform your upcoming event into an extraordinary experience.
        </p>
      </div>
    </section>
  </>
);
}
export default EventsPage;
