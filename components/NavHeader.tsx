import styles from '../styles/Home.module.css';

function NavHeader() {
  return (
    <nav className={styles.nav}>
      <a className={styles.linkNav} href="">Clube</a>
      <a className={styles.linkNav} href="">Loja</a>
      <a className={styles.linkNav} href="">Produtores</a>
      <a className={styles.linkNav} href="">Ofertas</a>
      <a className={styles.linkNav} href="">Eventos</a>
  </nav>
  )
}

export default NavHeader