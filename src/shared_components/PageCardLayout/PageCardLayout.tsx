import React from 'react'
import './PageCardLayout.css'

type Props = {
  children: React.ReactNode
}

// O layout centralizado em card é o wrapper de ambas as páginas de seleção.
const PageCardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-card-layout-root">
      <div className="card-container">
        {children}
      </div>
    </div>
  )
}

export default PageCardLayout
