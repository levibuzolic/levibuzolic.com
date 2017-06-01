import React from 'react'
import IntroAnimation from '../IntroAnimation'
import styles from './styles.module.scss'

export default function Intro() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span>It’s time </span>
            <span>to reboot </span>
            <span>banking.</span>
          </h2>
          <div className={styles.tagline}>
            <span>Spend Wisely, </span>
            <span>Save Effortlessly.</span>
          </div>
          <a className={styles.button} href="#how">
            See how
          </a>
        </div>
      </div>
      <IntroAnimation />
    </section>
  )
}
