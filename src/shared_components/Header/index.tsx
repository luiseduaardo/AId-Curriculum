import React from 'react'
import './Header.css'
import Title from '@/shared_components/Title'
import BackButton from '@/shared_components/BackButton/BackButton'
// NOVO: Importar useLocation para verificar a rota
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  // NOVO: Obter a localização atual e o hook de navegação
  const location = useLocation()
  
  // Condição CORRIGIDA: Exibir o BackButton se a rota NÃO for a HomePage ('/')
  const isStartFlow = location.pathname !== '/'
  // A página atual deve usar o Header adaptado (fundo claro, estático)
  const isAdaptedPage = location.pathname === '/start' || location.pathname === '/new-cv' // Incluir a nova rota

  // Determinar o conteúdo da seção 'brand' (depende da rota)
  let brandContent;

  if (isStartFlow) {
    // Na rota do fluxo, mostra o BackButton à esquerda
    brandContent = <BackButton /> // Não precisa do 'to', pois o padrão é navigate(-1)
  } else {
    // Na HomePage ('/'): NÃO MOSTRAR NADA no local do Logo para evitar redundância.
    brandContent = <></>
  }

  return (
    // AJUSTE: Aplicar a classe de adaptação se estiver em qualquer página do fluxo de início
    <header className={`site-header ${isAdaptedPage ? 'is-start-page' : ''}`}>
      <div className="header-inner">
        {/* Exibir botão Voltar ou Logo, dependendo da rota */}
        <div className="brand">
          {brandContent} 
        </div>
        
        {/* Logo AiD sempre à direita nas páginas de fluxo, ou botões na HomePage */}
        <nav className="nav">
          {isStartFlow && <Title small />} 
          {!isStartFlow && <>{/* ... botões de autenticação da HomePage ... */}</>}
        </nav>
      </div>
    </header>
  )
}

export default Header
