import BentoGrid from '@/components/bento/BentoGrid'
import ProfileCard from '@/components/bento/ProfileCard'
import FunCard from '@/components/bento/FunCard'
import WorksPanel from '@/components/works/WorksPanel'
import { getAllContent } from '@/lib/content'
import { videos } from '@/content/videos/videos'
import { buildUpdatesFeed } from '@/lib/updates'
import { ContentItem } from '@/types/content'


export default function Home() {
  const raw = [...getAllContent(), ...videos]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Force clean JSON serialization before passing to client component
  const contentItems: ContentItem[] = JSON.parse(JSON.stringify(raw))
  const updatesFeed = JSON.parse(JSON.stringify(buildUpdatesFeed()))

  return (
    <BentoGrid>
      <div className="flex flex-col gap-3 h-full">
        <ProfileCard />
        <FunCard />
      </div>
      <WorksPanel items={contentItems} updatesFeed={updatesFeed} />
    </BentoGrid>
  )
}