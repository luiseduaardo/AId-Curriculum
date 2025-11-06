export async function apiFetch(path: string, opts: RequestInit = {}){
  const base = import.meta.env.VITE_API_BASE || ''
  const res = await fetch(`${base}${path}`, opts)
  if(!res.ok) throw new Error(await res.text())
  return res.json()
}
