import React from 'react'
import './RouteTransitionWrapper.css'

type Props = {
  children: React.ReactNode
  key?: string
}

// Simple wrapper that can be later replaced by framer-motion or react-transition-group
const RouteTransitionWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="route-transition-wrapper">
      {children}
    </div>
  )
}

export default RouteTransitionWrapper
