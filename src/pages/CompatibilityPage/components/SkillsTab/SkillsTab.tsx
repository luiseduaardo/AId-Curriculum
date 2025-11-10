import React from 'react'
import SkillItem from '../SkillItem/SkillItem'
import type { JobCompatibilityAnalysis } from '@/types/resume'
import './SkillsTab.css'

const SkillsTab: React.FC<{ compatibilityData: JobCompatibilityAnalysis }> = ({ compatibilityData }) => (
    <div className="tab-content-section skills-tab-content">
        <h3 className="section-title">Tecnologias e Habilidades Requeridas</h3>
        <div className="skills-container">
            {compatibilityData.skills.map(s => (
                <SkillItem key={s.name} name={s.name} has_skill={s.has_skill} />
            ))}
        </div>
        <div className="legend">
            <p><span className="legend-icon check">✓</span> = Você possui</p>
            <p><span className="legend-icon circle">◯</span> = Recomendado adicionar</p>
        </div>
    </div>
)
export default SkillsTab
