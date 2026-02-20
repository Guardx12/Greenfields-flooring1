import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { site } from "@/components/site-data";
import { WavyText } from "@/components/WavyText";

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="pt-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              <WavyText text="About Greenfields Flooring" />
            </h1>
            <p className="mt-4 text-white/70">
              A family‑run flooring showroom in Lancing — generations of craftsmanship, honest advice, and expert fitting.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {site.proof.map((p) => (
              <div key={p.k} className="card hover-lift">
                <div className="text-2xl font-semibold text-gf-lime">{p.k}</div>
                <div className="mt-2 text-sm text-white/70">{p.v}</div>
              </div>
            ))}

            <div className="card hover-lift lg:col-span-2">
              <h2 className="text-2xl font-semibold">
                <WavyText text="Family‑run, pride in every finish" />
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Greenfields Flooring is a long‑standing local business in Lancing. With 65+ years of combined fitting
                experience across the family, we focus on doing things properly: the right prep, the right product for
                your space, and clean finishing details.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover-lift">
                  <div className="text-gf-lime font-semibold">Advice first</div>
                  <div className="mt-1 text-sm text-white/70">
                    We help you choose what fits your home, lifestyle and budget.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover-lift">
                  <div className="text-gf-lime font-semibold">Prep done right</div>
                  <div className="mt-1 text-sm text-white/70">
                    Uplift, latexing and subfloor prep for a flawless base.
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover-lift">
                  <div className="text-gf-lime font-semibold">Fit with pride</div>
                  <div className="mt-1 text-sm text-white/70">
                    Workmanship that lasts — and a tidy finish you’ll notice.
                  </div>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <h3 className="text-xl font-semibold">Visit the showroom</h3>
              <p className="mt-2 text-sm text-white/70">
                {site.address.line1}<br />
                {site.address.town} {site.address.postcode}
              </p>

              <div className="mt-6 hr" />

              <h3 className="mt-6 text-xl font-semibold">Opening hours</h3>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {site.opening.map((o) => (
                  <div key={o.day} className="flex items-center justify-between">
                    <span>{o.day}</span>
                    <span className="text-white/85">{o.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card hover-lift lg:col-span-2">
              <h3 className="text-xl font-semibold">What we supply & fit</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {site.services.map((s) => (
                  <div key={s.title} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover-lift">
                    <div className="font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm text-white/70">{s.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a className="btn btn-primary" href="/#contact">Get a free estimate</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
