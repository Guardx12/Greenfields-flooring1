import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Icons } from "@/components/icons";
import { site } from "@/components/site-data";
import { WavyText } from "@/components/WavyText";

export const metadata = {
  title: "Contact & Directions",
  description:
    "Contact Greenfields Flooring in Lancing. Call, opening hours, showroom address and directions, plus a quick enquiry form.",
};

export default function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Greenfields Flooring, 76 Manor Rd, Lancing BN15 0HD") +
    "&output=embed";

  return (
    <main>
      <Header />

      <section className="pt-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Contact", url: "/contact" },
              ]}
            />

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              <WavyText text="Contact & directions" />
            </h1>
            <p className="mt-4 text-white/70">
              Visit the showroom, give us a ring, or send a quick message. Fastest quotes are usually by phone.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5 card hover-lift">
              <div className="text-sm font-semibold">Call the shop</div>
              <a className="mt-3 btn btn-primary w-full" href={`tel:${site.phone}`}>
                {site.phone}
              </a>

              <div className="mt-6 hr" />

              <div className="mt-6 text-sm font-semibold">Showroom</div>
              <div className="mt-2 text-sm text-white/70">
                {site.address.line1}
                <br />
                {site.address.town} {site.address.postcode}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-ghost"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    "Greenfields Flooring, 76 Manor Rd, Lancing BN15 0HD"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
                <a
                  className="btn btn-ghost"
                  href={site.socials.googleReview}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Icons.GoogleG className="h-4 w-4" /> Leave a review
                  </span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  aria-label="Facebook"
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift"
                >
                  <Icons.FacebookColor className="h-6 w-6" />
                </a>
                <a
                  aria-label="Instagram"
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift"
                >
                  <Icons.InstagramColor className="h-6 w-6" />
                </a>
                {site.socials.checkatrade ? (
                  <a
                    aria-label="Checkatrade"
                    href={site.socials.checkatrade}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-lift inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                  >
                    <img src="/checkatrade.svg" alt="Checkatrade" className="h-8 w-auto" />
                  </a>
                ) : null}
              </div>

              <div className="mt-6 hr" />

              <div className="mt-6 text-sm font-semibold">Opening hours</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {site.opening.map((o) => (
                  <div key={o.day} className="flex items-center justify-between">
                    <span>{o.day}</span>
                    <span className="text-white/85">{o.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-5">
              <div className="card p-0 overflow-hidden hover-lift">
                <div className="p-6">
                  <div className="text-sm font-semibold">Find us on Google Maps</div>
                  <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <iframe
                      title="Greenfields Flooring map"
                      src={mapSrc}
                      className="h-[360px] w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div className="card hover-lift">
                <div className="text-sm font-semibold">Send a message</div>
                <div className="mt-2 text-sm text-white/70">
                  If you’d like, send a quick enquiry and we’ll get back to you.
                </div>
                <ContactForm />
                <div className="mt-4 text-xs text-white/55">
                  Prefer a quicker quote? Call <span className="text-white">{site.phone}</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
