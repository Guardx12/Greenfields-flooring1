import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  metadataBase: new URL("https://www.greenfields-flooring.co.uk"),
  title: {
    default: "Greenfields Flooring | Carpet, Vinyl, Wood & LVT Flooring in Lancing",
    template: "%s | Greenfields Flooring"
  },
  description:
    "Family‑run flooring showroom in Lancing with 65+ years experience. Carpets, vinyl, laminate, wood and LVT supplied and fitted with expert preparation and pride.",
  keywords: [
    "Greenfields Flooring",
    "flooring Lancing",
    "carpet shop Lancing",
    "LVT flooring Lancing",
    "vinyl flooring Lancing",
    "wood flooring Lancing",
    "carpet fitting Sussex",
    "flooring showroom Lancing",
    "flooring near Worthing",
    "flooring West Sussex"
  ],
  authors: [{ name: "Greenfields Flooring" }],
  creator: "Greenfields Flooring",
  publisher: "Greenfields Flooring",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.greenfields-flooring.co.uk",
    siteName: "Greenfields Flooring",
    title:
      "Greenfields Flooring | Premium Carpets, Vinyl, Wood & LVT in Lancing",
    description:
      "Visit our Lancing showroom for expert advice and flooring fitted with pride. Family‑run, trusted locally for generations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greenfields Flooring showroom and fitted flooring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Greenfields Flooring | Premium Flooring in Lancing",
    description:
      "Family‑run flooring showroom. Carpets, vinyl, wood & LVT supplied and fitted.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.greenfields-flooring.co.uk",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
