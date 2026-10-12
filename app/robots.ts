import type { MetadataRoute } from "next";
import { isPreview, SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Preview HTML and response headers carry noindex; crawling remains allowed
    // so a crawler can read that directive.
    ...(isPreview ? {} : { sitemap: `${SITE_URL}/sitemap.xml` }),
  };
}
