import React from 'react'
import type { EducationEntry } from '@/types/resume'
import ListEditorShell from '../ListEditorShell'
import EducationItemEditor from './EducationItemEditor'

interface EducationListEditorProps {
    items: EducationEntry[];
    onUpdateList: (newList: EducationEntry[]) => void;
}

const initialEducation: EducationEntry = {
    degree: '',
    institution: '',
    period: '',
};

const EducationListEditor: React.FC<EducationListEditorProps> = ({ items, onUpdateList }) => {
    return (
        <ListEditorShell<EducationEntry>
            title="Educação"
            items={items}
            onUpdateList={onUpdateList}
            initialNewItem={initialEducation}
            renderItem={(item, index, onEdit, onDelete) => (
                <div className="item-preview">
                    <strong>{item.degree}</strong> ({item.institution})
                    <div className="item-actions">
                        <button onClick={onEdit} className="btn-edit">Editar</button>
                        <button onClick={onDelete} className="btn-delete">Excluir</button>
                    </div>
                </div>
            )}
            renderModalContent={(item, onSave, onCancel) => (
                <EducationItemEditor item={item} onSave={onSave} onCancel={onCancel} />
            )}
        />
    );
}

export default EducationListEditor
