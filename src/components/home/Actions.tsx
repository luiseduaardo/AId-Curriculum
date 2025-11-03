import React from 'react'
import styles from './Actions.module.css'
import { Link } from 'react-router-dom'

export default function Actions(){
  return (
    <div className={styles.actions}>
      <Link to="/flow" className={styles.primary}>Criar Currículo</Link>
      <Link to="/flow" className={styles.ghost}>Otimizar Currículo</Link>
    </div>
  )
}
