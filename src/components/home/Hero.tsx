import React from 'react'
import styles from './Hero.module.css'

export default function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.panel} />
      <div className={styles.content}>
        <h1>Aid Curriculum</h1>
        <p>Gere currículos otimizados para vagas usando IA.</p>
      </div>
    </section>
  )
}
