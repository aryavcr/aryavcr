import type { MetadataRoute } from "next"

import { getPosts } from "@/lib/posts"
import { absoluteUrl } from "@/lib/site"

//nooo panel URLs(a #fragment counts as the page it hangs off)
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/writing"),
      lastModified: posts[0] ? new Date(posts[0].date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/writing/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
