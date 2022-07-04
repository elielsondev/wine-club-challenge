import Image from "next/image";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { dataApiAction, shoppingBagAction } from "../redux/action";
import { useEffect, useState } from "react";
import PageNumber from "./PageNumber";

function Section(props: any) {
  const { apiCall, responseApi, productBag, shoppingCart } = props;
  const [ pageActual, usePageActual ] = useState(1);

  useEffect(() => {
    const myApi = async () => {
      const data = await fetch(
        `https://wine-back-test.herokuapp.com/products?page=${pageActual}&limit=9`
      );
      const res = await data.json();
      apiCall(res);
    };
    myApi();
  }, [apiCall, pageActual]);

  const { items, itemsPerPage, page, totalItems, totalPages } = responseApi;

  const addItem = (wine: any) => {
    shoppingCart(wine)
    console.log(productBag);
  }
  
  if(responseApi === undefined && items === undefined) return (
    <h1 className={styles.loading}>
      Loading...
    </h1>)

  return (
    <section>
      <p className={styles.foundProducts}>
        <span>{totalItems}</span>
        produtos encontrados
      </p>

      <main className={ styles.adega }>
      {items.map((item: any) => (
        <div key={item.id}>
          <div className={styles.productDiv}>
            <div className={styles.productWine}>
              <Image
                className={styles.wineImage}
                src={item.image}
                alt={ item.name }
                width={200}
                height={230}
              />
            </div>

            <h3 className={styles.wineName}>
              {item.name}
            </h3>

            <div className={styles.offerAndPrice}>
              <p className={styles.scratchedPrice}>R${item.price.toFixed(2).toString().replace(".", ",")}</p>
              <h5 className={styles.percentageDiscount}>{item.discount}% OFF</h5>
            </div>

            <div className={styles.offerAndPrice}>
              <h5 className={styles.winePartner}>SÓCIO WINE</h5>
              <p className={styles.priceDiscount}>
                R$
                <span
                  className={styles.sizePrice}
                >
                  {item.priceMember.toFixed(0).toString().replace(".", "")}
                </span>
                 ,{item.priceMember.toFixed(3).toString().replace(".", "").substring(3, 5)}
              </p>
            </div>

            <div className={styles.nonMember}>
              <p className={styles.nonMemberText}>NÃO SÓCIO R$ {item.priceNonMember.toFixed(2).toString().replace(".", ",")}</p>
            </div>
          </div>

          <input 
            key={item.id}
            className={styles.addButton}
            type="button" 
            value="ADICIONAR"
            // onClick={() => localStorage.setItem(item.name, JSON.stringify(item))}
            onClick={ () => addItem(item) }
          />
        </div>
      ))}
      </main>
      <PageNumber
        responseApi={ responseApi }
        usePageActual={ usePageActual }
      />
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  responseApi: state.dataApiReducer.data,
  productBag: state.shoppingBagReducer,
});

const mapDispatchToProps = (dispatch: any) => (
  {
    apiCall: (state: any) => dispatch(dataApiAction(state)),
    shoppingCart: (state: any) => dispatch(shoppingBagAction(state)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Section);
