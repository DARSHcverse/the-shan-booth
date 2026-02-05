import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const PBSeoPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1000); // 1 second delay before redirect
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {/* SEO + Meta Tags */}
      <Head>
        <title>Photobooth Hire Melbourne | Photo Booth Hire Melbourne | The Shan Booth</title>
        <meta
          name="description"
          content="Affordable photobooth hire Melbourne with unlimited prints, custom backdrops, fun props, instant pendrive copies & friendly attendants. Weddings, graduations, corporate events & more."
        />
        <meta
          name="keywords"
          content="photobooth hire Melbourne, photo booth hire Melbourne, wedding photobooth Melbourne, corporate event photo booth Melbourne, graduation photo booth hire, photobooth hire Clayton, photobooth hire Tarneit"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/pbseopage" />

        {/* Open Graph */}
        <meta property="og:title" content="Photobooth Hire Melbourne | The Shan Booth" />
        <meta
          property="og:description"
          content="Fun, affordable & stylish photobooth hire in Melbourne. Unlimited prints, props & digital sharing for weddings, graduations, corporate events & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.photoboothwithshan.com.au/pbseopage" />
        <meta property="og:image" content="/images/photobooth.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Photobooth Hire Melbourne | The Shan Booth" />
        <meta
          name="twitter:description"
          content="Hire the best photo booth in Melbourne – unlimited prints, props, custom backdrops & instant pendrive. Weddings, corporate & graduations."
        />
        <meta name="twitter:image" content="/images/photobooth.webp" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Shan Booth",
            "image": "/images/photobooth.webp",
            "url": "https://www.photoboothwithshan.com.au",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "description": "Affordable photobooth hire Melbourne with unlimited prints, props, custom backdrops and instant pendrive copies. Serving Clayton, Tarneit & Melbourne metro.",
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/"
            ]
          }
          `}
        </script>
      </Head>

      {/* Visible SEO Content (before redirect) */}
      <div className="seo-content">
        <h1>Photobooth Hire Melbourne</h1>
        <p>
          Welcome to <strong>The Shan Booth</strong> – the trusted choice for 
          <strong> photobooth hire Melbourne </strong>. We provide affordable, 
          fun and professional photo booth services for weddings, graduations, 
          corporate events, end-of-year parties, and more.
        </p>

        <h2>Why Choose Our Melbourne Photobooths?</h2>
        <ul>
          <li>Affordable packages for all event sizes</li>
          <li>Unlimited high-quality prints for your guests</li>
          <li>Props and custom backdrops to match your theme</li>
          <li>Instant digital pendrive copies of all photos</li>
          <li>Friendly attendants to keep things smooth & fun</li>
        </ul>

        <h2>Areas We Service</h2>
        <p>
          We proudly offer <strong>photo booth hire</strong> across Melbourne, 
          including <strong>Clayton</strong>, <strong>Tarneit</strong>, and surrounding suburbs.
        </p>

        <h2>Book Your Photobooth Today</h2>
        <p>
          Make your special day unforgettable with <strong>The Shan Booth</strong>. 
          Click below to return to our homepage and secure your booking now.
        </p>

        <a href="https://www.photoboothwithshan.com.au">Go to Homepage</a>
      </div>
    </>
  );
};

export default PBSeoPage;
