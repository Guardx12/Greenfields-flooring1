import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.greenfields-flooring.co.uk";

  const routes = [
    "",
    "/about",
    "/gallery",
    "/services/carpet",
    "/services/lvt",
    "/services/vinyl",
    "/locations/worthing",
    "/locations/shoreham-by-sea",
    "/locations/brighton",
    "/locations/littlehampton",
    "/locations/west-sussex"
  ];

  return routes.map(r => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.9
  }));
}
