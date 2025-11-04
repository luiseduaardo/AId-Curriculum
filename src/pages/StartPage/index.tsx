import React from 'react'
import './StartPage.css'
// useNavigate not needed here; header handles back navigation
import StartOptionCard from './components/StartOptionCard'

// Ícones SVG simples (substituindo o "raio" e o "documento")
const SparkleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12h14M12 5l7 7-7 7M12 5l-7 7 7 7M12 5l-7 7 7 7"></path><path d="M12 5l7 7-7 7M12 5l-7 7 7 7"></path></svg>
)
const FileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
)


const StartPage: React.FC = () => {
  // Função placeholder para navegação (a ser definida com a próxima tela)
  const handleSelectOption = (path: string) => {
    console.log(`Navegando para: ${path}`)
    // navigate(path) // O header global cuidará do voltar/navegação
  }

  return (
    <div className="start-page-root">
      
  {/* REMOVER O HEADER DUPLICADO, POIS ELE É INJETADO PELO App.tsx */}
  {/* <header className="start-header">... REMOVIDO ...</header> */}

      {/* Conteúdo Principal */}
      <section className="start-content">
        <h1 className="start-title">Qual seu ponto de partida?</h1>
        
        <div className="start-options-container">
          <StartOptionCard
            icon={<SparkleIcon />}
            title="Comece do zero"
            description="Vamos construir seu currículo juntos através de perguntas simples."
            onClick={() => handleSelectOption('/new-cv')} // Rota futura
          />
          <StartOptionCard
            icon={<FileIcon />}
            title="Melhore um currículo pronto"
            description="Cole seu currículo atual e receba análise e sugestões."
            onClick={() => handleSelectOption('/optimize-cv')} // Rota futura
          />
        </div>
      </section>
    </div>
  )
}

export default StartPage
