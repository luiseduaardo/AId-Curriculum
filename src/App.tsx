import React from 'react'
import Router from '@/routes/Router'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  )
}
