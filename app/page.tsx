import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";
import { site } from "@/components/site-data";
import { Icons } from "@/components/icons";
import { RollingLogo } from "@/components/RollingLogo";
import { LocalBusinessJsonLd } from "@/components/SEO";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { ContactForm } from "@/components/ContactForm";
import { WavyText } from "@/components/WavyText";

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="badge mx-auto">
        <span className="h-2 w-2 rounded-full bg-gf-lime" />
        {kicker}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"><WavyText text={title} /></h2>
      <p className="mt-3 text-sm text-white/70 md:text-base">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <Header />

      {/* HERO */}
      <section className="pt-28">
        <div className="container-pad">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="badge">
                <Icons.Star className="h-4 w-4 text-gf-lime" />
                Family‑run • 65+ years combined experience • Free estimates
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight md:leading-[1.08]">
  <WavyText text="Flooring that feels premium" />
  <br className="hidden sm:block" />
  <span className="block sm:mt-2">
    <WavyText text="— fitted with pride." />
  </span>
</h1>

              <p className="mt-4 text-base text-white/70 md:text-lg">
                Greenfields Flooring is a family‑run showroom in Lancing. We supply and fit carpets, vinyl &amp; LVT, wood &amp; laminate,
                natural flooring, plus commercial and safety flooring — with a finish you’ll be proud of.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Icons.Phone className="h-4 w-4" />
                  Call {site.phone}
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Get a quote
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {site.proof.map((p) => (
                  <div key={p.k} className="card hover-lift">
                    <div className="text-xl font-semibold text-gf-lime">{p.k}</div>
                    <div className="mt-1 text-sm text-white/70">{p.v}</div>
                  </div>
                ))}
              </div>

              <ReviewsMarquee />

<div className="mt-10 grid gap-5 lg:grid-cols-12">
  <div className="lg:col-span-7 card p-0 overflow-hidden hover-lift">
    <a href={site.socials.checkatrade} target="_blank" rel="noreferrer" className="block">
      <div className="p-6">
        <div className="text-sm text-white/60">Trusted on</div>
        <div className="mt-3">
          <img src="/checkatrade.svg" alt="Checkatrade" className="w-full max-w-[520px] wave-underline" />
        </div>
        <div className="mt-4 text-sm text-white/70">
          Rated highly by customers — view our profile and recent feedback.
        </div>
        <div className="mt-6">
          <span className="btn btn-primary">View Checkatrade</span>
        </div>
      </div>
    </a>
  </div>

  <div className="lg:col-span-5 card hover-lift">
    <div className="text-sm font-semibold">Prefer to speak to us?</div>
    <div className="mt-2 text-sm text-white/70">The fastest way to get a quote is by phone.</div>
    <div className="mt-5 flex flex-col gap-3">
      <a className="btn btn-primary" href={`tel:${site.phone}`}>Call {site.phone}</a>
    </div>
  </div>
