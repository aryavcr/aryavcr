import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ContentItem } from '@/types/content'

const blogsDir    = path.join(process.cwd(), 'content/blogs')
const projectsDir = path.join(process.cwd(), 'content/projects')

// reads all .mdx files in a directory and returns ContentItems
function readMdxDir(dir: string): ContentItem[] {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw  = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data } = matter(raw)

      return {
        id:          slug,
        slug,
        type:        data.type        as ContentItem['type'],
        title:       data.title       as string,
        description: data.description as string,
        date:        data.date        as string,
        thumbnail:   data.thumbnail   as string ?? '',
        tags:        data.tags        as string[] ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

//public API

export function getAllBlogs(): ContentItem[] {
  return readMdxDir(blogsDir)
}

export function getAllProjects(): ContentItem[] {
  return readMdxDir(projectsDir)
}

export function getAllContent(): ContentItem[] {
  return [...getAllBlogs(), ...getAllProjects()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// reads a single MDX file and returns its raw content string for rendering
export function getMdxContent(type: 'blog' | 'project', slug: string): string {
  const dir  = type === 'blog' ? blogsDir : projectsDir
  const file = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(file)) return ''
  const { content } = matter(fs.readFileSync(file, 'utf-8'))
  return content
}