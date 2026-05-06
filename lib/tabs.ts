import { Tab } from '@/types/content'

// defines tabs in works(right) section, optional special property for pulsing dot.
export const TABS: Tab[] = [
  { id: 'all',      label: 'All'      },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs',    label: 'Blogs'    },
  { id: 'videos',   label: 'Videos'   },
  { id: 'resume',   label: 'Resume'   },
  { id: 'updates',  label: 'Updates', special: true },
]