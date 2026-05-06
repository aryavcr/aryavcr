'use client'

import { useState } from 'react'
import TabBar from './TabBar'
import ContentCard from './ContentCard'
import Updates from './Updates'
import { ContentItem } from '@/types/content'
import { GroupedUpdates } from '@/lib/updates'

interface WorksPanelProps {
  items: ContentItem[]
  updatesFeed: GroupedUpdates[]
}

export default function WorksPanel({ items = [], updatesFeed = [] }: WorksPanelProps) {
    console.log('WorksPanel items:', items)
  const [activeTab, setActiveTab] = useState('all')

  const filteredItems = activeTab === 'all'
    ? items
    : items.filter((item) => {
        if (activeTab === 'projects') return item.type === 'project'
        if (activeTab === 'blogs')    return item.type === 'blog'
        if (activeTab === 'videos')   return item.type === 'video'
        return false
      })

  return (
    <div className="bg-card rounded-card shadow-card flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-0 flex flex-col gap-4">
        <h2 className="font-heading font-semibold text-xl text-foreground">
          Works
        </h2>
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto px-2 py-3">
        {activeTab === 'resume' ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground">Resume coming in Phase 6.</p>
          </div>
        ) : activeTab === 'updates' ? (
          <Updates feed={updatesFeed} />
        ) : filteredItems.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground">Nothing here yet.</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onClick={() => {}}
            />
          ))
        )}
      </div>
    </div>
  )
}