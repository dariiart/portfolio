import type { MetadataRoute } from "next";
import { pagePaths, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.map((path) => ({
    url: new URL(path, SITE_URL).href,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1.0 : path.startsWith("/work/") ? 0.8 : 0.7,
  }));
}

