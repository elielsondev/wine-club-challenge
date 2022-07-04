import Image from 'next/image';
import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/Home.module.css';

function Bag(props: any) {
 if (props.productBag.length === 0) return (
  <h1 id={styles.bagEmpty} className={styles.bag}>
    Não há itens no carrinho
  </h1>)
 
 let total = props.productBag.reduce((total: any, it: any) => total + it.product.priceMember, 0)
 
  return (
    <div className={styles.bag}>
      { props.productBag.map((it: any) => (
        <div key={ it.product.id } className={styles.listDiv}>
        <Image 
          src={ it.product.image }
          alt={ it.product.name }
          width={120}
          height={150}
        />
        <p>{ it.product.name }</p>
        
        <div className={ styles.price }>
          <h6 className={styles.partner}>Sócio</h6>
          <h5 className={styles.partner}>R${ it.product.priceMember.toFixed(2).toString().replace(".", ",") }</h5>
        </div>

        <div className={ styles.price }>
          <h6 className={styles.nonPartner}>Não Sócio</h6>
          <h5 className={styles.nonPartner}>R${ it.product.priceNonMember.toFixed(2).toString().replace(".", ",") }</h5>
        </div>
      </div>
      )) }
      <h4 className={styles.allValues}>Total: R${total.toFixed(2).toString().replace(".", ",")}</h4>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  productBag: state.shoppingBagReducer,
});

export default connect(mapStateToProps)(Bag);