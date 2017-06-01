import React from 'react'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <span className={styles.text}>Made with love</span>
        <span className={styles.image}> </span>
        <span className={styles.text}>in South Melbourne</span>
      </div>
    </div>
  )
}
