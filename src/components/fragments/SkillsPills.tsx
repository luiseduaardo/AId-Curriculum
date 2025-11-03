export function SkillsPills({ skills }: Readonly<{ skills: string[] }>) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <span key={s} className="px-3 py-1 rounded-full bg-green-200 text-green-900">{s}</span>
        ))}
      </div>
    </div>
  );
}
