import Image from 'next/image';
import styles from '../styles/Home.module.css';
import WineLogo from '../public/images/WineLogo.png';
import Lupa from '../public/images/Lupa.png';
import Perfil from '../public/images/Perfil.png';
import Sacola from '../public/images/Sacola.png';

function Header() {
  return (
    <header className={ styles.header } >
      <div>
        <Image
          src={WineLogo}
          alt="Wine Logo"
          width={100}
          height={28}
        />
      </div>
      <nav className={styles.nav}>
        <a className={styles.linkNav} href="">Clube</a>
        <a className={styles.linkNav} href="">Loja</a>
        <a className={styles.linkNav} href="">Produtores</a>
        <a className={styles.linkNav} href="">Ofertas</a>
        <a className={styles.linkNav} href="">Eventos</a>
      </nav>
      <div className={styles.user}>
      <Image
          src={Lupa}
          alt="Wine Logo"
          width={56}
          height={56}
        />
        <Image
          src={Perfil}
          alt="Wine Logo"
          width={56}
          height={56}
        />
        <Image
          src={Sacola}
          alt="Wine Logo"
          width={56}
          height={56}
        />
        <p className={styles.numberItens}>0</p>
      </div>
    </header>
  )
}

export default Header;