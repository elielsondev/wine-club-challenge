import styles from '../styles/Home.module.css';

function InputPrice() {
  return (
    <>
      <label className={styles.labelPrice} htmlFor="upToForty">
        <input type="radio" name="price" id="upToForty" />
        Até R$40
      </label>

      <label className={styles.labelPrice} htmlFor="fortyToSixty">
        <input type="radio" name="price" id="fortyToSixty" />
        R$40 A R$60
      </label>

      <label className={styles.labelPrice} htmlFor="oneHundredToTwoHundred">
        <input type="radio" name="price" id="oneHundredToTwoHundred" />
        R$100 A R$200
      </label>

      <label className={styles.labelPrice} htmlFor="twoHundredToFiveHundred">
        <input type="radio" name="price" id="twoHundredToFiveHundred" />
        R$200 A R$500
      </label>

      <label className={styles.labelPrice} htmlFor="overFiveHundred">
        <input type="radio" name="price" id="overFiveHundred" />
        Acima de R$500
      </label>
    </>
  );
}

export default InputPrice;
