'use client'

import { TABS } from '@/lib/tabs'

interface TabBarProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex items-center gap-1 border-b border-border pb-3">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
            transition-all duration-150 cursor-pointer
            ${activeTab === tab.id
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }
            ${tab.special ? 'ml-auto' : ''}
          `}
        >
          {tab.label}
          {tab.special && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-updates-dot opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-updates-dot" />
            </span>
          )}
        </button>
      ))}
    </div>
  )
}