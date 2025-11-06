import type { CVRequest, CVResponse } from '@/types/resume'
import { generateCVFromRequest } from './mockApi'

/**
 * Fetch the user's CV by id from the data layer. Returns null when not found.
 * In the future, replace the underlying call to a real API.
 */
/**
 * The real API currently does not persist CVs by id. This function is a
 * placeholder for future DB/API integration and returns null for now.
 */
// parameter intentionally unused while API is not persisting CVs
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export async function fetchUserCV(_userId: string): Promise<CVResponse | null> {
  // Future: call API endpoint to fetch by id
  return null
}

/**
 * Generate a CV from a form/request object. Uses the mock generator for now.
 */
export async function createCVFromRequest(req: CVRequest): Promise<CVResponse> {
  return generateCVFromRequest(req)
}

/**
 * Public API surface: accept CVRequest and return CVResponse (mocked for now).
 * Mirrors the server contract: input CVRequest -> output CVResponse.
 */
export async function submitCVRequest(req: CVRequest): Promise<CVResponse> {
  // Basic validation: required fields
  if (!req.full_name) throw new Error('full_name is required')
  if (!req.professional_experience) throw new Error('professional_experience is required')
  if (!req.education) throw new Error('education is required')
  if (!req.skills) throw new Error('skills is required')

  // Forward to mock generator for now
  return generateCVFromRequest(req)
}

/**
 * Convenience: fetch or generate depending on parameters.
 * If userId provided, return stored CV; otherwise generate from request.
 */
export async function getOrCreateCV(opts: { userId?: string; request?: CVRequest }): Promise<CVResponse | null> {
  if (opts.userId) return fetchUserCV(opts.userId)
  if (opts.request) return createCVFromRequest(opts.request)
  return null
}
