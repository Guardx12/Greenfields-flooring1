import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WavyText } from "@/components/WavyText";

const services = [
  { href: "/services/carpet", title: "Carpet Flooring" },
  { href: "/services/lvt", title: "LVT Flooring" },
  { href: "/services/vinyl", title: "Vinyl Flooring" },
];

export const metadata = {
  title: "Flooring Services in Lancing",
  description: "Carpets, LVT and vinyl flooring supplied and fitted in Lancing and surrounding areas.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">
          <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <WavyText text="Services" />
          </h1>
          <p className="mt-4 text-white/70">
            Supplied and fitted with expert preparation and a tidy finish.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <a key={s.href} href={s.href} className="card hover-lift">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-white/70">Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
