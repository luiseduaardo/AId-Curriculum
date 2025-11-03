import type { EducationEntry } from "../../types/resume";

export function EducationList({ items }: { items: EducationEntry[] }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Educação</h3>
      {items.length === 0 ? (
        <p>Nenhuma formação cadastrada.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((edu) => (
            <li key={`${edu.degree}-${edu.institution}-${edu.period}`} className="border-b pb-2">
              <div><b>{edu.degree}</b> - {edu.institution}</div>
              <div className="text-sm text-gray-600">{edu.period}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
