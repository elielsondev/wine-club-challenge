import styles from '../styles/Home.module.css';
import WineLogo from './WineLogo';
import NavHeader from './NavHeader';
import InfoUser from './InfoUser';

function Header(props: any) {
  const { ask, useAsk, bag, useBag } = props;

  return (
    <header className={ styles.header } >
      <WineLogo />
      <NavHeader />
      <InfoUser 
        useAsk={ useAsk } 
        ask={ ask }
        bag={ bag }
        useBag={ useBag }
      />
    </header>
  )
}

export default Header;