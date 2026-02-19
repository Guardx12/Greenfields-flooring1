type Crumb = { name: string; url: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <nav className="text-sm text-white/60 mb-4" aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={item.url}>
            {i > 0 && " / "}
            <a href={item.url} className="hover:text-white">
              {item.name}
            </a>
          </span>
        ))}
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
