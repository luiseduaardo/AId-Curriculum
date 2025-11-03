import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header(){
  return (
    <>
      <div className={styles.topbar}>Aid Curriculum</div>
      <header className={styles.header}>
        <div className={styles.brand}>Aid Curriculum</div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </>
  )
}
