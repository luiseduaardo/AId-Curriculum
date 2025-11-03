import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
      <h1 style={{margin:0,fontSize:18}}>Aid Curriculum</h1>
      <nav style={{marginLeft:'auto',display:'flex',gap:12}}>
        <Link to="/" style={{color:'inherit',textDecoration:'none',opacity:.9}}>Home</Link>
        <Link to="/about" style={{color:'inherit',textDecoration:'none',opacity:.9}}>About</Link>
      </nav>
    </header>
  )
}
