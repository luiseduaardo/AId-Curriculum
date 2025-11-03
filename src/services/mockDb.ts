import type { CVResponse, GeneratedCV, CVRequest } from '@/types/resume'

const mockGeneratedCV: GeneratedCV = {
  personal_info: {
    name: 'João Pereira',
    title: 'Engenheiro de Dados',
    email: 'joao.pereira@example.com',
    phone: '11999998888',
  },
  professional_summary:
    'Engenheiro de Dados com 6 anos de experiência em pipelines ETL, processamento em lote e streaming.',
  experience_entries: [
    {
      title: 'Engenheiro de Dados Sênior',
      company: 'DataCorp',
      period: '2021 - Presente',
      achievements: [
        'Projetou pipelines de dados que reduziram latência em 40%',
        'Migrou infra on-prem para cloud com sucesso',
      ],
    },
    {
      title: 'Analista de Dados',
      company: 'InsightLabs',
      period: '2018 - 2021',
      achievements: ['Criou modelos de transformação e normalização de dados'],
    },
  ],
  education_entries: [
    { degree: 'Bacharel em Engenharia de Computação', institution: 'USP', period: '2013 - 2017' },
  ],
  skills: ['Python', 'SQL', 'Spark', 'AWS'],
  achievements: ['Prêmio de Inovação DataCorp 2022'],
  certifications: ['AWS Certified Data Analytics'],
  languages: [{ name: 'Português', level: 'Nativo' }, { name: 'Inglês', level: 'Intermediário' }],
}

// Simple compatibility analyzer that compares skills
function analyzeCompatibilitySimple(cv: GeneratedCV, targetDescription?: string) {
  if (!targetDescription) return null

  // naive extraction: find keywords in targetDescription
  const requiredSkills = ['Python', 'SQL', 'Spark', 'Kubernetes', 'AWS']
  const skillsStatus = requiredSkills.map((s) => ({ name: s, has_skill: cv.skills.includes(s) }))

  const matchCount = skillsStatus.filter((s) => s.has_skill).length
  const score = Math.round((matchCount / requiredSkills.length) * 100)

  return {
    compatibility_score: score,
    skills: skillsStatus,
    improvement_suggestions: skillsStatus
      .filter((s) => !s.has_skill)
      .map((s) => `Considere aprender ${s.name}`),
    learning_resources: skillsStatus
      .filter((s) => !s.has_skill)
      .map((s) => ({
        title: `${s.name} - Course`,
        url: 'https://example.com',
        type: 'course',
        platform: 'Example',
        description: `Recurso para aprender ${s.name}`,
      })),
  }
}

export async function generateCVFromRequest(req: CVRequest): Promise<CVResponse> {
  // For now ignore request fields and return a generated CV based on request.full_name
  const generated: CVResponse = {
    generated_cv: {
      ...mockGeneratedCV,
      personal_info: {
        ...mockGeneratedCV.personal_info,
        name: req.full_name || mockGeneratedCV.personal_info.name,
        email: req.email ?? mockGeneratedCV.personal_info.email,
        phone: req.phone ?? mockGeneratedCV.personal_info.phone,
        title: req.desired_role || mockGeneratedCV.personal_info.title,
      },
    },
    job_compatibility: analyzeCompatibilitySimple(mockGeneratedCV, req.target_job_description ?? req.desired_role ?? undefined) ?? undefined,
  }

  // simulate async
  await new Promise((r) => setTimeout(r, 30))
  return generated
}
