// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, pathname, image }) => {
  const baseUrl = "https://www.photoboothwithshan.com.au";
  const url = `${baseUrl}${pathname || ""}`;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={`${baseUrl}${image}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${baseUrl}${image}`} />}
    </Helmet>
  );
};

export default SEO;
