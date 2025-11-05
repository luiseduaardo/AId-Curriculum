import React, { useState } from 'react'
import type { CVRequest } from '@/types/resume'
import type { WizardStepProps } from '../WizardStep.types'
import FormStepShell from '../components/FormStepShell/FormStepShell'

type Props = WizardStepProps & { data: CVRequest }

const EducationStep: React.FC<Props> = ({ data, onNext, onBack, isLastStep, stepTitle }) => {
  const [education, setEducation] = useState(data.education || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ education })
  }

  return (
    <FormStepShell
      stepTitle={stepTitle}
      stepSubtitle="Descreva sua formação acadêmica, cursos e certificações..."
      onSubmit={handleSubmit}
      onBack={onBack}
      isLastStep={isLastStep}
      submitText="Gerar Currículo"
    >
        <div className="form-group full-width">
            <textarea
                className="form-textarea"
                placeholder="Ex: Bacharel em Ciência da Computação, USP (2017-2021). Curso de AWS Certified Cloud Practitioner..."
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                rows={10}
                required
            />
        </div>
    </FormStepShell>
  )
}

export default EducationStep
