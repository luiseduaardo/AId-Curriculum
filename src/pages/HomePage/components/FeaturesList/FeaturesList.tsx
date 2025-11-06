import React from 'react'
import './FeaturesList.css'

const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="features-icon" aria-hidden>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const FeaturesList: React.FC = () => {
  return (
    <div className="hp-features">
      <h2 className="hp-features-title">Com Aid, você possui:</h2>
      <ul className="hp-features-list">
        <li><CheckIcon /> <span>Adaptabilidade ao perfil da vaga utilizando IA;</span></li>
        <li><CheckIcon /> <span>Análise de currículo com base em um score próprio;</span></li>
        <li><CheckIcon /> <span>Recomendação de melhorias e aperfeiçoamento em habilidades;</span></li>
        <li><CheckIcon /> <span>Um currículo pronto em pdf;</span></li>
        <li><CheckIcon /> <span>E muito mais!</span></li>
      </ul>
    </div>
  )
}

export default FeaturesList
