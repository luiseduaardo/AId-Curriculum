import React from 'react'
// REMOVER: './StartPage.css' (Estilos de layout serão movidos)
import { useNavigate } from 'react-router-dom'
import OptionCard from '@/shared_components/OptionCard/OptionCard'
import PageCardLayout from '@/shared_components/PageCardLayout/PageCardLayout' // NOVO: Importar Layout

// Ícones SVG simples (substituindo o "raio" e o "documento")
const SparkleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12h14M12 5l7 7-7 7M12 5l-7 7 7 7M12 5l-7 7 7 7"></path><path d="M12 5l7 7-7 7M12 5l-7 7 7 7"></path></svg>
)
const FileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
)


const StartPage: React.FC = () => {
  const navigate = useNavigate()

  // Navegar para a rota selecionada
  const handleSelectOption = (path: string) => {
    navigate(path)
  }

  return (
    // NOVO: Usar o PageCardLayout
    <PageCardLayout>
      <section className="start-content content-inner"> {/* Usar a classe content-inner para centralização de texto */}
        <h1 className="main-title">Qual seu ponto de partida?</h1> {/* Mudar para main-title */}
        
        <div className="options-container"> {/* Mudar para options-container */}
          {/* [Manter OptionCard para 'Comece do zero']... */}
          <OptionCard
            icon={<SparkleIcon />}
            title="Comece do zero"
            description="Vamos construir seu currículo juntos através de perguntas simples."
            onClick={() => handleSelectOption('/new-cv')} 
          />
          {/* [Manter OptionCard para 'Melhore um currículo pronto']... */}
          <OptionCard
            icon={<FileIcon />}
            title="Melhore um currículo pronto"
            description="Cole seu currículo atual e receba análise e sugestões."
            onClick={() => handleSelectOption('/optimize-cv')}
          />
        </div>
      </section>
    </PageCardLayout>
  )
}

export default StartPage
