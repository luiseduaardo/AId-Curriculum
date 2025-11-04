import React from 'react'
import './Title.css'

type Props = {
  small?: boolean
  className?: string
  subtitle?: string
}

const Title: React.FC<Props> = ({ small = false, className = '', subtitle }) => {
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
