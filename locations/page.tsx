import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WavyText } from "@/components/WavyText";

const areas = [
  { href: "/locations/worthing", title: "Worthing" },
  { href: "/locations/shoreham-by-sea", title: "Shoreham-by-Sea" },
  { href: "/locations/brighton", title: "Brighton" },
  { href: "/locations/littlehampton", title: "Littlehampton" },
  { href: "/locations/west-sussex", title: "West Sussex" },
];

export const metadata = {
  title: "Areas We Cover | Greenfields Flooring",
  description: "Flooring supplied and fitted across Lancing, Worthing, Shoreham-by-Sea, Brighton, Littlehampton and West Sussex.",
};

export default function LocationsPage() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">
          <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Areas", url: "/locations" }]} />
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <WavyText text="Areas we cover" />
          </h1>
          <p className="mt-4 text-white/70">
            We’re based in Lancing and regularly supply and fit flooring across the surrounding area.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {areas.map((a) => (
              <a key={a.href} href={a.href} className="card hover-lift">
                <div className="font-semibold">Flooring in {a.title}</div>
                <div className="mt-2 text-sm text-white/70">View page →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
