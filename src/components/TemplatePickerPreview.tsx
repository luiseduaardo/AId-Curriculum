import React from 'react'

export default function TemplatePickerPreview(){
  const templates = [
    { id: 'modern', name: 'Moderno' },
    { id: 'professional', name: 'Profissional' },
  ]

  return (
    <div style={{display:'flex',gap:12,marginTop:12}}>
      {templates.map(t => (
        <div key={t.id} style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8,width:180}}>
          <div style={{height:100,background:'linear-gradient(180deg,#0f172a,#111827)',borderRadius:6}} />
          <div style={{marginTop:8,fontWeight:600}}>{t.name}</div>
        </div>
      ))}
    </div>
  )
}
