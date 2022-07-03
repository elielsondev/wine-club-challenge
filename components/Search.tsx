import React from 'react'
import styles from '../styles/Home.module.css';

function Search() {
  return (
    <div className={ styles.search }>
      <input
        className={ styles.inputSearch }
        type="text"
        name="search"
        id=""
        placeholder='O que você está buscando?'
      />
    </div>
  )
}

export default Search;