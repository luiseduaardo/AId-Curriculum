import React from 'react'
import './ProgressIndicator.css'

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1)
  
  return (
    <div className="progress-bar">
      {stepsArray.map((step) => (
        <div 
          key={step} 
          className={`step ${step <= currentStep ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  )
}

export default ProgressIndicator
