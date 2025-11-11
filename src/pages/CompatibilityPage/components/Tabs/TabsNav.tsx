import React from 'react'
import type { TabItem } from './Tabs.types'
import './Tabs.css'

interface TabsNavProps<T> {
  tabs: TabItem<T>[]
  activeTabId: string
  onChange: (id: string) => void
}

const TabsNav = <T,>({ tabs, activeTabId, onChange }: TabsNavProps<T>) => (
  <div className="tabs-nav">
    {tabs.map(tab => (
      <button
        key={tab.id}
        className={`tab-item ${tab.id === activeTabId ? 'active' : ''}`}
        onClick={() => onChange(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
)

export default TabsNav
