import type { LearningResource, GeneratedCV } from "../../types/resume";

export function getHomeFeatures(): string[] {
  return [
    "Adaptabilidade ao perfil da vaga utilizando IA",
    "Análise de currículo com base em um score próprio",
    "Recomendação de melhorias e aperfeiçoamento em habilidades",
    "Um currículo pronto em PDF",
    "E muito mais"
  ];
}

export function getSampleLearningResources(): LearningResource[] {
  return [
    {
      title: "Kubernetes for Developers",
      url: "https://example.com/course",
      type: "course",
      platform: "Udemy",
      description: "Curso completo de Kubernetes...",
    },
  ];
}

export function getSampleGeneratedCv(): GeneratedCV {
  return {
    personal_info: {
      name: "Maria Silva",
      title: "Desenvolvedora Full Stack Senior",
      email: "maria@email.com",
      phone: "11987654321",
    },
    professional_summary: "Desenvolvedora Full Stack com 5 anos de experiência em aplicações web.",
    experience_entries: [
      {
        title: "Desenvolvedora Full Stack Senior",
        company: "TechBR",
        period: "2022 - Presente",
        achievements: [
          "Liderou equipe de 5 desenvolvedores",
          "Implementou pipeline de CI/CD"
        ],
      },
    ],
    education_entries: [
      {
        degree: "Bacharel em Ciência da Computação",
        institution: "UFMG",
        period: "2017 - 2021",
      },
    ],
    skills: ["Python (Avançado)", "React (Intermediário)", "AWS (Básico)"],
  };
}
