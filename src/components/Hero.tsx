import React from 'react'

export default function Hero(){
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
      <div>
        <h1>Aid Curriculum</h1>
        <p>Gere currículos otimizados e análises de compatibilidade para vagas.</p>
      </div>
      <div>
        <button style={{padding:'8px 12px',background:'#2563eb',color:'#fff',borderRadius:6}}>Começar</button>
      </div>
    </header>
  )
}
