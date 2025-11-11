import type { CVRequest } from '@/types/resume'
import { generateCVFromRequest } from './mockApi'

type MetaEnv = { env?: Record<string, string> }
const meta = (import.meta as unknown) as MetaEnv
const USE_MOCK = (meta.env?.VITE_USE_MOCK ?? 'true') === 'true'

async function mockPost<T = unknown>(path: string, body?: unknown): Promise<T> {
  // simple router for mock endpoints
  if (path === '/cv') {
    const req = body as CVRequest
    const res = await generateCVFromRequest(req)
    return res as unknown as T
  }
  throw new Error(`Mock POST handler not implemented for ${path}`)
}

async function realPost<T = unknown>(path: string, body?: unknown): Promise<T> {
  const base = meta.env?.VITE_API_BASE ?? ''
  const res = await fetch(`${base}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(await res.text())
  return (await res.json()) as T
}

async function mockGet<T = unknown>(path: string): Promise<T> {
  // no GET mocks implemented (API currently does not persist CVs)
  throw new Error(`Mock GET handler not implemented for ${path}`)
}

async function realGet<T = unknown>(path: string): Promise<T> {
  const base = meta.env?.VITE_API_BASE ?? ''
  const res = await fetch(`${base}${path}`)
  if (!res.ok) throw new Error(await res.text())
  return (await res.json()) as T
}

export async function post<T = unknown>(path: string, body?: unknown): Promise<T> {
  if (USE_MOCK) return mockPost<T>(path, body)
  return realPost<T>(path, body)
}

export async function get<T = unknown>(path: string): Promise<T> {
  if (USE_MOCK) return mockGet<T>(path)
  return realGet<T>(path)
}

export default { post, get }
