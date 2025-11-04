import React from 'react'
import Router from '@/routes/Router'
import { BrowserRouter, useLocation } from 'react-router-dom'
import Header from '@/shared_components/Header'

function AppContent() {
  const location = useLocation()
  const isFlowPage = location.pathname !== '/'

  return (
    <main className={`app-main-layout ${isFlowPage ? 'is-flow-page' : ''}`}>
      <Header />
      <div className="router-content-wrapper">
        <Router />
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
