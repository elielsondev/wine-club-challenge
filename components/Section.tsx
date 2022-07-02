import Image from "next/image";
import Vinho from "../public/images/Vinho.png";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { dataApi } from "../redux/action";
import { useEffect } from "react";
import PageNumber from "./PageNumber";

function Section(props: any) {
  const { apiCall, responseApi, data } = props;

  useEffect(() => {
    const myApi = async () => {
      const data = await fetch(
        "https://wine-back-test.herokuapp.com/products?page=1&limit=9"
      );
      const res = await data.json();
      apiCall(res);
    };
    myApi();
  }, [apiCall]);
  
  //console.log(responseApi.data);
  
  const { items, itemsPerPage, page, totalItems, totalPages } = responseApi.data;

  
  if(items === undefined) return (
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
      {items.map((item: any, index: any) => (
        <div key={index}>
          <div key={index} className={styles.productDiv}>
            <div key={index} className={styles.productWine}>
              <Image
                key={index}
                className={styles.wineImage}
                src={item.image}
                alt={ item.name }
                width={200}
                height={230}
              />
            </div>

            <h3 key={index} className={styles.wineName}>
              {item.name}
            </h3>

            <div key={index} className={styles.offerAndPrice}>
              <p key={index} className={styles.scratchedPrice}>R${item.price.toFixed(2).toString().replace(".", ",")}</p>
              <h5 key={index} className={styles.percentageDiscount}>{item.discount}% OFF</h5>
            </div>

            <div key={index} className={styles.offerAndPrice}>
              <h5 key={index} className={styles.winePartner}>SÓCIO WINE</h5>
              <p key={index} className={styles.priceDiscount}>
                R$
                <span
                  key={index}
                  className={styles.sizePrice}
                >
                  {item.priceMember.toFixed(0).toString().replace(".", "")}
                </span>
                 ,{item.priceMember.toFixed(3).toString().replace(".", "").substring(3, 5)}
              </p>
            </div>

            <div key={index} className={styles.nonMember}>
              <p key={index} className={styles.nonMemberText}>NÃO SÓCIO R$ {item.priceNonMember.toFixed(2).toString().replace(".", ",")}</p>
            </div>
          </div>

          <input 
            key={index}
            className={styles.addButton}
            type="button" 
            value="ADICIONAR"
            onClick={() => localStorage.setItem(item.name, JSON.stringify(item))}
          />
        </div>
      ))}
      </main>
      <PageNumber responseApi={ responseApi.data } />
    </section>
  );
}

const mapStateToProps = (state: any) => ({
  responseApi: state.DataApi,
});

const mapDispatchToProps = (dispatch: any) => ({
  apiCall: (state: any) => dispatch(dataApi(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
