import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Vendor data is placeholder pre-launch; compound detail pages reference
      // the same placeholders. Keep both out of search results until real
      // vendor partners ship. /compounds (index) stays indexable — it does
      // not expose vendor data.
      disallow: ["/vendors", "/compounds/"],
    },
  };
}
