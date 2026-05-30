import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jugaduji.com";
  // Use a fixed date instead of new Date() — dynamic dates on every request
  // look suspicious to search engines and provide no SEO benefit
  const lastUpdated = "2026-05-30";

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
