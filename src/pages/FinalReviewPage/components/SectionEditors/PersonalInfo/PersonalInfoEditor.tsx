import React, { useState } from 'react'
import type { PersonalInfo } from '@/types/resume'
import './PersonalInfoEditor.css'

interface PersonalInfoEditorProps { item: PersonalInfo; onUpdate: (item: PersonalInfo) => void; }

const PersonalInfoEditor: React.FC<PersonalInfoEditorProps> = ({ item, onUpdate }) => {
    const [draft, setDraft] = useState<PersonalInfo>(item);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const next = { ...draft, [e.target.name]: e.target.value } as PersonalInfo;
        setDraft(next);
        // Atualiza imediatamente o CV ao digitar
        onUpdate(next);
    };

    return (
        <div className="form-grid">
            <div className="form-group full-width"><label htmlFor="pi-name">Nome Completo:</label><input id="pi-name" className="form-input" name="name" value={draft.name} onChange={handleChange} required /></div>
            <div className="form-group full-width"><label htmlFor="pi-title">Título:</label><input id="pi-title" className="form-input" name="title" value={draft.title} onChange={handleChange} required /></div>
            <div className="form-group"><label htmlFor="pi-email">Email:</label><input id="pi-email" className="form-input" name="email" value={draft.email || ''} onChange={handleChange} /></div>
            <div className="form-group"><label htmlFor="pi-phone">Telefone:</label><input id="pi-phone" className="form-input" name="phone" value={draft.phone || ''} onChange={handleChange} /></div>
        </div>
    );
}
export default PersonalInfoEditor
