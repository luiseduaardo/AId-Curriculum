import React from 'react'
import type { ExperienceEntry } from '@/types/resume'
import ListEditorShell from '../ListEditorShell'
import ExperienceItemEditor from './ExperienceItemEditor'

interface ExperienceListEditorProps {
  items: ExperienceEntry[];
  onUpdateList: (newList: ExperienceEntry[]) => void;
}

const initialExperience: ExperienceEntry = {
  title: '',
  company: '',
  period: '',
  achievements: [],
};

const ExperienceListEditor: React.FC<ExperienceListEditorProps> = ({ items, onUpdateList }) => {
  return (
    <ListEditorShell<ExperienceEntry>
      title="Experiências Profissionais"
      items={items}
      onUpdateList={onUpdateList}
      initialNewItem={initialExperience}
      renderItem={(item, index, onEdit, onDelete) => (
        <div className="item-preview">
          <strong>{item.title}</strong> em {item.company}
          <div className="item-actions">
            <button onClick={onEdit} className="btn-edit">Editar</button>
            <button onClick={onDelete} className="btn-delete">Excluir</button>
          </div>
        </div>
      )}
      renderModalContent={(item, onSave, onCancel) => (
        <ExperienceItemEditor item={item} onSave={onSave} onCancel={onCancel} />
      )}
    />
  );
}

export default ExperienceListEditor
