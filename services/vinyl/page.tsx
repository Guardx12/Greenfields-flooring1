import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "Vinyl Flooring in Lancing",
  description: "Modern vinyl flooring solutions supplied and fitted in Lancing.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="pt-28">
        <div className="container-pad max-w-3xl mx-auto">

          <Breadcrumbs items={[
            { name: "Home", url: "/" },
            { name: "Vinyl Flooring", url: "/services/vinyl" }
          ]} />

          <h1 className="text-4xl font-semibold">Vinyl Flooring in Lancing</h1>

          <p className="mt-4 text-white/70">
            Modern vinyl flooring solutions. Expert supply and fitting available locally.
          </p>

          <FAQ />

        </div>
      </section>
      <Footer />
    </main>
  );
}
