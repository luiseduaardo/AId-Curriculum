import type { PersonalInfo } from "../../types/resume";

export function ProfileInfo({ info }: { info: PersonalInfo }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Informaes Pessoais</h3>
      <ul className="space-y-1 text-sm">
        <li><b>Nome:</b> {info.name}</li>
        <li><b>Ttulo:</b> {info.title}</li>
        {info.email && <li><b>Email:</b> {info.email}</li>}
        {info.phone && <li><b>Telefone:</b> {info.phone}</li>}
      </ul>
    </div>
  );
}
