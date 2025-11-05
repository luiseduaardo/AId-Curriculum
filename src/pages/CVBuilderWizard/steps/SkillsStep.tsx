import React, { useState } from 'react'
import type { CVRequest } from '@/types/resume'
import type { WizardStepProps } from '../WizardStep.types'
import FormStepShell from '../components/FormStepShell/FormStepShell'

type Props = WizardStepProps & { data: CVRequest }

const SkillsStep: React.FC<Props> = ({ data, onNext, onBack, isLastStep, stepTitle }) => {
  const [skills, setSkills] = useState(data.skills || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ skills })
  }

  return (
    <FormStepShell
      stepTitle={stepTitle}
      stepSubtitle="Liste suas habilidades técnicas e comportamentais. Ex: JavaScript, React, trabalho em equipe, Liderança..."
      onSubmit={handleSubmit}
      onBack={onBack}
      isLastStep={isLastStep}
    >
        <div className="form-group full-width">
            <textarea
                className="form-textarea"
                placeholder="Habilidades Técnicas e Comportamentais..."
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={10}
                required
            />
        </div>
    </FormStepShell>
  )
}

export default SkillsStep
