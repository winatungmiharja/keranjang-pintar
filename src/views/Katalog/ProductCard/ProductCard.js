import React from "react";

// reactstrap components
import {
  Row, Col, Card, Badge, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import './ProductCard.css'

const ProductCard = ({item}) => {
    return (
        <Col lg='3'>
        <Card style={{height: '92%'}} >
            <div className='d-flex justify-content-center'>
            <CardImg top src={item[3]} alt="..." className='katalog-img'/>
            </div>
            <div className='katalog-card '>
                <p className="text-muted katalog-subtitle">{item[0]}</p>
                <p className="h5 katalog-title">{item[1]}</p>
                <div>
                    <Badge color="success katalog-badge"><p className='katalog-badge-text'>Rp {item[2]}</p></Badge>
                </div>
                <br/>
                <br/>
            </div>
        </Card>
        </Col>
    );
}

export default ProductCard;