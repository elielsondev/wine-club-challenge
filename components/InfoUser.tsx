import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Lupa from '../public/images/Lupa.png';
import LupaOn from '../public/images/LupaOn.png';
import Perfil from '../public/images/Perfil.png';
import Sacola from '../public/images/Sacola.png';
import { connect } from 'react-redux';

function InfoUser(props: any) {
  const { ask, useAsk } = props;
  const UseAsk = useAsk;

  const handleClick = () => {
    ask === 0 ? UseAsk(1) : UseAsk(0);
  }

  return (
    <div className={styles.user}>
      <Image
        src={ask === 0 ? Lupa : LupaOn}
        alt="Wine Logo"
        width={56}
        height={56}
        onClick={ () => handleClick() }
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
      <p className={styles.numberItens}>{props.productBag.length}</p>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  productBag: state.shoppingBagReducer,
});

export default connect(mapStateToProps)(InfoUser);