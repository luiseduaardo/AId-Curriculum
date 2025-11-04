import React from 'react'
import { useNavigate } from 'react-router-dom'
import OptionCard from '@/shared_components/OptionCard/OptionCard'
// REMOVER: './NewCVTypePage.css' (Estilos de layout serão movidos)
import PageCardLayout from '@/shared_components/PageCardLayout/PageCardLayout' // NOVO: Importar Layout

// Ícones SVG: Reutilizar o SparkleIcon e criar um novo para o Currículo Genérico
const FileGenericIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
)
const SparkleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12h14M12 5l7 7-7 7M12 5l-7 7 7 7M12 5l-7 7 7 7"></path><path d="M12 5l7 7-7 7M12 5l-7 7 7 7"></path></svg>
)


const NewCVTypePage: React.FC = () => {
  const navigate = useNavigate()

  // Navegar para a rota selecionada
  const handleSelectOption = (path: string) => {
    navigate(path)
  }

  return (
    // NOVO: Usar o PageCardLayout
    <PageCardLayout>
      <div className="content-inner">
        <h1 className="main-title">Tipo de Currículo</h1>
        <p className="subtitle">Você já tem uma vaga em mente?</p>
        
        <div className="options-container">
          <OptionCard
            icon={<FileGenericIcon />}
            title="Currículo Genérico"
            description="Crie um currículo geral sem focar em uma vaga específica"
            onClick={() => handleSelectOption('/new-cv/generic')}
            isOutline
          />
          
          <OptionCard
            icon={<SparkleIcon />}
            title="Currículo Personalizado"
            description="Otimize seu currículo para uma vaga específica"
            onClick={() => handleSelectOption('/new-cv/optimized')}
          />
        </div>
      </div>
    </PageCardLayout>
  )
}

export default NewCVTypePage
