import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import TableItem from './Table/TableItem';

const Belanjaan = () => {
  const productObj = [
    {0:'banana',    1:5,    2:15000, 3:'http://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-PNG-Image.png'},
    {0:'apple',     1:3,    2:8000, 3:"https://pngimg.com/uploads/apple/apple_PNG12405.png"},
    {0:'water',     1:7,   2:2500 ,3:"https://www.pikpng.com/pngl/b/206-2069845_aqua-png-aqua-botol-clipart.png"},
    {0:'cocoa',     1:1,   2:7000, 3:"https://www.kindpng.com/picc/m/287-2879692_hersheys-dark-chocolate-cocoa-powder-hd-png-download.png"},
    {0:'banana',    1:5,    2:15000},
    {0:'apple',     1:3,    2:8000},
    {0:'water',     1:7,   2:2500},
    {0:'cocoa',     1:1,   2:7000}
]
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
                <h6>SubTotal{' '}<span className='small text-info'>({productObj.length} products)</span></h6>
                <h6>Potongan</h6>
                
              </Col>
              <Col className='text-end'>
                <p>Rp 156.500</p>
                <p>- Rp {"6.500"}</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p className='text-muted small'>promo hari minggu</p>
                <p className='text-muted small'>promo lainnya</p>
              </Col>
              <Col className='text-end'>
              <p className='text-muted small'>- 4.500</p>
                <p className='text-muted small'>- 2.000</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h6></h6>
                <h6>Pajak<p>(10%)</p></h6>
              </Col>
              <Col className='text-end'>
                <p>Rp 150.000</p>
                <p>+ Rp {"15.000"}</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h6 className='text-info'>Grand Total</h6>
              </Col>
              <Col className='text-end'>
                <h6>Rp {"165.000"}</h6>
              </Col>
            </Row>
            <br/>
            <Button className='w-100'>
                    <p>Bayar Sekarang</p>
            </Button>
          </div>
          </Col>
          <Col md="7">
            <TableItem items={productObj}></TableItem>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Belanjaan;
