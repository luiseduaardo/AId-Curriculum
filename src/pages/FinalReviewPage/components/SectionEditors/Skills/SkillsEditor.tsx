import React, { useState } from 'react'

interface SkillsEditorProps {
  initialContent: string[]
  onUpdate: (value: string[]) => void
  title?: string
  placeholder?: string
  isMultiline?: boolean
}

const SkillsEditor: React.FC<SkillsEditorProps> = ({ initialContent, onUpdate, title = 'Lista de Habilidades', placeholder = 'Ex: Python, SQL, AWS, React (separar por vírgula)', isMultiline = false }) => {
    const [content, setContent] = useState(isMultiline ? initialContent.join('\n') : initialContent.join(', '));
    
    const handleUpdate = (value: string) => {
        setContent(value);
        const list = (isMultiline ? value.split('\n') : value.split(',')).map(s => s.trim()).filter(Boolean);
        onUpdate(list);
    };

    return (
        <div className="editor-section">
            <h3 className="editor-section-title">{title}</h3>
            <textarea
                className="editor-textarea"
                rows={isMultiline ? 6 : 4}
                value={content}
                onChange={(e) => handleUpdate(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}
export default SkillsEditor
