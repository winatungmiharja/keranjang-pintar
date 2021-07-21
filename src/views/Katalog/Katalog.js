import React,{useEffect, useState} from "react";
import { useLocation } from "react-router";

// reactstrap components
import {
  Row, Col, Alert
} from 'reactstrap';
import ProductCard from "./ProductCard/ProductCard.js";

const Katalog = (props) => {
  const [item,setItem] = useState({});
  const [isSuccess,setSuccess] = useState(0);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  async function fetchKatalog(){
    try {
      const req = await fetch("https://keranjang-pintar.herokuapp.com/getKatalog.php");
      // const res = {"isSuccess":true,"message":"Data katalog ditemukan","data":[{"id":"4","nama":"Ultramilk Rasa Moka","harga":"5000","gambar":"produk_210612_0.jpg"},{"id":"5","nama":"Ultramilk Full Cream","harga":"10000","gambar":"produk_210612_1.jpg"},{"id":"6","nama":"Emani Mozza Sensasi Mozzarella","harga":"29500","gambar":"produk_210612_2.jpg"},{"id":"7","nama":"Oreo Cookie Crumb","harga":"70000","gambar":"produk_210612_3.jpg"},{"id":"8","nama":"Nabati Graker","harga":"6000","gambar":"produk_210612_4.jpg"},{"id":"9","nama":"Nabati Bites","harga":"8000","gambar":"produk_210612_5.jpg"},{"id":"10","nama":"Laverland Crunch","harga":"50000","gambar":"produk_210612_6.jpg"},{"id":"11","nama":"Bulgarian Yogurt","harga":"20000","gambar":"produk_210612_7.jpg"},{"id":"12","nama":"Khong Guan Biscuits","harga":"45000","gambar":"produk_210612_8.jpg"},{"id":"13","nama":"Kata Oma Telur Gabus","harga":"30000","gambar":"produk_210612_9.jpg"},{"id":"14","nama":"dairy milk oreo","harga":"15000","gambar":"produk_210612_10.jpg"},{"id":"15","nama":"Choco Pie Dark","harga":"20000","gambar":"produk_210612_11.jpg"},{"id":"16","nama":"Choco Chips Simba","harga":"20000","gambar":"produk_210612_12.jpg"},{"id":"17","nama":"Biokul Greek Yogurt","harga":"60000","gambar":"produk_210612_13.jpg"}]};
      const res = await req.json();
      if(res.isSuccess===true)
      {
        setItem(res.data);
        setSuccess(1);
      }
      else
      {
        setSuccess(0);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    fetchKatalog();
  },[]);
  
  return ( 
    <>
      
      <div className="content">
        <Row>
          <Col lg='12'>
            {isSuccess===0 ? 
              <Alert color="info">
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              {` Loading .... `}
              </Alert>
            :
            <div>
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
              Successfull!
            </Alert>
              <Row>
                {
                  item.map((item, i) => {
                    return (
                        <ProductCard
                            key = {i}
                            product = {item}
                        />
                    );
                    })
                }
              </Row>
            </div>
            
            }
            
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Katalog;
