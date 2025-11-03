import React from 'react'

export default function Card({ children }: { children: React.ReactNode }){
  return (
    <div style={{padding:12,background:'rgba(255,255,255,0.03)',borderRadius:8}}>
      {children}
    </div>
  )
}
