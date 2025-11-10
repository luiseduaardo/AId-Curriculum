import React from 'react'
import './HeroSection.css'
import Title from '@/shared_components/Title'

const HeroSection: React.FC = () => {
  return (
    <div className="hp-hero">
      <div className="hp-hero-inner">
  <Title />
        <p className="hp-subtitle">
          Transforme seu currículo com inteligência artificial. Análise de compatibilidade,
          sugestões personalizadas e templates profissionais.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
