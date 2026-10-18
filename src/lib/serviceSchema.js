// Shared schema.org "Service" JSON-LD for booth / landing pages.
// Use Service (not Event): we sell a hire service, we don't host a public event,
// and Event rich results expire (and break policy) once endDate passes.
const SITE_URL = "https://www.photoboothwithshan.com.au";

const PROVIDER = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "The Shan Booth",
  url: SITE_URL,
  telephone: "+61 414 521 425",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tarneit",
    addressRegion: "VIC",
    postalCode: "3029",
    addressCountry: "AU",
  },
};

/**
 * @param {object} o
 * @param {string} o.name
 * @param {string} o.serviceType
 * @param {string} o.description
 * @param {string} o.path        page path, e.g. "/glam-booth"
 * @param {string} [o.image]     absolute or site-relative image URL
 * @param {string[]} [o.areas]   cities served
 * @param {number} [o.lowPrice]  lowest package price (AUD)
 * @param {number} [o.highPrice] highest package price (AUD)
 */
export function serviceSchema({
  name,
  serviceType,
  description,
  path,
  image,
  areas = ["Melbourne", "Geelong", "Tarneit"],
  lowPrice = 390,
  highPrice,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    ...(image ? { image: image.startsWith("http") ? image : `${SITE_URL}${image}` } : {}),
    provider: PROVIDER,
    areaServed: areas.map((city) => ({ "@type": "City", name: city })),
    offers: highPrice
      ? {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          lowPrice: String(lowPrice),
          highPrice: String(highPrice),
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/quickquote`,
        }
      : {
          "@type": "Offer",
          priceCurrency: "AUD",
          price: String(lowPrice),
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/quickquote`,
        },
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
