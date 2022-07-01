import Image from "next/image";
import Vinho from "../public/images/Vinho.png";
import styles from "../styles/Home.module.css";

// const wineApi = async () => {
//   const res = await fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=10");
//   const data = await res.json();
//   console.log(data)
// }

// wineApi();

function Section() {
  return (
    <section>
      <p> 0 produtos encontrados</p>

      <div className={styles.productDiv}>
        
        <div className={styles.productWine}>
          <Image
            className={styles.wineImage}
            src={Vinho}
            alt="Vinho Quinta da Garrida"
            width={200}
            height={230}
          />
        </div>

        <h3 className={styles.wineName}>
          Bacalhôa Quinta da Garrida Colheita Selecionada 2015
        </h3>

        <div className={styles.offerAndPrice}>
          <p className={styles.scratchedPrice}>
            R$175,90
          </p>
          <h5 className={styles.percentageDiscount}>
            45% OFF
          </h5>
        </div>

        <div className={styles.offerAndPrice}>
          <h5 className={styles.winePartner}>
            SÓCIO WINE
          </h5>
          <p className={styles.priceDiscount}>
            R$
            <span className={styles.sizePrice}>
              100
            </span>
          ,00
          </p>
        </div>

        <div className={styles.nonMember}>
          <p className={styles.nonMemberText}>
            NÃO SÓCIO R$ 37,40
          </p>
        </div>
      </div>

      <input
        className={styles.addButton}
        type="button"
        value="ADICIONAR"
      />
    </section>
  );
}

export default Section;
