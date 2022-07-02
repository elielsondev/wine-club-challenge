import React from 'react';

function PageNumber(props: any) {
  const { items, itemsPerPage, page, totalItems, totalPages } = props.responseApi;
  return (
    <div>
      <input 
        type="button"
        value={page}
      />
    </div>
  )
}

export default PageNumber;