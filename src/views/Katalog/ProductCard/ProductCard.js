import React,{useState} from "react";
import {
   Col, 
   Card, 
   Badge, 
   CardImg, 
   CardBody,
} from 'reactstrap';
import './ProductCard.css'
import { useDispatchCart } from "components/Cart";


const ProductCard = ({product}) => {

    const [jumlah, setJumlah] = useState(0);
    const dispatch = useDispatchCart();
    
    const addToCart = (data) => {
      if(jumlah>0)
      {
        const item = {...data,jumlah};
        dispatch({ type: "ADD", item });
        setJumlah(0);
      }
    };
    const increment = () => {
      setJumlah(jumlah+1);
    }
    const decrement = () => {
      jumlah===0?
      setJumlah(0):
      setJumlah(jumlah-1);
    }
    
    return (
        <Col  xs='6' sm='4' md='3' lg='3'>
        <Card style={{height: '92%'}} >
            <div className='d-flex justify-content-center'>
            <CardImg src={`https://keranjang-pintar.herokuapp.com/gambar/${product.gambar}`} alt="..." className='katalog-img'/>
            </div>
            <CardBody>
                <div>
                    <Badge color="success katalog-badge"><p className='katalog-badge-text katalog-text'>Rp {product.harga}</p></Badge>
                </div>
                <p className="h5 katalog-title katalog-text">{product.nama}</p>
                <div class="btn-group btn-group-sm katalog-btn-grp" role="group" aria-label="...">
                <button type="button" class="btn btn-primary" onClick={() => addToCart(product)}><p>Add</p></button>
                    <button type="button" class="btn btn-secondary" onClick={decrement}><i className='nc-icon nc-simple-delete'></i></button>
                    <button class="btn btn-secondary">{jumlah}</button>
                    <button type="button" class="btn btn-secondary" onClick={increment}><i className='nc-icon nc-simple-add'></i></button> 
                </div>
                <br/>
                <br/>
                <br/>  
            </CardBody>
        </Card>
        </Col>
    );
}

export default ProductCard;