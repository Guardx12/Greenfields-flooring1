"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/components/site-data";
import { Icons } from "@/components/icons";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur-xl" : ""}`}>
      <div className={`container-pad ${scrolled ? "py-3" : "py-5"} transition`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${scrolled ? "glass" : "bg-transparent"}`}>
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Greenfields Flooring logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/10 logo-gleam" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">{site.name}</div>
              <div className="text-xs text-white/60">{site.tagline}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-white/70 hover:text-white transition">
                {i.label}
              </a>
            ))}
            <a href={site.socials.googleReview} target="_blank" rel="noreferrer" className="btn btn-ghost px-4 py-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Icons.GoogleG className="h-4 w-4" /> Leave a review
              </span>
            </a>
            <a aria-label="Facebook" href={site.socials.facebook} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift">
              <Icons.FacebookColor className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href={site.socials.instagram} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition hover-lift">
              <Icons.InstagramColor className="h-5 w-5" />
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-primary">
              <Icons.Phone className="h-4 w-4" />
              Call {site.phone}
            </a>
          </nav>

          <button
            className="md:hidden btn btn-ghost px-4 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-semibold">{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-2xl glass p-4 md:hidden">
            <div className="grid gap-3">
              {nav.map((i) => (
                <a key={i.href} href={i.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>
                  {i.label}
                </a>
              ))}
              <div className="hr my-2" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn btn-primary w-full">
                <Icons.Phone className="h-4 w-4" />
                Call {site.phone}
              </a>
              <a href={site.socials.googleReview} target="_blank" rel="noreferrer" className="btn btn-ghost w-full">
                <Icons.GoogleG className="h-4 w-4" /> Leave a Google review
              </a>
              <div className="flex gap-3">
                <a className="btn btn-ghost flex-1" href={site.socials.facebook} target="_blank" rel="noreferrer">
                  <Icons.Facebook className="h-4 w-4" /> Facebook
                </a>
                <a className="btn btn-ghost flex-1" href={site.socials.instagram} target="_blank" rel="noreferrer">
                  <Icons.Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
