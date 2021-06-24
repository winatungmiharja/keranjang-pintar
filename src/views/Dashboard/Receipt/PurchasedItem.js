import React from 'react';

const PurchasedItem = (props) => {
  const {item} = props;
    return (
        <tr>
          <th scope="row">
          {item[0]}
          <p className='fs-6 fw-light text-muted'>Rp {item[2]}</p>
          </th>
          <td>{item[1]}</td>
          <td>Rp {item[1]*item[2]}</td>
        </tr>
    );
}

export default PurchasedItem;