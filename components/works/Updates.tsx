import { GroupedUpdates } from '@/lib/updates'
import { Platform } from '@/types/content'
import { JSX } from 'react'

// platform icon svgs
function PlatformIcon({ platform }: { platform: Platform }) {
  const base = "w-full h-full"

  const icons: Record<Platform, JSX.Element> = {
    linkedin: (
      <svg className={base} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    x: (
      <svg className={base} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    github: (
      <svg className={base} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    blog: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    project: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  }

  return icons[platform] ?? icons.project
}

// platform-specific styles
const platformStyles: Record<Platform, string> = {
  linkedin: 'bg-blue-50   text-blue-600',
  x:        'bg-zinc-100  text-zinc-800',
  github:   'bg-zinc-100  text-zinc-800',
  blog:     'bg-amber-50  text-amber-600',
  project:  'bg-violet-50 text-violet-600',
}

//main
interface UpdatesProps {
  feed: GroupedUpdates[]
}

export default function Updates({ feed }: UpdatesProps) {
  if (feed.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-muted-foreground">No updates yet.</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-2">
      {feed.map((group, groupIndex) => (
        <div key={group.date} className="flex gap-4">
          {/* timeline spine */}
          <div className="flex flex-col items-center">
            {/* dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-border border-2 border-background ring-1 ring-border mt-1 shrink-0" />
            {/* line */}
            {groupIndex < feed.length - 1 && (
              <div className="w-px flex-1 mt-1 border-l-2 border-dashed border-border" />
            )}
          </div>

          {/* group content */}
          <div className="pb-8 flex-1 min-w-0">
            {/* date */}
            <p className="text-sm font-semibold text-foreground mb-3 -mt-0.5">
              {group.date}
            </p>

            {/* entries */}
            <div className="flex flex-col gap-2.5">
              {group.entries.map((entry) => (
                <a
                  key={entry.id}
                  href={entry.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  {/* platform icon badge */}
                  <div className={`
                    w-8 h-8 rounded-inner shrink-0 flex items-center justify-center p-1.5
                    ${platformStyles[entry.platform]}
                    group-hover:scale-110 transition-transform duration-150
                  `}>
                    <PlatformIcon platform={entry.platform} />
                  </div>

                  {/* action text */}
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-150 leading-snug">
                    {entry.action}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}