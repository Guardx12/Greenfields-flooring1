export function FAQ() {
  const faqs = [
    { q: "Do you supply and fit flooring?", a: "Yes, we supply and professionally fit carpets, vinyl, laminate, wood and LVT flooring." },
    { q: "Can I visit your showroom?", a: "Yes, our Lancing showroom is open during business hours." },
    { q: "Do you offer free estimates?", a: "Yes, we provide free estimates and honest advice." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
        <div className="grid gap-4">
          {faqs.map(f => (
            <div key={f.q} className="card hover-lift">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
