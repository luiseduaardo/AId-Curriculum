import type { CVResponse } from '../../types/resume';

export interface TemplatesPageProps {
  onBack: () => void;
  analysis: CVResponse | null;
}
