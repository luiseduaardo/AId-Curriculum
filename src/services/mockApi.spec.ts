import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// We'll dynamically import the module under test after mocking the db import.
// This ensures the module reads the mocked value.

describe('mockApi.generateCVFromRequest', () => {
  afterEach(() => {
    // restore mocks
    vi.resetModules()
    vi.restoreAllMocks()
  })

  it('returns db content when present', async () => {
    // Mock './db.json' to export a cv_content with generated_cv
    const fakeDb = { cv_content: { generated_cv: { personal_info: { name: 'Teste' } } } }
    vi.doMock('./db.json', () => ({ default: fakeDb }))

    const { generateCVFromRequest } = await import('./mockApi')
    const res = await generateCVFromRequest()

    expect(res).toHaveProperty('generated_cv')
    expect(res.generated_cv.personal_info.name).toBe('Teste')
  })

  it('returns default structure when cv_content missing', async () => {
    // Mock './db.json' to export an object without cv_content
    const fakeDb = { some_other: 123 }
    vi.doMock('./db.json', () => ({ default: fakeDb }))

    const { generateCVFromRequest } = await import('./mockApi')
    const res = await generateCVFromRequest()

    expect(res).toHaveProperty('generated_cv')
    expect(res.generated_cv.personal_info.name).toBe('Usuário')
    expect(res.generated_cv.experience_entries).toBeInstanceOf(Array)
  })

  it('returns default structure when db import is undefined', async () => {
    // Simulate a module that exports undefined as default
    vi.doMock('./db.json', () => ({ default: undefined }))

    const { generateCVFromRequest } = await import('./mockApi')
    const res = await generateCVFromRequest()

    expect(res).toHaveProperty('generated_cv')
    expect(res.generated_cv.personal_info.name).toBe('Usuário')
  })
})
