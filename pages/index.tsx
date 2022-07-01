import Aside from '../components/Aside';
import Header from '../components/Header';
import Section from '../components/Section';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className={styles.body}>
      <Header />
      <section className={styles.sectionHome}>
        <Aside />
        <Section />
      </section>
    </div>
  )
}

export default HomePage