import React, { useState } from 'react'
import type { EducationEntry } from '@/types/resume'

interface EducationItemEditorProps {
    item: EducationEntry;
    onSave: (item: EducationEntry) => void;
    onCancel: () => void;
}

const EducationItemEditor: React.FC<EducationItemEditorProps> = ({ item, onSave, onCancel }) => {
    const [draft, setDraft] = useState<EducationEntry>(item);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDraft({ ...draft, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group"><label>Grau/Curso:</label><input className="form-input" name="degree" value={draft.degree} onChange={handleChange} required /></div>
            <div className="form-group"><label>Instituição:</label><input className="form-input" name="institution" value={draft.institution} onChange={handleChange} required /></div>
            <div className="form-group"><label>Período:</label><input className="form-input" name="period" value={draft.period} onChange={handleChange} required /></div>
            <div className="modal-footer">
                <button type="button" className="btn-back" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-primary">Salvar</button>
            </div>
        </form>
    );
}
export default EducationItemEditor
