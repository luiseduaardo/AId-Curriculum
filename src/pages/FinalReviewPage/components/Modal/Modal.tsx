import React from 'react'
import './Modal.css'

interface ModalProps {
  title?: string
  open: boolean
  onClose: () => void
  onSave?: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, open, onClose, onSave, children }) => {
  if (!open) return null

  return (
    <div className="frp-modal-backdrop">
      <div className="frp-modal">
        <div className="frp-modal-header">
          <h3>{title}</h3>
        </div>
        <div className="frp-modal-body">{children}</div>
        <div className="frp-modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancelar</button>
          {onSave && <button className="btn-primary" onClick={onSave}>Salvar</button>}
        </div>
      </div>
    </div>
  )
}

export default Modal
