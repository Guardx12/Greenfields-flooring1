import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.greenfields-flooring.co.uk";

  const routes = [
    "",
    "/about",
    "/gallery",
    "/services/carpet",
    "/services/lvt",
    "/services",
    "/services/vinyl",
    "/locations/worthing",
    "/locations/shoreham-by-sea",
    "/locations/brighton",
    "/locations/littlehampton",
    "/locations",
    "/locations/west-sussex",
    "/sitemap"
  ];

  return routes.map(r => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.9
  }));
}
