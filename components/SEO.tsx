import { site } from "@/components/site-data";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: ["https://www.greenfieldsflooring.co.uk/"],
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.town,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    sameAs: [site.socials.facebook, site.socials.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
