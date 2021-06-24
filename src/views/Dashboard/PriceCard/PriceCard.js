import React from "react";
import { 
    Button,
    Row, 
    Col, 
    Card, 
    CardBody, 
} from 'reactstrap';

import { 
    DropdownToggle, 
    DropdownMenu,  
    UncontrolledButtonDropdown } from 'reactstrap';

import Receipt from "../Receipt/Receipt";

import './PriceCard.scss';

const PriceCard = () => {

    return (
        <Card className='price-card'>
            <h5 className="title text-center price-text-white">Total</h5>
            <CardBody className='price-card-body'>
                <Row>
                    <Col xs='9' sm='10' md='9' lg='9'>
                    <h2 className="title text-left price-text-white">Rp 35.400
                    <p className="price-text-dark-blue"> +4.500</p></h2>
                    
                    </Col>
                    <Col xs='1' sm='1' md='2' lg='1'>
                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret className="dropdown-toggle-split" color="secondary"/>
                        <DropdownMenu style={{width:'270px',height:'350px',overflowX:'scroll',overflowY:'scroll'}}>
                            <Receipt></Receipt>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    </Col>
                </Row> 
                <Row>
                    <div className='d-flex justify-content-center'>
                        <div className='price-hr'>
                        </div>
                    </div>
                    <h5 className="text-center title text-left price-text-white-2">Selesai Berbelanja?</h5>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <br/>
                    <Button className='price-pay-btn'>
                    <p className='price-text-dark-blue'>Bayar</p>
                    </Button>
                    
                </Row>
            </CardBody>
        </Card>
    );
}

export default PriceCard;