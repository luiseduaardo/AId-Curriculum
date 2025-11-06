import React, { useState } from 'react'
import type { ExperienceEntry } from '@/types/resume'

interface ExperienceItemEditorProps {
    item: ExperienceEntry;
    onSave: (item: ExperienceEntry) => void;
    onCancel: () => void; // Para fechar o modal
}

const ExperienceItemEditor: React.FC<ExperienceItemEditorProps> = ({ item, onSave, onCancel }) => {
    const [draft, setDraft] = useState<ExperienceEntry>(item);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDraft({ ...draft, [e.target.name]: e.target.value });
    };
    
    const handleAchievementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDraft({ ...draft, achievements: e.target.value.split('\n').filter(line => line.trim() !== '') });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group"><label>Título:</label><input className="form-input" name="title" value={draft.title} onChange={handleChange} required /></div>
            <div className="form-group"><label>Empresa:</label><input className="form-input" name="company" value={draft.company} onChange={handleChange} required /></div>
            <div className="form-group"><label>Período:</label><input className="form-input" name="period" value={draft.period} onChange={handleChange} required /></div>
            <div className="form-group"><label>Conquistas (Separar por linha):</label>
                <textarea className="form-textarea" name="achievements" rows={5} value={draft.achievements.join('\n')} onChange={handleAchievementsChange} required />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn-back" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-primary">Salvar</button>
            </div>
        </form>
    );
}
export default ExperienceItemEditor
