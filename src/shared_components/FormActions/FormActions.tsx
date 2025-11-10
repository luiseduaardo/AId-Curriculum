import React from 'react'
import './FormActions.css'

interface FormActionsProps {
  onBack: () => void;
  isLastStep: boolean;
  submitText?: string;
  canSubmit?: boolean; // Para desativar se o formulário não for válido
}

const FormActions: React.FC<FormActionsProps> = ({ onBack, isLastStep, submitText = 'Próximo', canSubmit = true }) => {
  return (
    <div className="form-actions">
        <button type="button" className="btn-back" onClick={onBack}>Voltar</button>
        {/* O botão de submissão deve ser do tipo 'submit' pois está dentro de um <form> */}
        <button 
          type="submit"
          className="btn-primary" 
          disabled={!canSubmit}
        >
          {isLastStep ? 'Gerar Currículo' : submitText}
        </button>
    </div>
  )
}

export default FormActions
