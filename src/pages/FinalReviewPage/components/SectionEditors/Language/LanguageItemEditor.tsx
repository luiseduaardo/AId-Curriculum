import React, { useState } from 'react'
import type { Language } from '@/types/resume'

interface LanguageItemEditorProps { item: Language; onSave: (item: Language) => void; onCancel: () => void; }

const LanguageItemEditor: React.FC<LanguageItemEditorProps> = ({ item, onSave, onCancel }) => {
    const [draft, setDraft] = useState<Language>(item);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDraft({ ...draft, [e.target.name]: e.target.value } as Language);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-grid">
                <div className="form-group"><label htmlFor="lang-name">Idioma:</label><input id="lang-name" className="form-input" name="name" value={draft.name} onChange={handleChange} required /></div>
                <div className="form-group">
                    <label htmlFor="lang-level">Nível:</label>
                    <select id="lang-level" className="form-input" name="level" value={draft.level} onChange={handleChange} required>
                        <option value="Básico">Básico</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                        <option value="Nativo">Nativo</option>
                    </select>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn-back" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-primary">Salvar</button>
            </div>
        </form>
    );
}
export default LanguageItemEditor
