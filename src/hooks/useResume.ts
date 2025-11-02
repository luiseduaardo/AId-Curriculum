import { useState } from "react";
import type { CVRequest, CVResponse } from "../types/resume";
import { getSampleGeneratedCv, getSampleLearningResources } from "../components/data/mockData";

export function useResumeApi() {
  const [loading, setLoading] = useState(false);

  async function analyze(payload: CVRequest): Promise<CVResponse> {
    setLoading(true);
    // Simulate network latency
    await new Promise((r) => setTimeout(r, 300));
    setLoading(false);

    return {
      generated_cv: getSampleGeneratedCv(),
      job_compatibility: {
        compatibility_score: 82,
        skills: [
          { name: "Python", has_skill: true },
          { name: "React", has_skill: true },
          { name: "Kubernetes", has_skill: false },
        ],
        improvement_suggestions: ["Considere aprofundar seus conhecimentos em Kubernetes"],
        learning_resources: getSampleLearningResources(),
      },
    };
  }

  return { analyze, loading };
}
