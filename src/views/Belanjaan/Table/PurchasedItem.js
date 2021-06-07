import React from 'react';

import { Badge } from 'reactstrap';

import './PurchasedItem.css';

const PurchasedItem = (props) => {
  const {item,key} = props;
    return (
        <tr className='item-container'>
        <td className='d-flex justify-content-center item-photo'>
        
        <img className='item-image' src={item[3]} alt="..."/>
        </td>
          <th scope="row">
          {item[0]}
          </th>
          
          <td>Rp {item[2]}</td>
          <td>{item[1]}</td>
          
          <td>Rp {item[1]*item[2]}
          <Badge style={{borderRadius:'100px'}} color="info" pill className='item-badge'>%10</Badge></td>
        </tr>
    );
}

export default PurchasedItem;