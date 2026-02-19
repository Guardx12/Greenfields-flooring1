import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenfields Flooring | Lancing",
  description:
    "Family‑run flooring showroom in Lancing. Carpets, vinyl & LVT, wood & laminate, natural flooring, commercial and safety flooring — expertly supplied and fitted.",
  metadataBase: new URL("https://www.greenfieldsflooring.co.uk"),
  openGraph: {
    title: "Greenfields Flooring | Lancing",
    description:
      "Family‑run flooring specialists with generations of craftsmanship. Free estimates and expert fitting.",
    images: ["/shop.webp"],
  },
  icons: [{ rel: "icon", url: "/logo.jpg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
