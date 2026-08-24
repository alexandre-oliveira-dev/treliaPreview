import type { MetadataRoute } from "next";

const SITE_URL = "https://dra-emanuelle-morais.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
