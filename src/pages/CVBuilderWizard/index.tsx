import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PageCardLayout from '@/shared_components/PageCardLayout/PageCardLayout'
import ProgressIndicator from '@/shared_components/ProgressIndicator/ProgressIndicator'

// Importar os componentes de etapa (a serem criados / já existentes como placeholders)
import JobDescriptionStep from './steps/JobDescriptionStep'
import PersonalInfoStep from './steps/PersonalInfoStep'
import ExperienceStep from './steps/ExperienceStep'
import SkillsStep from './steps/SkillsStep'
import EducationStep from './steps/EducationStep'

import type { CVRequest } from '@/types/resume'
import './CVBuilderWizard.css'

const initialCVRequest: CVRequest = {
    full_name: '',
    desired_role: '',
    professional_experience: '',
    education: '',
    skills: '',
    email: '',
    phone: '',
    target_job_description: '',
}

const CVBuilderWizard: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { isOptimized } = (location.state || { isOptimized: false }) as { isOptimized: boolean }

    const [cvRequest, setCvRequest] = useState<CVRequest>(initialCVRequest)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const STEPS = [
        { id: 'job-description', title: 'Descrição da Vaga', component: JobDescriptionStep, required: isOptimized },
        { id: 'personal-info', title: 'Informações Pessoais', component: PersonalInfoStep, required: true },
        { id: 'experience', title: 'Experiência Profissional', component: ExperienceStep, required: true },
        { id: 'skills', title: 'Habilidades', component: SkillsStep, required: true },
        { id: 'education', title: 'Educação', component: EducationStep, required: true },
    ].filter(step => step.required)

    const totalSteps = STEPS.length
    const isLastStep = currentStepIndex === totalSteps - 1
    const CurrentStepComponent = STEPS[currentStepIndex]?.component ?? (() => <div />)

    const handleNext = (data: Partial<CVRequest>) => {
        setCvRequest(prev => ({ ...prev, ...data }))

        if (isLastStep) {
            console.log('FINAL CV REQUEST:', { ...cvRequest, ...data })
            // TODO: Submeter CV via service e.g. resumeService.create(cvRequest)
            navigate('/result')
        } else {
            setCurrentStepIndex(i => i + 1)
        }
    }

    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(i => i - 1)
        } else {
            navigate('/new-cv')
        }
    }

    const stepProps = {
        data: cvRequest,
        onNext: handleNext,
        onBack: handleBack,
        isLastStep,
        stepTitle: STEPS[currentStepIndex]?.title ?? '',
        flowType: isOptimized ? 'Optimized' : 'Generic',
    }

    return (
        <PageCardLayout>
            <div className="content-inner wizard-page">
                <ProgressIndicator currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
                <div className="wizard-step-title">{STEPS[currentStepIndex]?.title}</div>
                <CurrentStepComponent {...stepProps} />
            </div>
        </PageCardLayout>
    )
}

export default CVBuilderWizard
 
