export function StructuredDataElite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FlooringStore",
    "@id": "https://www.greenfields-flooring.co.uk/#business",
    name: "Greenfields Flooring",
    url: "https://www.greenfields-flooring.co.uk",
    telephone: "+441903763687",
    image: "https://www.greenfields-flooring.co.uk/og-image.jpg",
    logo: "https://www.greenfields-flooring.co.uk/logo.png",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "76 Manor Road",
      addressLocality: "Lancing",
      addressRegion: "West Sussex",
      postalCode: "BN15 0HD",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.842,
      longitude: -0.322
    },
    areaServed: [
      { "@type": "City", name: "Lancing" },
      { "@type": "City", name: "Worthing" },
      { "@type": "City", name: "Shoreham-by-Sea" },
      { "@type": "City", name: "Brighton" },
      { "@type": "AdministrativeArea", name: "West Sussex" }
    ],
    sameAs: [
      "https://www.facebook.com/greenfieldsflooring",
      "https://www.instagram.com/greenfields_flooring_lancing/"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "101"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
