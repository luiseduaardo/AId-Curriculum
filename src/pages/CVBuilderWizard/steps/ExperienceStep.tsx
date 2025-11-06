import React, { useState } from 'react'
import type { CVRequest } from '@/types/resume'
import type { WizardStepProps } from '../WizardStep.types'
import FormStepShell from '../components/FormStepShell/FormStepShell'

type Props = WizardStepProps & { data: CVRequest }

const ExperienceStep: React.FC<Props> = ({ data, onNext, onBack, isLastStep, stepTitle }) => {
  const [experience, setExperience] = useState(data.professional_experience || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ professional_experience: experience })
  }

  return (
    <FormStepShell
      stepTitle={stepTitle}
      stepSubtitle="Descreva suas experiências profissionais, incluindo empresa, cargo, período e principais atividades..."
      onSubmit={handleSubmit}
      onBack={onBack}
      isLastStep={isLastStep}
    >
        <div className="form-group full-width">
            <textarea
                className="form-textarea"
                placeholder="Ex: Desenvolvedor Front-end | Empresa X | 2020-2023 | Principais atividades e resultados alcançados."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows={10}
                required
            />
        </div>
    </FormStepShell>
  )
}

export default ExperienceStep
