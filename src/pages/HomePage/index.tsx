import React from 'react'
import styles from './HomePage.module.css'
import Hero from '@/components/home/Hero'
import Actions from '@/components/home/Actions'

export default function HomePage(){
  return (
    <div className={styles.page}>
      <Hero />
      <Actions />
    </div>
  )
}
