import type { MetadataRoute } from "next";

/**
 * Crawlers must be able to fetch pages to see the sitewide noindex/nofollow
 * metadata. Production indexing remains disabled in app/layout.tsx.
 * Revisit this policy only during the separately approved SEO cutover.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
