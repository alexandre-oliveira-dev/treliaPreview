import type { MetadataRoute } from "next";
import { areas, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = [
    "",
    "/areas-de-atuacao",
    "/sobre",
    "/socias",
    "/contato",
    "/faq",
    "/politica-de-privacidade",
  ];

  const areaRoutes = areas.map((area) => `/areas-de-atuacao/${area.slug}`);

  return [...staticRoutes, ...areaRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
