import React from 'react';
import styles from '../styles/Home.module.css';

function PageNumber(props: any) {
  // const { items, itemsPerPage, page, totalItems, totalPages } = props.responseApi;
  
  return (
    <div className={styles.divPages}>
      <input
        className={ styles.pageButton }
        type="button"
        name='1'
        value={1}
        onClick={ () => { props.usePageActual(1) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='2'
        value={2}
        onClick={ () => { props.usePageActual(2) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='3'
        value={3}
        onClick={ () => { props.usePageActual(3) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='4'
        value={4}
        onClick={ () => { props.usePageActual(4) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='5'
        value={5}
        onClick={ () => { props.usePageActual(5) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='6'
        value={6}
        onClick={ () => { props.usePageActual(6) } }
      />
      <input
        className={ styles.pageButton }
        type="button"
        name='7'
        value={7}
        onClick={ () => { props.usePageActual(7) } }
      />
    </div>
  )
}

export default PageNumber;