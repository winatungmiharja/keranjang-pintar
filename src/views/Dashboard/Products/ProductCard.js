import React from "react";
import { Card, Collapse, CardHeader, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import {Row, Col ,Button} from "reactstrap";


import './ProductCard.css'


const ProductCard = ({image,name,price,about}) => {
    const [isDropdown, setDropdown] = React.useState(0);
    const [dropdownIcon, setDropdownIcon] = React.useState('nc-icon nc-minimal-down');
    const [dropdownWidth, setDropdownWidth] = React.useState(3);

    const toggleDropdown = () => {
        if(isDropdown===1)
        {
            setDropdown(0);
            setDropdownIcon('nc-icon nc-minimal-down');
            setTimeout(function() {
                setDropdownWidth(3);
            }, 200);
            
        }
        else
        {
            setDropdownWidth(12);
            setDropdownIcon('nc-icon nc-minimal-up');
            setDropdown(1);
        }
    }
    return(
        
        <Col lg='12' className='d-flex'>
        
            <Card className='product-card'>
            <Row>
                <Col xs='1' sm='1' md='1' lg='1'>
                    <div className='product-badge'> </div>
                </Col>
                <Col xs='10' sm='10' md='10' lg='10'>
                    <CardBody>
                    <p className='fs-6 fw-light'>{name}</p>
                    </CardBody>
                    
                    <div className='d-flex justify-content-center align-items-center'>
                    <CardImg className='product-photo' src={image} alt="..."/>
                    </div>
                    <CardFooter>
                        <div>
                            <Row>
                                <Col xs='9' sm='10' md='9' lg='10'>
                                <p className='fs-5 text-start fw-bold text-info'>{price}</p>
                                </Col>
                                <Col xs='2' sm='1' md='1' lg='1'>
                                <i onClick={toggleDropdown} className={dropdownIcon}></i>
                                
                                </Col>
                            </Row> 
                            <Collapse  isOpen={isDropdown === 1 ? true : false}>
                                <p className='text-muted product-about'>{about}</p>
                            </Collapse> 
                        </div> 
                    </CardFooter>
                    
                    
                
                    
                </Col>
            </Row>
            
            </Card>
        </Col>
        
    );
}

export default ProductCard;