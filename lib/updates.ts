import { getAllBlogs, getAllProjects } from './content'
import { UpdateEntry, Platform } from '@/types/content'

//manual social entries for now
export const socialUpdates: UpdateEntry[] = [
  {
    id: 'social-1',
    platform: 'linkedin',
    action: 'Posted on LinkedIn',
    date: '2026-05-05',
    url: '#',
  },
  {
    id: 'social-2',
    platform: 'x',
    action: 'Posted on X',
    date: '2026-05-04',
    url: '#',
  },
]

// auto-generated entries
function getContentUpdates(): UpdateEntry[] {
  const blogs = getAllBlogs().map((item): UpdateEntry => ({
    id:       `blog-${item.slug}`,
    platform: 'blog',
    action:   `Published a blog — ${item.title}`,
    date:     item.date,
    url:      `/blog/${item.slug}`,
  }))

  const projects = getAllProjects().map((item): UpdateEntry => ({
    id:       `project-${item.slug}`,
    platform: 'project',
    action:   `Shipped a project — ${item.title}`,
    date:     item.date,
    url:      `/project/${item.slug}`,
  }))

  return [...blogs, ...projects]
}

//feed
export interface GroupedUpdates {
  date: string        // e.g. "May 5, 2026"
  entries: UpdateEntry[]
}

export function buildUpdatesFeed(): GroupedUpdates[] {
  const all = [...socialUpdates, ...getContentUpdates()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  //group by formatted date string
  const grouped = new Map<string, UpdateEntry[]>()

  for (const entry of all) {
    const label = new Date(entry.date).toLocaleDateString('en-US', {
      month: 'long',
      day:   'numeric',
      year:  'numeric',
    })
    if (!grouped.has(label)) grouped.set(label, [])
    grouped.get(label)!.push(entry)
  }

  return Array.from(grouped.entries()).map(([date, entries]) => ({
    date,
    entries,
  }))
}