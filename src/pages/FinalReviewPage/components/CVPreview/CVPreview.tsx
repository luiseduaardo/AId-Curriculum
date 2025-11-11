import React from 'react'
import type { GeneratedCV } from '@/types/resume'
import './CVPreview.css'

interface CVPreviewProps { cv: GeneratedCV }

const CVPreview: React.FC<CVPreviewProps> = ({ cv }) => {
  return (
    <div className="cv-preview-page">
      <div className="cv-header">
        <h2 className="cvp-name">{cv.personal_info.name}</h2>
        <p className="cvp-title">{cv.personal_info.title}</p>
        <p className="cvp-contact">{cv.personal_info.email} {cv.personal_info.phone ? `| ${cv.personal_info.phone}` : ''}</p>
      </div>
      
      <div className="cv-section">
        <h3 className="cvp-section-title">Resumo Profissional</h3>
        <p className="cvp-summary">{cv.professional_summary}</p>
      </div>

      <div className="cv-section">
        <h3 className="cvp-section-title">Experiência</h3>
        {cv.experience_entries.map((e) => (
          <div key={`${e.title}-${e.company}-${e.period}`} className="cvp-exp-item">
            <strong>{e.title}</strong> na {e.company} <span className="cvp-period">{e.period}</span>
            <ul className="cvp-achievements">
              {e.achievements.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        ))}
      </div>
      
      {cv.education_entries.length > 0 && (
          <div className="cv-section">
            <h3 className="cvp-section-title">Educação</h3>
      {cv.education_entries.map((e) => (
        <p key={`${e.degree}-${e.institution}`}>{e.degree} em {e.institution} ({e.period})</p>
      ))}
          </div>
      )}
    </div>
  );
};
export default CVPreview
