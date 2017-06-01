import React from 'react'
import Section from '../Section'
import SavingAnimation from '../SavingAnimation'
import styles from './styles.module.scss'

export default function Saving() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <SavingAnimation />
        <Section title="Save Effortlessly.">
          <p>It all starts with defining savings targets, not an filling out an account opening form. Define as many or as few savings targets as you wish and we’ll do the work for you to help you hit them on time.</p>
        </Section>
        <Section class="green">
          <p>A target doesn’t just have to be something big like an overseas holiday or house deposit. You could use targets to stash away a few dollars each week so that when it comes time to pay your annual car registration or insurance bill you’ve got the money on-hand.</p>
        </Section>
        <Section class="blue">
          <p>We believe everyone can save and that building savings is one of the keys to financial well-being. That’s why we’re building features like Round-Up (that round up your purchases, and save the change) to make saving effortless.</p>
        </Section>
      </div>
    </div>
  )
}
