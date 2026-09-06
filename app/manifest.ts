import type { MetadataRoute } from "next"

import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name.split(" ")[0],
    description: SITE.description,
    start_url: "/",
    display: "browser",
    background_color: "#f1f1f1",
    theme_color: "#f1f1f1",
    icons: [
      // "any" is the icon, exactly as drawn &  "maskable" is for when Android crops it
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/icon-maskable",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
