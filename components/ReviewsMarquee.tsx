"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { site } from "@/components/site-data";

export function ReviewsMarquee() {
  const items = site.reviews ?? [];
  if (!items.length) return null;
  const loop = [...items, ...items];

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="text-sm font-semibold">What customers say</div>
        <a
          href={site.socials.googleReview}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gf-lime hover:underline"
        >
          <Icons.GoogleG className="h-4 w-4" />
          Read / write a review
        </a>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F12] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F12] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 px-5 pb-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {loop.map((r, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] rounded-2xl bg-black/25 ring-1 ring-white/10 p-4 hover-lift"
            >
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="text-gf-lime">★★★★★</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>Google</span>
              </div>
              <div className="mt-2 text-sm text-white/80">“{r.quote}”</div>
              <div className="mt-3 text-xs font-semibold text-white/70">{r.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
