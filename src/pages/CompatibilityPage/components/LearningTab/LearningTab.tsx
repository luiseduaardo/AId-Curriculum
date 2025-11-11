import React from 'react'
import type { JobCompatibilityAnalysis, LearningResource } from '@/types/resume'
import './LearningTab.css'

const LearningTab: React.FC<{ compatibilityData: JobCompatibilityAnalysis }> = ({ compatibilityData }) => {
    const groupedResources = compatibilityData.learning_resources.reduce((acc, resource) => {
        const skillName = resource.title.split(' - ')[0];
        if (!acc[skillName]) { acc[skillName] = []; }
        acc[skillName].push(resource);
        return acc;
    }, {} as Record<string, LearningResource[]>);

    return (
        <div className="tab-content-section learning-tab-content">
            <h3 className="section-title">📚 Recursos de Aprendizado</h3>
            {Object.entries(groupedResources).map(([skill, resources]) => (
                <div key={skill} className="skill-resource-group">
                    <h4 className="skill-group-title">{skill}</h4>
                    <ul className="resource-list">
                        {resources.map(r => (
                            <li key={r.url} className="resource-item-box">
                                <a href={r.url} target="_blank" rel="noopener noreferrer">{r.title} ({r.platform})</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
export default LearningTab
