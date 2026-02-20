"use client";

import { site } from "@/components/site-data";

export function ContactForm() {
  // Zero-config email delivery via FormSubmit (no API keys, no server setup).
  // FormSubmit will deliver form contents to the target email address.
  // Note: First submission may require confirming the recipient email inbox once.
  return (
    <form
      className="mt-6 grid gap-4"
      action="https://formsubmit.co/greenfieldsflooring@hotmail.co.uk"
      method="POST"
    >
      {/* Optional: disable FormSubmit captcha */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Optional: subject line */}
      <input type="hidden" name="_subject" value="New quote request (Greenfields Flooring website)" />
      {/* Optional: redirect after submit */}
      <input type="hidden" name="_next" value="https://greenfields-flooring.vercel.app/?sent=1" />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          placeholder="Your name *"
          required
          className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-gf-lime/40"
        />
        <input
          name="phone"
          placeholder="Phone number"
          className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-gf-lime/40"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email address"
        className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-gf-lime/40"
      />

      <textarea
        name="message"
        placeholder="Tell us what you’re looking for (rooms, material, rough size, timescale)… *"
        rows={5}
        required
        className="w-full rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-gf-lime/40"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
        <div className="text-xs text-white/55">
          Prefer a call? Ring <span className="text-white">{site.phone}</span>.
        </div>
      </div>
    </form>
  );
}
