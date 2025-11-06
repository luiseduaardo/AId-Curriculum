import React from 'react'
import type { Language } from '@/types/resume'
import ListEditorShell from '../ListEditorShell'
import LanguageItemEditor from './LanguageItemEditor'

interface LanguageListEditorProps { items: Language[]; onUpdateList: (newList: Language[]) => void; }

const initialLanguage: Language = { name: '', level: 'Intermediário' };

const LanguageListEditor: React.FC<LanguageListEditorProps> = ({ items, onUpdateList }) => {
    return (
        <ListEditorShell<Language>
            title="Idiomas"
            items={items}
            onUpdateList={onUpdateList}
            initialNewItem={initialLanguage}
            renderItem={(item, index, onEdit, onDelete) => (
                <div className="item-preview">
                    <strong>{item.name}</strong> ({item.level})
                    <div className="item-actions">
                        <button onClick={onEdit} className="btn-edit">Editar</button>
                        <button onClick={onDelete} className="btn-delete">Excluir</button>
                    </div>
                </div>
            )}
            renderModalContent={(item, onSave, onCancel) => (
                <LanguageItemEditor item={item} onSave={onSave} onCancel={onCancel} />
            )}
        />
    );
}
export default LanguageListEditor
