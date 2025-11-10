import { describe, it, expect } from 'vitest'
import { exampleCVRequest, exampleCVResponse } from './resume'

describe('types example objects', () => {
  it('exampleCVRequest has expected fields', () => {
    expect(exampleCVRequest).toHaveProperty('full_name')
    expect(exampleCVRequest).toHaveProperty('skills')
  })

  it('exampleCVResponse contains generated_cv with personal_info', () => {
    expect(exampleCVResponse).toHaveProperty('generated_cv')
    expect(exampleCVResponse.generated_cv).toHaveProperty('personal_info')
  })
})
