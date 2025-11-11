import React, { useState } from 'react'
import type { TabsProps } from './Tabs.types'
import './Tabs.css'

const Tabs = <T,>({ tabs, defaultTabId, compatibilityData, activeTabId: controlledActiveTabId, setActiveTabId: controlledSetActiveTabId }: TabsProps<T>) => {
  const isControlled = typeof controlledActiveTabId === 'string' && typeof controlledSetActiveTabId === 'function'
  const [internalActive, setInternalActive] = useState(defaultTabId)
  const activeTabId = isControlled ? controlledActiveTabId as string : internalActive
  const setActiveTabId = isControlled ? controlledSetActiveTabId as (id: string) => void : setInternalActive
  const ActiveComponent = tabs.find(t => t.id === activeTabId)?.component || tabs[0].component

  return (
    <div className="custom-tabs-container">
      {/* Barra de Navegação das Abas */}
      <div className="tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-item ${tab.id === activeTabId ? 'active' : ''}`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Conteúdo da Aba Ativa */}
      <div className="tabs-content">
        <ActiveComponent compatibilityData={compatibilityData} />
      </div>
    </div>
  )
}
export default Tabs
