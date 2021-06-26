import { useCart } from "components/Cart.js";
import React from "react";
import {
    Row,
    Col,
    Badge,
    Jumbotron,
    Button
  } from "reactstrap";

import PurchasedCard from "./PurchasedCard.js";


const Purchased = () => {
  const purchasedItem = useCart();
  
  return(purchasedItem.length!==0?
      <Row >
      <Col xs='12' sm='12' lg='12'>
      <p className='text-muted'>Recent :</p>
      <hr className="my-2" />
        <Row >
        {
          purchasedItem.map(item=> {
            return (<PurchasedCard purchasedItem={item}/>)
          })
        }
        </Row>
      </Col>
    </Row>   
    :
    <div>
    <Jumbotron>
      <h3 className="display-3">Hai!</h3>
      <p className="lead">Supermarket ini menggunakkan teknologi Keranjang Pintar, Kamu hanya perlu memasukkan barang belanjaanmu</p>
      <hr className="my-2" />
      <p>Sistem kami akan otomatis mendeteksinya lewat tab ini. Selamat Berbelanja!</p>
      <br/>
    </Jumbotron>
  </div>   
  );  
  
}

export default Purchased;