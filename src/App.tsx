import React from 'react'
import Header from '@/components/Header'
import Router from '@/routes/Router'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Router />
      </main>
    </div>
  )
}
