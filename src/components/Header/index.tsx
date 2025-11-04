import React from 'react'
import './Header.css'
import Title from '@/components/Title'

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand"><Title small /></div>
        <nav className="nav">
          {/* empty for now - authentication not implemented */}
        </nav>
      </div>
    </header>
  )
}

export default Header
