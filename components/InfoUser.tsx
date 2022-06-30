import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Lupa from '../public/images/Lupa.png';
import Perfil from '../public/images/Perfil.png';
import Sacola from '../public/images/Sacola.png';

function InfoUser() {
  return (
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
  )
}

export default InfoUser