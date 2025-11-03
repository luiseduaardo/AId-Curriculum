import type { GeneratedCV } from '../../types/resume';
import type { TemplateStyle } from '../styles/cvStyles';

export interface CvPreviewProps {
  cv: GeneratedCV;
  style: TemplateStyle;
}
