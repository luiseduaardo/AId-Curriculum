import type { WizardStepProps } from '../../WizardStep.types'

export interface FormStepShellProps extends Pick<WizardStepProps, 'onBack' | 'isLastStep'> {
  stepTitle: string;
  stepSubtitle?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  submitText?: string;
}
