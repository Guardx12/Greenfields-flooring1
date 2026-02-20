import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Flooring in Worthing | Greenfields Flooring",
  description: "Premium carpet, vinyl, laminate and LVT flooring supplied and fitted in Worthing. Visit our showroom near you."
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">

          <h1 className="text-4xl font-semibold">
            Flooring in Worthing
          </h1>

          <p className="mt-4 text-white/70">
            Greenfields Flooring supplies and fits premium flooring in Worthing.
            Visit our showroom in Lancing or request a free estimate.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card hover-lift">
              Carpet flooring in Worthing
            </div>
            <div className="card hover-lift">
              LVT flooring in Worthing
            </div>
            <div className="card hover-lift">
              Vinyl flooring in Worthing
            </div>
            <div className="card hover-lift">
              Wood flooring in Worthing
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
