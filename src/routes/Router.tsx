import React from 'react'
import HomePage from '@/pages/HomePage'
import StartPage from '@/pages/StartPage'
import NewCVTypePage from '@/pages/NewCVTypePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// NOVO: Componente que renderiza as rotas com a location para facilitar transições
const Router = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="homepage"
              initial="initial"
              animate="in"
              exit="out"
              variants={{ initial: { opacity: 0, x: 20 }, in: { opacity: 1, x: 0 }, out: { opacity: 0, x: -20 } }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="page-transition-wrapper"
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/start"
          element={
            <motion.div
              key="startpage"
              initial="initial"
              animate="in"
              exit="out"
              variants={{ initial: { opacity: 0, x: 20 }, in: { opacity: 1, x: 0 }, out: { opacity: 0, x: -20 } }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="page-transition-wrapper"
            >
              <StartPage />
            </motion.div>
          }
        />
        <Route
          path="/new-cv"
          element={
            <motion.div
              key="newcvtypepage"
              initial="initial"
              animate="in"
              exit="out"
              variants={{ initial: { opacity: 0, x: 20 }, in: { opacity: 1, x: 0 }, out: { opacity: 0, x: -20 } }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="page-transition-wrapper"
            >
              <NewCVTypePage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
