import React from 'react'
import SkillsEditor from '../Skills/SkillsEditor'

interface AchievementsEditorProps { initialContent: string[]; onUpdate: (value: string[]) => void; }

const AchievementsEditor: React.FC<AchievementsEditorProps> = ({ initialContent, onUpdate }) => {
    // SkillsEditor will split on newlines when isMultiline=true, so pass onUpdate directly
    return (
        <SkillsEditor 
            title="Conquistas Gerais (Separar por LINHA)"
            initialContent={initialContent}
            onUpdate={onUpdate}
            placeholder="Ex: Prêmio de Inovação DataCorp 2022 (Cada linha é uma conquista)"
            isMultiline={true}
        />
    )
}
export default AchievementsEditor
