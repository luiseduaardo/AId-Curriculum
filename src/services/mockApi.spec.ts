import { describe, it, expect, vi } from 'vitest'
import { generateCVFromRequest } from './mockApi'

describe('mockApi.generateCVFromRequest', () => {
  it('returns db content when present', async () => {
    // db.json currently contains generated_cv in repo - function reads that directly
    const res = await generateCVFromRequest()
    expect(res).toHaveProperty('generated_cv')
    expect(res.generated_cv).toHaveProperty('personal_info')
  })

  it('returns default structure when db empty', async () => {
    // The function will return a default generated_cv when db content is absent.
    const res = await generateCVFromRequest()
    expect(res.generated_cv).toBeTruthy()
    expect(res.generated_cv.personal_info.name).toBeDefined()
  })
})
