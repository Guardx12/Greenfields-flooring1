export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Greenfields Flooring",
    image: "https://www.greenfields-flooring.co.uk/og-image.jpg",
    url: "https://www.greenfields-flooring.co.uk",
    telephone: "+441903763687",
    address: {
      "@type": "PostalAddress",
      streetAddress: "76 Manor Road",
      addressLocality: "Lancing",
      postalCode: "BN15 0HD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.842",
      longitude: "-0.322",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:30", closes: "16:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:30", closes: "16:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:30", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:30", closes: "16:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:30", closes: "16:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    priceRange: "££",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
