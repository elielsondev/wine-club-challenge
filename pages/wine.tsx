import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

function wine(props: any) {
  const { items, itemsPerPage, page, totalItems, totalPages } = props.responseApi;
  console.log(props.responseApi.data);
  console.log(props.responseApi);
  
  if(totalItems === undefined) return (
    <h1 className={styles.loading}>
      Loading...
    </h1>)

  return (
    <div>
      <Header />
      <h1>{totalItems}</h1>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  responseApi: state.dataApiReducer.data,
});

export default connect(mapStateToProps, null)(wine);