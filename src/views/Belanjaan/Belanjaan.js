import React, { useState} from "react";
import { useCart } from "components/Cart";

// reactstrap components
import {
  Button,
  Row,
  Col,
} from "reactstrap";

import TableItem from './Table/TableItem';

const countTotal = (data) => {
  let temp=0;
  let sum=0;
  for(var i=0;i<data.length;i++)
  {
    const {jumlah,harga} = data[i];
    temp = jumlah*harga;
    sum=sum+temp;
  }
  return sum;
}

const Belanjaan = () => {
  let total=0;
  const purchasedItem = useCart();
  if(purchasedItem.length > 0)
  {
    total = countTotal(purchasedItem)
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="">
          <div className="info">
            
            <h2 className="info-title">Detail Produk</h2>
            <hr/>
            <Row>
              <Col>
                <h6>SubTotal{' '}<span className='small text-info'>({purchasedItem.length} products)</span></h6>
                {/* <h6>Potongan</h6> */}
                
              </Col>
              <Col className='text-end'>
                <p>Rp {total}</p>
                {/* <p>- Rp {"6.500"}</p> */}
              </Col>
            </Row>
            {/* <Row>
              <Col>
              <p className='text-muted small'>promo hari minggu</p>
                <p className='text-muted small'>promo lainnya</p>
              </Col>
              <Col className='text-end'>
              <p className='text-muted small'>- 4.500</p>
                <p className='text-muted small'>- 2.000</p>
              </Col>
            </Row> */}
            <hr/>
            <Row>
              <Col>
                <h6>{" "}</h6>
                <h6>Pajak<p>(10%)</p></h6>
              </Col>
              <Col className='text-end'>
                <p>Rp {total}</p>
                <p>+ Rp {0.1*total}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h6 className='text-info'>Grand Total</h6>
              </Col>
              <Col className='text-end'>
                <h6>Rp {1.1*total}</h6>
              </Col>
            </Row>
            <br/>
            <Button className='w-100'>
                    <p>Bayar Sekarang</p>
            </Button>
          </div>
          </Col>
          <Col md="7">
            <TableItem items={purchasedItem}></TableItem>
          </Col>
          
        </Row>
      </div>
    </>
  );
  
}

export default Belanjaan;
