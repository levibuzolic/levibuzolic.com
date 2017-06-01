import React from 'react'
import styles from './styles.module.scss'

export default function Team() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>So who are we anyway?</h3>
        <div className={styles.content}>
          <p>Our team is formed from diverse backgrounds with expertise accross the financial sectors, security, full stack developemnt, product imagining, machine learning, AI, design, user experince, and communications.</p>
        </div>
        <a href="#team">
          Meet our team
        </a>
      </div>
    </div>
  )
}
