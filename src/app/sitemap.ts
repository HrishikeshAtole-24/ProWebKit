import type { MetadataRoute } from "next";
import { templates } from "@/lib/registry";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prowebkit.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...templates.map((template) => ({
      url: `${siteUrl}${template.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
