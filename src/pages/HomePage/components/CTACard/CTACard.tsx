import React from 'react'
import './CTACard.css'

const CTACard: React.FC = () => {
  return (
    <aside className="hp-cta">
      <div className="hp-cta-card">
        <h3 className="hp-cta-title">Comece agora mesmo!</h3>
        <p className="hp-cta-copy">Melhore suas chances pro seu emprego dos sonhos</p>
  <button className="hp-cta-button" type="button">Criar meu currículo agora</button>
      </div>
    </aside>
  )
}

export default CTACard
