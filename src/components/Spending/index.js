import React from 'react'
import Section from '../Section'
import styles from './styles.module.scss'

export default function Spending() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Section title="Spend Wisely">
          <p>If our watches are correct it’s 2017, yet logging in to your bank can feel like you’ve travelled back in time. There’s that crusty old ledger of credits and debits, unchanged for decades, only now shrunk down for mobile screens.</p>
        </Section>
        <Section>
          <p>It turns out that many of these so-called “debits” are what most normal people would call “purchases”. A lot of them happen out in the real world!</p>
        </Section>
        <Section>
          <p>Alt will present your purchases in a format you can understand, providing recognisable business names along with additional details like location and category.</p>
        </Section>
        <Section>
          <p>While some purchases might be the first you’ve ever made with a business, others could be purchases you make every day, like groceries or a coffee at your local cafe.</p>
        </Section>
        <Section>
          <p>By understanding your past spending we can begin to recognise patterns, such as monthly recurring charges. It turns out most of us have quite a few of those – your mobile phone, rent, music streaming subscription, and car insurance to name a few. </p>
        </Section>
        <Section>
          <p>Recognising these spending patterns allows us to then anticipate your future spending. What are the essentials you need to cover -- money you’ve already spent, in effect. And how much is then left over for living?</p>
        </Section>
        <Section>
          <p>We call this left-over amount your “Spendable” balance. It’s the money in your account minus the charges and savings contributions in your near future. By understanding your future financial commitments you can then better understand what you can safely spend or save.</p>
          <p>These are just some of the ways Alt will help you spend wisely.</p>
        </Section>
      </div>
    </div>
  )
}
