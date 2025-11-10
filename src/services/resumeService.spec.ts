import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as resumeService from './resumeService'
import * as mockApi from './mockApi'

describe('resumeService.submitCVRequest', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('throws when required fields are missing', async () => {
    await expect(resumeService.submitCVRequest({} as any)).rejects.toThrow('full_name is required')

    await expect(resumeService.submitCVRequest({ full_name: 'A' } as any)).rejects.toThrow('professional_experience is required')
    await expect(
      resumeService.submitCVRequest({ full_name: 'A', professional_experience: [] } as any)
    ).rejects.toThrow('education is required')
    await expect(
      resumeService.submitCVRequest({ full_name: 'A', professional_experience: [], education: [] } as any)
    ).rejects.toThrow('skills is required')
  })

  it('calls generateCVFromRequest on valid input', async () => {
    const fakeResponse = { generated_cv: { personal_info: { name: 'X' } } }
    vi.spyOn(mockApi, 'generateCVFromRequest').mockResolvedValueOnce(fakeResponse as any)

    const req = { full_name: 'A', professional_experience: [], education: [], skills: [] } as any
    const res = await resumeService.submitCVRequest(req)
    expect(res).toBe(fakeResponse)
  })

  it('createCVFromRequest delegates to generateCVFromRequest', async () => {
    const fakeResponse = { generated_cv: { personal_info: { name: 'FromCreate' } } }
    vi.spyOn(mockApi, 'generateCVFromRequest').mockResolvedValueOnce(fakeResponse as any)

    const res = await resumeService.createCVFromRequest({} as any)
    expect(res).toBe(fakeResponse)
  })

  it('getOrCreateCV returns null for userId path (fetchUserCV returns null)', async () => {
    // spy fetchUserCV (it returns null currently)
    vi.spyOn(resumeService, 'fetchUserCV').mockResolvedValueOnce(null)
    const res = await resumeService.getOrCreateCV({ userId: 'abc' })
    expect(res).toBeNull()
  })

  it('getOrCreateCV with request delegates to createCVFromRequest', async () => {
    const fakeResponse = { generated_cv: { personal_info: { name: 'Req' } } }
    // createCVFromRequest delegates to mockApi.generateCVFromRequest internally,
    // spy the mockApi function so we intercept the internal call
    vi.spyOn(mockApi, 'generateCVFromRequest').mockResolvedValueOnce(fakeResponse as any)
    const res = await resumeService.getOrCreateCV({ request: {} as any })
    expect(res).toBe(fakeResponse)
  })

  it('getOrCreateCV returns null when neither userId nor request provided', async () => {
    const res = await resumeService.getOrCreateCV({})
    expect(res).toBeNull()
  })
})
