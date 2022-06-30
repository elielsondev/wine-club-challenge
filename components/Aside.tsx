import styles from '../styles/Home.module.css';
import InputPrice from './InputPrice';

function Aside() {
  return (
    <aside className={styles.aside}>
      <h3>
        Refine sua busca
      </h3>
        
      <h4>
        Por preço
      </h4>
        
      <InputPrice />
    </aside>
  )
}

export default Aside