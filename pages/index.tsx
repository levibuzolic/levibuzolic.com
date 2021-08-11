import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Levi Buzolic</title>
      </Head>
      <span className={styles.rise} />
      <main className={styles.main}>
        <section className={styles.intro}>
          <p>Hi, I’m Levi</p>
          <p>Thing maker, software developer, designer, and photographer based in Melbourne, Australia.</p>
        </section>
        <section className={styles.body}>
          <p>
            I currently work with the talented people at <a href="https://ferocia.com.au/">Ferocia</a> building{' '}
            <a href="https://up.com.au">Up</a> an upgrade for your banking.
          </p>
          <p>
            You can find me on{' '}
            {LINKS.map((link, index, array) => (
              <React.Fragment key={index}>
                {index === 0 ? null : index === array.length - 1 ? <span>, and </span> : <span>, </span>}
                <a href={link.href}>{link.name}</a>
              </React.Fragment>
            ))}
            .
          </p>
        </section>
      </main>
    </div>
  );
}

const LINKS = [
  { href: 'https://github.com/levibuzolic', name: 'GitHub' },
  { href: 'https://instagram.com/levibuzolic', name: 'Instagram' },
  { href: 'https://twitter.com/levibuzolic', name: 'Twitter' },
  { href: 'https://www.linkedin.com/in/levibuzolic/', name: 'LinkedIn' },
  { href: 'https://dribbble.com/levibuzolic', name: 'Dribbble' },
  { href: 'https://www.strava.com/athletes/150472', name: 'Strava' },
  { href: 'mailto:levibuzolic@gmail.com', name: 'Email' },
];
