import React from 'react'
import HomePage from '@/pages/HomePage'
// NOVO: Importar a nova página
import StartPage from '@/pages/StartPage'
import { Routes, Route } from 'react-router-dom'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
  {/* NOVA ROTA */}
  <Route path="/start" element={<StartPage />} />
  </Routes>
  )
}
