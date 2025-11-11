import React, { useState } from 'react'
import type { CVRequest } from '@/types/resume'
import type { WizardStepProps } from '../WizardStep.types'
import FormStepShell from '../components/FormStepShell/FormStepShell'

type Props = WizardStepProps & { data: CVRequest }

const JobDescriptionStep: React.FC<Props> = ({ data, onNext, onBack, isLastStep, stepTitle }) => {
  const [jobDescription, setJobDescription] = useState(data.target_job_description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ target_job_description: jobDescription })
  }

  return (
    <FormStepShell
      stepTitle={stepTitle}
      stepSubtitle="Cole aqui a descrição completa da vaga para otimização com IA."
      onSubmit={handleSubmit}
      onBack={onBack}
      isLastStep={isLastStep}
  >
        <textarea
            className="form-textarea"
            placeholder="Cole aqui a descrição completa da vaga..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={10}
            required
        />
    </FormStepShell>
  )
}

export default JobDescriptionStep
