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

// Rich compatibility analyzer with more suggestions and learning resources
function analyzeCompatibilityRich(cv: GeneratedCV, targetDescription?: string) {
  // If no target description is provided, still perform a heuristic analysis based on a default set
  const requiredSkills = ['Python', 'SQL', 'Spark', 'Kubernetes', 'AWS', 'ETL', 'NoSQL', 'Terraform']
  const skillsStatus = requiredSkills.map((s) => ({ name: s, has_skill: cv.skills.includes(s) }))

  const matchCount = skillsStatus.filter((s) => s.has_skill).length
  const score = Math.round((matchCount / requiredSkills.length) * 100)

  return {
    compatibility_score: score, // Ex: 62%
    skills: skillsStatus,
    
    // Sugestões ricas baseadas no protótipo
    improvement_suggestions: [
      "Destaque suas experiências com projetos práticos e resultados quantificáveis. Use números e métricas sempre que possível.",
      "Reorganize suas experiências profissionais em ordem cronológica inversa, começando pela mais recente.",
      "Adicione uma seção de 'Resumo Profissional' no início do currículo destacando suas principais qualificações.",
      "Use verbos de ação no início de cada item das suas experiências (ex: 'Desenvolvi', 'Implementei', 'Liderei').",
      "Personalize seu currículo para incluir palavras-chave específicas mencionadas na descrição da vaga.",
    ],
    
    // Recursos de Aprendizado mockados
    learning_resources: [
      // Kubernetes
      { title: "Kubernetes Master Course", url: "https://udemy.com/kube", type: "course", platform: "Udemy", description: "Curso prático de Kubernetes (containers e orquestração)" },
      { title: "Kubernetes Official Docs", url: "https://kubernetes.io/docs", type: "documentation", platform: "K8s", description: "Documentação oficial do Kubernetes" },
      // Terraform
      { title: "Terraform HashiCorp Course", url: "https://hashicorp.com/terraform", type: "course", platform: "HashiCorp", description: "Curso oficial e guias do Terraform" },
      { title: "Terraform Crash Course", url: "https://youtube.com/terraform", type: "tutorial", platform: "YouTube", description: "Introdução prática ao Terraform" },
    ],
  };
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
  job_compatibility: analyzeCompatibilityRich(mockGeneratedCV, req.target_job_description ?? req.desired_role ?? undefined) ?? undefined,
  }

  // simulate async
  await new Promise((r) => setTimeout(r, 30))
  return generated
}
