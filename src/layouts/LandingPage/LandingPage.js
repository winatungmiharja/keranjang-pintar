import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';


import keranjang from './keranjang.png';
import handphone from './handphone.png';
import './LandingPage.css'

const LandingPage = () => {
  
  return (
    
    <div className='landing-page'>
    <Row>
        <Col  xs='12' sm='12' md='5' lg='6' className='text-container order-lg-2 order-md-1 order-sm-1 order-xs-1'>
            <Row>
            <Col>
            <div>
            <Breadcrumb >
                <BreadcrumbItem><i href="#"> Belanja</i></BreadcrumbItem>
                <BreadcrumbItem><i href="#">Bayar</i></BreadcrumbItem>
    
                <BreadcrumbItem active>Tanpa ngantri!</BreadcrumbItem>
            </Breadcrumb>
            <br/>
         
                <p className='text-keranjang'>Keranjang</p>
                <p className='text-pintar text-primary'>Pintar</p>
                
                <p className="mb-0">Keranjang Belanja Pintar Berbasis Komputer </p>
                <p className="mb-0">Vision dan Sensor untuk Membudayakan </p>
                <p className="mb-0">Cashier-Less Store </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col>
            <Button href="#belanja" color="primary" round outline>
                  <i className="fa fa-heart"></i> Ayo!
                </Button>
                <Button color="primary " fab round icon title="more info" className='button-tooltip'>
                  <i className="fa fa-info-circle"></i>
                </Button>
            </Col>
            </Row>
        </Col>
        <Col xs='12' sm='12' md='7' lg='6' className='order-lg-1 order-md-2 order-sm-2 order-xs-2'>
            <div className='image-container' style={{height: '700px'}}>
             
              <img className='image handphone-image' src={handphone} alt='x'></img>
              <img className='image keranjang-image' src={keranjang} alt='x'></img>
            </div>
        </Col>
    </Row>
    </div>
  );
}

export default LandingPage;