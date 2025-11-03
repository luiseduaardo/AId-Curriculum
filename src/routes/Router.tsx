import React from 'react'
import HomePage from '@/pages/HomePage'
import { Routes, Route } from 'react-router-dom'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}