</div>


              <div className="mt-8">
                <RollingLogo />
                </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute inset-0 sm:-inset-6 rounded-[2.5rem] bg-gf-lime/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-soft">
                <img
                  src="/shop.webp"
                  alt="Greenfields Flooring shop front in Lancing"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="badge">
                    <Icons.MapPin className="h-4 w-4 text-gf-lime" />
                    76 Manor Road, Lancing, BN15 0HD
                  </div>
                  <div className="mt-3 text-lg font-semibold">Visit the showroom</div>
                  <div className="mt-1 text-sm text-white/70">
                    Friendly advice, samples to compare, and expert fitting booked in with you.
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a aria-label="Facebook" href={site.socials.facebook} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift">
                  <Icons.FacebookColor className="h-6 w-6" />
                </a>
                <a aria-label="Instagram" href={site.socials.instagram} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift">
                  <Icons.InstagramColor className="h-6 w-6" />
                </a>
                <a href={site.socials.googleReview} target="_blank" rel="noreferrer" className="btn btn-ghost px-4 py-3 hover-lift w-full sm:w-auto" style={{ pointerEvents: "auto" }}>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Icons.GoogleG className="h-4 w-4" /> Google Review
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-20">
        <div className="container-pad">
          <SectionTitle
            kicker="What we do"
            title="Supply & fit — done properly"
            desc="From cosy carpets to hard‑wearing commercial finishes, we’ll guide you to the right product, prep the floor correctly, and fit it beautifully."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s) => (
              <div key={s.title} className="card hover-lift">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-gf-lime/10 ring-1 ring-gf-lime/20" />
                </div>
                <div className="mt-6 hr" />
                <div className="mt-4 flex items-center justify-between text-xs text-white/55">
                  <span>Free estimate available</span>
                  <a href="#contact" className="text-gf-lime hover:underline">
                    Ask a question →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mt-20">
        <div className="container-pad">
          <SectionTitle
            kicker="Work & showroom"
            title="A look at Greenfields"
            desc="Bring ideas, measurements, or just a rough brief — we’ll help you narrow it down and book fitting."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(site as any).gallery?.slice(0, 12).map((src: string, idx: number) => (
              <div key={idx} className="card p-0 overflow-hidden hover-lift">
                <img src={src} alt={`Greenfields Flooring photo ${idx + 1}`} className="h-[240px] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-20">
        <div className="container-pad">
          <SectionTitle
            kicker="About Greenfields"
            title="Generations of craftsmanship"
            desc="We pride ourselves on reliability, high‑level workmanship and friendly service — whether it’s one room or a full commercial fit‑out."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="card lg:col-span-2">
              <h3 className="text-xl font-semibold">A family‑run business in Lancing</h3>
              <p className="mt-3 text-sm text-white/70">
                Combined experience of over 65 years of carpet fitting skills run through the Greenfield family generations.
                We specialise in both domestic and contract/commercial flooring, with careful preparation and a finish that lasts.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-gf-lime font-semibold">Advice first</div>
                  <div className="mt-1 text-sm text-white/70">We’ll guide you to the right product for your space & budget.</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-gf-lime font-semibold">Prep done right</div>
                  <div className="mt-1 text-sm text-white/70">Uplift, latexing and hardboarding for a flawless base.</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-gf-lime font-semibold">Fit with pride</div>
                  <div className="mt-1 text-sm text-white/70">Quality workmanship and clean finishing details.</div>
                </div>
              </div>
            </div>

            <div className="card hover-lift">
              <h3 className="text-xl font-semibold">Opening times</h3>
              <div className="mt-4 grid gap-2 text-sm text-white/70">
                {site.opening.map((o) => (
                  <div key={o.day} className="flex items-center justify-between">
                    <span>{o.day}</span>
                    <span className="text-white/85">{o.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 hr" />
              <div className="mt-6">
                <a className="btn btn-primary w-full" href="#contact">
                  Get a free estimate
                </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20 pb-10">
        <div className="container-pad">
          <SectionTitle
            kicker="Get in touch"
            title="Free estimates & friendly advice"
            desc="Call, email, or visit the showroom. If you’d like a quote, tell us what rooms you’re doing and what look you’re going for."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <div className="card lg:col-span-5">
              <div className="grid gap-4 text-sm text-white/75">
                <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gf-lime/10 ring-1 ring-gf-lime/20">
                    <Icons.Phone className="h-5 w-5 text-gf-lime" />
                  </span>
                  <div>
                    <div className="text-xs text-white/55">Phone</div>
                    <div className="font-semibold">{site.phone}</div>
                  </div>
                </a>

                <a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${site.email}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gf-lime/10 ring-1 ring-gf-lime/20">
                    <Icons.Mail className="h-5 w-5 text-gf-lime" />
                  </span>
                  <div>
                    <div className="text-xs text-white/55">Email</div>
                    <div className="font-semibold">{site.email}</div>
                  </div>
                </a>

                <div className="inline-flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gf-lime/10 ring-1 ring-gf-lime/20">
                    <Icons.MapPin className="h-5 w-5 text-gf-lime" />
                  </span>
                  <div>
                    <div className="text-xs text-white/55">Showroom</div>
                    <div className="font-semibold">
                      {site.address.line1}, {site.address.town} {site.address.postcode}
                    </div>
                  </div>
                </div>

                <div className="hr my-2" />

                <div className="flex items-center gap-3">
                  <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift" href={site.socials.facebook} target="_blank" rel="noreferrer">
                    <Icons.FacebookColor className="h-6 w-6" />
                  </a>
                  <a aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift" href={site.socials.instagram} target="_blank" rel="noreferrer">
                    <Icons.InstagramColor className="h-6 w-6" />
                  </a>
                  <a className="btn btn-ghost px-4 py-3" href={site.socials.googleReview} target="_blank" rel="noreferrer">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                      <Icons.GoogleG className="h-4 w-4" /> Google Review
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card lg:col-span-7">
              <h3 className="text-xl font-semibold">Quick quote message</h3>
              <p className="mt-2 text-sm text-white/70">
                This form is set up as a simple mailto (so it works instantly on Vercel). If you want a proper
                “send to inbox” form, tell me the preferred email and I’ll wire it up to a serverless function.
              </p>

              <ContactForm />
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-white/50">
            Leave a Google review and help local customers find Greenfields faster. <a href={site.socials.googleReview} target="_blank" rel="noreferrer" className="text-gf-lime hover:underline inline-flex items-center gap-2"><Icons.GoogleG className="h-4 w-4" /> Leave a Google review</a>.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
