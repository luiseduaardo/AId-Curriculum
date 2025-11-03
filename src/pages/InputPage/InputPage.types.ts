import type { CVResponse } from '../../types/resume';

export interface InputPageProps {
  onBack: () => void;
  onAnalyzeComplete: (result: CVResponse, goToTemplates?: boolean) => void;
}
