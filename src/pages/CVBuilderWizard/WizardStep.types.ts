import type { CVRequest } from '@/types/resume'

export interface WizardStepProps {
  data: CVRequest;
  onNext: (data: Partial<CVRequest>) => void;
  onBack: () => void;
  isLastStep: boolean;
  stepTitle: string;
  flowType: 'Optimized' | 'Generic';
}
