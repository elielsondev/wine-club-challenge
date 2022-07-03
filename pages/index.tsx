import { useState } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Search from '../components/Search';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';

function HomePage() {
  const [ask, useAsk ] = useState(0);

  return (
    <div className={styles.body}>
      <Header useAsk={ useAsk } ask={ ask } />
      { ask === 1 ? <Search /> : undefined }
      <section className={styles.sectionHome}>
        <Aside />
        <Section />
      </section>
    </div>
  )
}

export default HomePage;