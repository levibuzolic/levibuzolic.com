import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>
          <Link to="/">alt.</Link>
        </h1>
        <a className={styles.register} href="#register">
          Sign up for early release
        </a>
      </div>
    </header>
  )
}
