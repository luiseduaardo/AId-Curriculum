import type { ExperienceEntry } from "../../types/resume";

export function ExperienceList({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Experiência Profissional</h3>
      {items.length === 0 ? (
        <p>Nenhuma experiência cadastrada.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((exp) => (
            <li key={`${exp.title}-${exp.company}-${exp.period}`} className="border-b pb-2">
              <div><b>{exp.title}</b> - {exp.company}</div>
              <div className="text-sm text-gray-600">{exp.period}</div>
              <ul className="list-disc ml-6">
                {exp.achievements.map((a: string) => <li key={a}>{a}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
