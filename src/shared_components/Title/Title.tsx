import React from 'react'
import './Title.css'
// NOVO: Importar a interface do arquivo de tipagem local
import type { TitleProps } from './Title.types'

const Title: React.FC<TitleProps> = ({ small = false, className = '', subtitle }) => {
  return (
    <div className={`title-root ${small ? 'title-small' : ''} ${className}`.trim()}>
      <div className="title-mark">AId</div>
      <div className="title-text">
        <div className="title-main">Curriculum</div>
        {subtitle && <div className="title-sub">{subtitle}</div>}
      </div>
    </div>
  )
}

export default Title
