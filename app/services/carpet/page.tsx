import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "Carpet Flooring in Lancing",
  description: "Premium carpet flooring options supplied and fitted in Lancing.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">

          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Carpet Flooring", url: "/services/carpet" }
          ]} />

          <h1 className="text-4xl font-semibold">Carpet Flooring in Lancing</h1>

          <p className="mt-4 text-white/70">
            Premium carpet flooring options. Expert supply and fitting available locally.
          </p>

          <FAQ />

        </div>
      </section>
      <Footer />
    </main>
  );
}
