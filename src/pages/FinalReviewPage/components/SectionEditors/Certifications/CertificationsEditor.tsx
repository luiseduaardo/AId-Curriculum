import React from 'react'
import SkillsEditor from '../Skills/SkillsEditor'

interface CertificationsEditorProps { initialContent: string[]; onUpdate: (value: string[]) => void; }

const CertificationsEditor: React.FC<CertificationsEditorProps> = ({ initialContent, onUpdate }) => (
    <SkillsEditor 
        title="Certificados (Separar por vírgula)"
        initialContent={initialContent}
        onUpdate={onUpdate}
        placeholder="Ex: AWS Certified Data Analytics, PMP"
    />
)
export default CertificationsEditor
