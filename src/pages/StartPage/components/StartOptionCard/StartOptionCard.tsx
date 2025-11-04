import React from 'react'
import './StartOptionCard.css'

type Props = {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

const StartOptionCard: React.FC<Props> = ({ icon, title, description, onClick }) => {
  return (
    <button className="start-option-card" onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </button>
  )
}
export default StartOptionCard
