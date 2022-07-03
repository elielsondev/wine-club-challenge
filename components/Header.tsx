import styles from '../styles/Home.module.css';
import WineLogo from './WineLogo';
import NavHeader from './NavHeader';
import InfoUser from './InfoUser';

function Header(props: any) {
  const { ask, useAsk } = props;

  return (
    <header className={ styles.header } >
      <WineLogo />
      <NavHeader />
      <InfoUser useAsk={ useAsk } ask={ ask } />
    </header>
  )
}

export default Header;