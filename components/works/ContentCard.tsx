/* eslint-disable @next/next/no-img-element */
'use client'

import { ContentItem } from '@/types/content'

interface ContentCardProps {
  item: ContentItem
  onClick: () => void
}

//seperate color for each content type
const typeMeta: Record<string, { label: string; className: string }> = {
  project: { label: 'Project', className: 'bg-violet-100 text-violet-700' },
  blog:    { label: 'Blog',    className: 'bg-amber-100  text-amber-700'  },
  video:   { label: 'Video',   className: 'bg-rose-100   text-rose-700'   },
}

export default function ContentCard({ item, onClick }: ContentCardProps) {
  const meta = typeMeta[item.type]

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })

  return (
    <>
      <div
        onClick={onClick}
        className="flex gap-4 px-3 py-4 rounded-inner cursor-pointer
                   hover:bg-muted/60 transition-colors duration-150 group"
      >
        {/* thumbnail */}
        <div className="w-48 shrink-0 aspect-video rounded-inner overflow-hidden bg-muted">
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-[1.03]
                         transition-transform duration-300"
            />
          ) : (
            // yt thumb auto-derived from id
            item.youtubeId ? (
              <img
                src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.03]
                           transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-muted to-muted-foreground/10" />
            )
          )}
        </div>

        {/* text content */}
        <div className="flex flex-col gap-2 min-w-0 justify-center">
          {/* badge + date */}
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${meta.className}`}>
              {meta.label}
            </span>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>

          {/* title */}
          <h3 className="font-semibold text-[15px] text-foreground leading-snug line-clamp-1">
            {item.title}
          </h3>

          {/* description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-muted-foreground bg-muted
                           px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="h-px bg-border mx-3" />
    </>
  )
}