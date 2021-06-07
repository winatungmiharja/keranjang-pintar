import React from "react";

// reactstrap components
import {
  Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import ProductCard from "./ProductCard/ProductCard.js";

function Katalog() {
  const productKatalog = [
    {0:'Smart Balance',    1:'Cream Cheese',  2:25000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912564081961735300/previews/G03-200x200.jpg'},
    {0:'Kraft Grated',    1:'Parmesan Cheese',  2:56000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913962139291228031/previews/G03-400x400.jpg'},
    {0:'Great Value',    1:'Parmesan Cheese',  2:35000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913956600217867859/previews/G03-400x400.jpg'},
    {0:'Kraft',    1:'Cheddar Cheese',  2:23000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913099502550521499/previews/G03-200x200.jpg'},
    {0:'Sharp',    1:'Cheddar Cheese',  2:56000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913099486125627031/previews/G03-400x400.jpg'},
    {0:'Easy',    1:'Cheddar Cheese',  2:39000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913099452227262093/previews/G03-400x400.jpg'},
    {0:'Believe',    1:'Butter 50g',  2:16000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912564059757089918/previews/G03-400x400.jpg'},
    {0:'Honey',    1:'500 mL',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1913962139291228031/previews/G03-400x400.jpg'},
    {0:'Cheedar Cheese',    1:'1 pack',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/184/1845908973564204796/previews/G03-400x400.jpg'},
    {0:'Honey',    1:'500 mL',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/183/1835546445168514420/previews/G03-400x400.jpg'},
    {0:'Orange',    1:'1 kg',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1916129412990899249/previews/G03-400x400.jpg'}, 
    {0:'Honey',    1:'500 mL',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/183/1835546445168514420/previews/G03-400x400.jpg'},
    {0:'Yoplait',    1:'Strawberry Yogurt',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912026451478058555/previews/G03-400x400.jpg'},
    {0:'Mountain High',    1:'Plain Yogurt',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1910237089861997779/previews/G03-400x400.jpg'},
    {0:'Dannon',    1:'Oikos Plain',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912026417185429039/previews/G03-400x400.jpg'},
    {0:'Dannon',    1:'All Natural',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912026391038137895/previews/G03-400x400.jpg'},
    {0:'Chobani',    1:'Plain Yogurt',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1912025882604607000/previews/G03-400x400.jpg'},
    {0:'Yoplait',    1:'Greek Yogurt',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1910236633974707391/previews/G03-400x400.jpg'},
    {0:'Yoplait',    1:'Light Yogurt',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/191/1910236619160425659/previews/G03-400x400.jpg'},
    {0:'Ultra Milk',    1:'Milk jug(500ml)',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/189/1896653105005598529/previews/G07-200x200.jpg'},
    {0:'Ultra Milk',    1:'Milk jug(1L)',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/189/1896653093840361275/previews/G07-400x400.jpg'},
    {0:'Lactose Free',    1:'Milk',  2:15000,  3:'https://atlas-content-cdn.pixelsquid.com/assets_v2/189/1896654128902313857/previews/G03-400x400.jpg'},
    
  ]

  return ( 
    <>
      <div className="content">
        <Row>
          <Col lg='12'>
            <Row>
            {
              productKatalog.map((item, i) => {
                return (
                    <ProductCard
                        key = {i}
                        item = {item}
                    />
                );
                })
            }
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Katalog;
