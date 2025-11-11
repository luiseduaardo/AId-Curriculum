import type { CVResponse } from '@/types/resume'
import db from './db.json'

export async function generateCVFromRequest(): Promise<CVResponse> {
  const dbContent = (db as unknown as { cv_content?: CVResponse })?.cv_content
  if (dbContent?.generated_cv) return dbContent

  return {
    generated_cv: {
      personal_info: { name: 'Usuário', title: '', email: '', phone: '' },
      professional_summary: '',
      experience_entries: [],
      education_entries: [],
      skills: [],
      achievements: null,
      certifications: null,
      languages: [],
    },
  }
}
