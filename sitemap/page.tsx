import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";

export default function SitemapPage() {
  const pages = [
    "/",
    "/about",
    "/gallery",
    "/contact",
    "/services/carpet",
    "/services/lvt",
    "/services/vinyl",
    "/locations/worthing",
    "/locations/shoreham-by-sea",
    "/locations/brighton",
    "/locations/littlehampton",
    "/locations/west-sussex"
  ];

  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold">Site map</h1>
          <div className="mt-6 grid gap-2">
            {pages.map(p => (
              <a key={p} href={p} className="hover:underline">{p}</a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
