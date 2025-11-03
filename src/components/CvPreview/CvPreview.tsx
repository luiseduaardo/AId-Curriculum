import type { GeneratedCV, Language } from '../../types/resume';
import { styleMap, type TemplateStyle } from '../styles/cvStyles';
import './CvPreview.css';
import type { CvPreviewProps } from './CvPreview.types';

function escapeHtml(input: string) {
  if (!input) return '';
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function CvPreview({ cv, style }: Readonly<CvPreviewProps>) {
  const styles = styleMap[style];
  const { colors, fonts } = styles;

  return (
    <div className="cv-preview" style={{
      fontFamily: fonts?.body || 'system-ui, -apple-system, sans-serif',
      color: colors.text,
      lineHeight: 1.5,
      padding: '2rem',
      background: colors.background,
      width: '100%',
      height: '100%',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontFamily: fonts?.heading,
        fontSize: '2rem',
        marginBottom: '0.5rem',
        color: colors.primary,
      }}>
        {cv.personal_info?.name}
      </h1>

      <p style={{
        fontSize: '1.25rem',
        marginBottom: '1rem',
        color: colors.accent,
      }}>
        {cv.personal_info?.title}
      </p>

      <div className="flex gap-8 mb-8 text-sm">
        {cv.personal_info?.email && (
          <div><strong>Email:</strong> {cv.personal_info.email}</div>
        )}
        {cv.personal_info?.phone && (
          <div><strong>Telefone:</strong> {cv.personal_info.phone}</div>
        )}
      </div>

      {cv.professional_summary && (
        <section className="mb-8">
          <h2 style={{
            fontFamily: fonts?.heading,
            fontSize: '1.25rem',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}>
            Sobre Mim
          </h2>
          <p>{cv.professional_summary}</p>
        </section>
      )}

      <section className="mb-8">
        <h2 style={{
          fontFamily: fonts?.heading,
          fontSize: '1.25rem',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${colors.accent}`,
          color: colors.accent,
        }}>
          Experiência Profissional
        </h2>
        {cv.experience_entries?.length > 0 ? (
          cv.experience_entries.map((exp, index: number) => (
              <div key={`${exp.title}-${exp.company}-${index}`} className="mb-4">
              <div style={{ fontWeight: 600, color: colors.primary }}>
                {exp.title} - {exp.company}
              </div>
              <div style={{ fontSize: '0.875rem', color: colors.accent, marginBottom: '0.5rem' }}>
                {exp.period}
              </div>
              <ul className="list-disc pl-6">
                {exp.achievements.map((achievement: string) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Nenhuma experiência cadastrada.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 style={{
          fontFamily: fonts?.heading,
          fontSize: '1.25rem',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${colors.accent}`,
          color: colors.accent,
        }}>
          Educação
        </h2>
        {cv.education_entries?.length > 0 ? (
          cv.education_entries.map((edu, index: number) => (
              <div key={`${edu.degree}-${edu.institution}-${index}`} className="mb-4">
              <div style={{ fontWeight: 600, color: colors.primary }}>
                {edu.degree} - {edu.institution}
              </div>
              <div style={{ fontSize: '0.875rem', color: colors.accent }}>
                {edu.period}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma formação cadastrada.</p>
        )}
      </section>

      {cv.skills?.length > 0 && (
        <section className="mb-8">
          <h2 style={{
            fontFamily: fonts?.heading,
            fontSize: '1.25rem',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}>
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
              {cv.skills.map((skill: string) => (
                <span
                  key={skill}
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  backgroundColor: colors.accent,
                  color: colors.background,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {cv.certifications && cv.certifications.length > 0 && (
        <section className="mb-8">
          <h2 style={{
            fontFamily: fonts?.heading,
            fontSize: '1.25rem',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}>
            Certificações
          </h2>
          <ul className="list-disc pl-6">
                {cv.certifications.map((cert: string) => (
                  <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}

      {cv.languages && cv.languages.length > 0 && (
        <section className="mb-8">
          <h2 style={{
            fontFamily: fonts?.heading,
            fontSize: '1.25rem',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}>
            Idiomas
          </h2>
          <div className="grid grid-cols-2 gap-4">
              {cv.languages.map((lang: Language) => (
                  <div key={lang.name} className="flex justify-between">
                  <span style={{ color: colors.primary }}>{lang.name}</span>
                  <span style={{ color: colors.accent }}>{lang.level}</span>
                </div>
              ))}
          </div>
        </section>
      )}

      {cv.achievements && cv.achievements.length > 0 && (
        <section className="mb-8">
          <h2 style={{
            fontFamily: fonts?.heading,
            fontSize: '1.25rem',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid ${colors.accent}`,
            color: colors.accent,
          }}>
            Conquistas
          </h2>
          <ul className="list-disc pl-6">
              {cv.achievements.map((achievement: string) => (
                <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
