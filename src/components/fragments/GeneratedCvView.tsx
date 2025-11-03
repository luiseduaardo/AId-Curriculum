import type { GeneratedCV } from "../../types/resume";
import { ProfileInfo } from "./ProfileInfo";
import { ExperienceList } from "./ExperienceList";
import { EducationList } from "./EducationList";
import { SkillsPills } from "./SkillsPills";

export function GeneratedCvView({ cv }: Readonly<{ cv: GeneratedCV }>) {
  return (
    <div>
      <ProfileInfo info={cv.personal_info} />
      {cv.professional_summary && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Resumo Profissional</h3>
          <p>{cv.professional_summary}</p>
        </div>
      )}
      <ExperienceList items={cv.experience_entries} />
      <EducationList items={cv.education_entries} />
      <SkillsPills skills={cv.skills} />
      {cv.certifications && cv.certifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Certificações</h3>
            <ul className="list-disc ml-6">
            {cv.certifications.map((c: string) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
