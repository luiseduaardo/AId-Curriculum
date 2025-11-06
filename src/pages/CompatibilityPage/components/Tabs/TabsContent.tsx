import React from 'react'
import type { TabItem } from './Tabs.types'
import './Tabs.css'

interface TabsContentProps<T> {
  tabs: TabItem<T>[]
  activeTabId: string
  compatibilityData: T
}

const TabsContent = <T,>({ tabs, activeTabId, compatibilityData }: TabsContentProps<T>) => {
  const ActiveComponent = tabs.find(t => t.id === activeTabId)?.component || tabs[0].component
  return (
    <div className="tabs-content">
      <ActiveComponent compatibilityData={compatibilityData} />
    </div>
  )
}

export default TabsContent
