import type { CVResponse } from '../../types/resume';

export interface ResultsPageProps {
  onBack: () => void;
  onViewTemplates: () => void;
  analysis: CVResponse | null;
}
