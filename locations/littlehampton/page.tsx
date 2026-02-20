import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Flooring in Littlehampton | Greenfields Flooring",
  description: "Premium carpet, vinyl, laminate and LVT flooring supplied and fitted in Littlehampton. Visit our showroom near you."
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">

          <h1 className="text-4xl font-semibold">
            Flooring in Littlehampton
          </h1>

          <p className="mt-4 text-white/70">
            Greenfields Flooring supplies and fits premium flooring in Littlehampton.
            Visit our showroom in Lancing or request a free estimate.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card hover-lift">
              Carpet flooring in Littlehampton
            </div>
            <div className="card hover-lift">
              LVT flooring in Littlehampton
            </div>
            <div className="card hover-lift">
              Vinyl flooring in Littlehampton
            </div>
            <div className="card hover-lift">
              Wood flooring in Littlehampton
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
