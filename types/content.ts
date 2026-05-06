export type ContentType = 'project' | 'blog' | 'video'

export type Platform = 'linkedin' | 'x' | 'github' | 'blog' | 'project'

export interface ContentItem {
  id: string
  type: ContentType
  title: string
  description: string
  date: string
  thumbnail: string
  tags: string[]
  slug?: string
  youtubeId?: string
}

export interface UpdateEntry {
  id: string
  platform: Platform
  action: string
  date: string
  url?: string
}

export interface Tab {
  id: string
  label: string
  special?: boolean
}