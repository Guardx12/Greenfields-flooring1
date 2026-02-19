import { site } from "@/components/site-data";
import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-pad py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10" alt="Logo" />
              <div className="font-semibold">{site.name}</div>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Family‑run flooring specialists in Lancing. Friendly advice, expert fitting, and a finish you’ll be proud of.
            </p>
          </div>

<div className="text-sm">
  <div className="font-semibold">Quick links</div>
  <div className="mt-3 grid gap-2 text-white/70 break-words">
    <a className="hover:text-white" href="/">Home</a>
    <a className="hover:text-white" href="/about">About</a>
    <a className="hover:text-white" href="/gallery">Gallery</a>
    <a className="hover:text-white" href="/contact">Contact</a>
    <a className="hover:text-white" href="/services">Services</a>
    <a className="hover:text-white" href="/locations">Areas we cover</a>
  </div>
</div>

          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-3 grid gap-2 text-white/70 break-words">
              <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Icons.Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
                <Icons.Mail className="h-4 w-4" /> {site.email}
              </a>
              <div className="inline-flex items-start gap-2">
                <Icons.MapPin className="mt-0.5 h-4 w-4" />
                <div>
                  {site.address.line1}
                  <br />
                  {site.address.town}, {site.address.postcode}
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Social</div>
            <div className="mt-3 flex flex-wrap gap-3">
              <a className="btn btn-ghost" href={site.socials.facebook} target="_blank" rel="noreferrer">
                <Icons.FacebookColor className="h-4 w-4" /> Facebook
              </a>
              <a className="btn btn-ghost" href={site.socials.instagram} target="_blank" rel="noreferrer">
                <Icons.InstagramColor className="h-4 w-4" /> Instagram
              </a>
              <a className="btn btn-ghost" href={site.socials.googleReview} target="_blank" rel="noreferrer">
                <Icons.GoogleG className="h-4 w-4" /> Google Review
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-white/50">
              Website built by <a href="https://www.guardxnetwork.com" target="_blank" rel="noreferrer" className="text-gf-lime hover:underline">GuardX</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
