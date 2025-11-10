import React from 'react'
// NOVO: Importar useNavigate para lidar com a navegação.
import { useNavigate } from 'react-router-dom'
import './CTACard.css'

const CTACard: React.FC = () => {
  // NOVO: Inicializar o hook de navegação.
  const navigate = useNavigate()

  // NOVO: Adicionar a função de clique que direciona para a rota /start
  const handleStartClick = () => {
    navigate('/start') 
  }

  return (
    <aside className="hp-cta">
      <div className="hp-cta-card">
        <h3 className="hp-cta-title">Comece agora mesmo!</h3>
        <p className="hp-cta-copy">Melhore suas chances pro seu emprego dos sonhos</p>
        {/* NOVO: Aplicar o manipulador de clique ao botão */}
        <button 
          className="hp-cta-button" 
          type="button"
          onClick={handleStartClick} // Adicionar onClick
        >
          Criar meu currículo grátis
        </button>
      </div>
    </aside>
  )
}

export default CTACard
