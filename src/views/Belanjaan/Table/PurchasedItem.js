import React from 'react';

import { Badge } from 'reactstrap';

import './PurchasedItem.css';

const PurchasedItem = (props) => {
  const {item} = props;
    return (
        <tr className='item-container'>
        <td className='d-flex justify-content-center item-photo'>
        <img className='item-image' src={`https://keranjang-pintar.herokuapp.com/gambar/${item.gambar}`} alt="..."/>
        </td>
          <th scope="row">
          {item.nama}
          </th>
          
          <td>Rp {item.harga}</td>
          <td>{item.jumlah}</td>
          
          <td>Rp {item.harga*item.jumlah}
          <Badge style={{borderRadius:'100px'}} color="info" pill className='item-badge'>%10</Badge></td>
        </tr>
    );
}

export default PurchasedItem;