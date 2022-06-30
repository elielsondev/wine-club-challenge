import styles from '../styles/Home.module.css';
import WineLogo from './WineLogo';
import NavHeader from './NavHeader';
import InfoUser from './InfoUser';

function Header() {
  return (
    <header className={ styles.header } >
      <WineLogo />
      <NavHeader />
      <InfoUser />
    </header>
  )
}

export default Header;