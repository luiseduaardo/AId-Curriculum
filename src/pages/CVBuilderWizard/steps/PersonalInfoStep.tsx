import React, { useState } from 'react'
import type { CVRequest } from '@/types/resume'
import type { WizardStepProps } from '../WizardStep.types'
import FormStepShell from '../components/FormStepShell/FormStepShell'

// Tipo local para simplificar o useState
type FormDataStep = Pick<CVRequest, 'full_name' | 'desired_role' | 'email' | 'phone'>

const PersonalInfoStep: React.FC<WizardStepProps> = ({ data, onNext, onBack, stepTitle, isLastStep }) => {
  // AÇÃO DE PERSISTÊNCIA: Inicializa o estado local com os dados globais
  const [formData, setFormData] = useState<FormDataStep>({
    full_name: data.full_name || '',
    desired_role: data.desired_role || '',
    email: data.email || '',
    phone: data.phone || '',
  })
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(formData) // Salva os 4 campos no estado do Wizard e avança
  }

  return (
    <FormStepShell
      stepTitle="Informações Pessoais"
      stepSubtitle="Insira suas informações de contato e o título profissional que você deseja no currículo."
      onSubmit={handleSubmit}
      onBack={onBack}
      isLastStep={isLastStep}
    >
      {/* NOVO LAYOUT: Segue o protótipo 5A (Rótulos e placeholders) */}
      <div className="form-grid">
                
        {/* Campo Nome Completo (Full Width) */}
        <div className="form-group full-width">
          <label htmlFor="full_name">Nome Completo</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="form-input"
            required
          />
        </div>
                
        {/* Campo Título Profissional (Full Width) */}
        <div className="form-group full-width">
          <label htmlFor="desired_role">Título Profissional</label>
          <input
            type="text"
            id="desired_role"
            name="desired_role"
            value={formData.desired_role}
            onChange={handleChange}
            placeholder="Ex: Desenvolvedor Full Stack"
            className="form-input"
            required
          />
        </div>
                
        {/* Campo Email (Meia Largura - Esquerda) */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email as string}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="form-input"
            required
          />
        </div>

        {/* Campo Telefone (Meia Largura - Direita) */}
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone as string}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            className="form-input"
          />
        </div>
      </div>
    </FormStepShell>
  )
}

export default PersonalInfoStep
