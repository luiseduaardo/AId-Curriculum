import React from 'react'
import './Header.css'
import Title from '@/shared_components/Title'
import BackButton from '@/shared_components/BackButton/BackButton'
// NOVO: Importar useLocation para verificar a rota
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  // NOVO: Obter a localização atual e o hook de navegação
  const location = useLocation()
  
  // Condição para exibir o botão 'Voltar' (apenas na rota /start)
  const isStartPage = location.pathname === '/start'

  // Determinar o conteúdo da seção 'brand' (depende da rota)
  let brandContent;

  if (isStartPage) {
    // Na página de início, mostramos o BackButton à esquerda e o logo à direita (no nav)
    brandContent = <BackButton to="/" />
  } else {
    // Na HomePage, mostramos o logo à esquerda
    brandContent = <Title small />
  }

  return (
    // AJUSTE: Remova a classe 'site-header' que tinha 'position: absolute' na HomePage 
    // e use uma classe mais genérica para que o Header não flutue na StartPage.
    <header className={`site-header ${isStartPage ? 'is-start-page' : ''}`}>
      <div className="header-inner">
        {/* Exibir botão Voltar ou Logo, dependendo da rota */}
        <div className="brand">
          {isStartPage && brandContent}
          {!isStartPage && brandContent}
        </div>
        
        {/* Na StartPage, o Logo AiD fica na nav (direita) */}
        <nav className="nav">
          {isStartPage && <Title small />} {/* Logo à direita na StartPage */}
          {!isStartPage && <>{/* ... botões de autenticação ... */}</>}
        </nav>
      </div>
    </header>
  )
}

export default Header
