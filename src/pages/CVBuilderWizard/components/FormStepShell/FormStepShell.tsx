import React from 'react'
import FormActions from '@/shared_components/FormActions/FormActions'
import type { FormStepShellProps } from './FormStepShell.types'
import './FormStepShell.css'

const FormStepShell: React.FC<FormStepShellProps> = ({
  stepTitle,
  stepSubtitle,
  children,
  onSubmit,
  onBack,
  isLastStep,
  submitText,
}) => {
  return (
    <div className="form-step-content">
      <h1 className="main-title form-title">{stepTitle}</h1>
      {stepSubtitle && <p className="subtitle form-subtitle">{stepSubtitle}</p>}
      
      <form onSubmit={onSubmit}>
        {children}
        <FormActions 
          onBack={onBack} 
          isLastStep={isLastStep} 
          submitText={submitText}
        />
      </form>
    </div>
  )
}

export default FormStepShell
