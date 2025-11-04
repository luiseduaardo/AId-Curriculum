import React from 'react'
import './OptionCard.css'

type Props = {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
  isOutline?: boolean // NOVA PROP: para usar o estilo do card Genérico (borda)
}

const OptionCard: React.FC<Props> = ({ icon, title, description, onClick, isOutline = false }) => {
  return (
    <button className={`start-option-card ${isOutline ? 'is-outline' : ''}`} onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </button>
  )
}
export default OptionCard
