import React from 'react'
import './OptionCard.css'
import type { OptionCardProps } from './OptionCard.types'

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, description, onClick, isOutline = false }) => {
  return (
    <button className={`start-option-card ${isOutline ? 'is-outline' : ''}`} onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </button>
  )
}

export default OptionCard
