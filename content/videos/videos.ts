import { ContentItem } from '@/types/content'

// Add new videos here — thumbnail is auto-derived from youtubeId
export const videos: ContentItem[] = [
  {
    id: 'vid-1',
    type: 'video',
    title: 'Building an LLM eval tool from scratch',
    description:
      'Full walkthrough of the eval playground architecture — from prompt design to live heatmap rendering in Next.js.',
    date: '2026-03-01',
    thumbnail: '',
    youtubeId: 'sdff', // replace with real ID when ready
    tags: ['AI', 'Next.js', 'Tutorial'],
  },
  {
    id: 'vid-2',
    type: 'video',
    title: 'Framer Motion shared element transitions explained',
    description:
      'How layoutId works under the hood, and why it is the cleanest way to build expansion animations in React.',
    date: '2026-02-15',
    thumbnail: '',
    youtubeId: 'sdfsd', // replace with real ID when ready
    tags: ['Framer Motion', 'Animation', 'React'],
  },
]