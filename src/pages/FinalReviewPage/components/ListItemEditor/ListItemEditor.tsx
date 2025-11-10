import React, { useState } from 'react'
import Modal from '@/pages/FinalReviewPage/components/Modal/Modal'
import './ListItemEditor.css'

interface ListItemEditorProps<T> {
  title: string
  items: T[]
  renderItem: (item: T, index: number, onEdit: (item: T) => void, onDelete: (index: number) => void) => React.ReactNode
  onUpdateList: (newList: T[]) => void
  renderModalContent: (item: T, onSave: (item: T) => void) => React.ReactNode
  initialNewItem: T
}

function ListItemEditor<T>({ title, items, renderItem, onUpdateList, renderModalContent, initialNewItem }: ListItemEditorProps<T>) {
  const [open, setOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [draft, setDraft] = useState<T | null>(null)

  const handleAdd = () => {
    setDraft(initialNewItem)
    setEditingIndex(null)
    setOpen(true)
  }

  const handleEdit = (index: number) => {
    setDraft(items[index])
    setEditingIndex(index)
    setOpen(true)
  }

  const handleDelete = (index: number) => {
    const copy = [...items]
    copy.splice(index, 1)
    onUpdateList(copy)
  }

  const handleSave = () => {
    if (draft === null) return
    const copy = [...items]
    if (editingIndex === null) {
      copy.push(draft)
    } else {
      copy[editingIndex] = draft
    }
    onUpdateList(copy)
    setOpen(false)
  }

  return (
    <div className="list-editor">
      <div className="list-editor-header">
        <h3>{title}</h3>
        <button className="btn-primary small" onClick={handleAdd}>Adicionar Novo Item</button>
      </div>
      <div className="list-items">
        {items.map((it, idx) => (
          <div key={idx} className="list-item-row">
            <div className="list-item-content">
              {renderItem(it, idx, (newItem) => { setDraft(newItem); setEditingIndex(idx); }, (i) => handleDelete(i))}
            </div>
            <div className="list-item-actions">
              <button className="btn-secondary small" onClick={() => handleEdit(idx)}>Editar</button>
              <button className="btn-danger small" onClick={() => handleDelete(idx)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} onSave={handleSave} title={editingIndex === null ? `Novo ${title}` : `Editar ${title}`}>
        {draft !== null ? renderModalContent(draft, (updated) => setDraft(updated)) : null}
      </Modal>
    </div>
  )
}

export default ListItemEditor
