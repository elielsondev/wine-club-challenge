import { useState } from 'react';
import Aside from '../components/Aside';
import Bag from '../components/Bag';
import Header from '../components/Header';
import Search from '../components/Search';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';

function HomePage() {
  const [ask, useAsk ] = useState(0);
  const [bag, useBag] = useState(0);

  return (
    <div className={styles.body}>
      <Header 
        useAsk={ useAsk } 
        ask={ ask } 
        bag={ bag }
        useBag={ useBag }
      />
      { ask === 1 ? <Search /> : undefined }
      <section className={styles.sectionHome}>
        <Aside />
        <Section />
      { bag === 1 ? <Bag /> : undefined }
      </section>
    </div>
  )
}

export default HomePage;