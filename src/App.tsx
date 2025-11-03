import React from 'react'
import Header from '@/components/Header'
import Router from '@/routes/Router'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <main>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  )
}
