import React from 'react'
import styles from './styles.module.scss'

export default function Section(props) {
  const title = props.title ? (
    <h3 className={styles.title}>{props.title}</h3>
  ) : null;

  return (
    <article className={styles.root}>
      {title}
      <div className={styles.content}>{props.children}</div>
    </article>
  )
}
