import React from 'react'
import type { JobCompatibilityAnalysis } from '@/types/resume'
import './SuggestionsTab.css'

const SuggestionsTab: React.FC<{ compatibilityData: JobCompatibilityAnalysis }> = ({ compatibilityData }) => (
    <div className="tab-content-section suggestions-tab-content">
        <h3 className="section-title">💡 Sugestões de Melhoria</h3>
        <ul className="suggestion-list">
            {compatibilityData.improvement_suggestions.map((s) => (
                <li key={s} className="suggestion-item">{s}</li>
            ))}
        </ul>
    </div>
)
export default SuggestionsTab
