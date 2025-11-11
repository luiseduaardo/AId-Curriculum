import React from 'react'

interface Props {
  value: string
  onChange: (v: string) => void
}

const SummaryEditor: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="summary-editor">
      <h3 className="editor-section-title">Resumo Profissional</h3>
      <textarea className="editor-textarea" rows={5} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default SummaryEditor
