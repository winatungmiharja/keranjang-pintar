import React from "react";
import {
    Row,
    Col,
  } from "reactstrap";

import ProductCard from "./ProductCard.js";

const Products = () => {
    return (
      <Row >
      <Col xs='12' sm='5' >
        <Row >
        <ProductCard 
            image={"https://www.pngjoy.com/pngl/70/1532020_bowl-of-cereal-kellogg-s-corn-flakes-2015.png"} 
            name={"Corn Flakes"} price={'20.360'} 
            about={'ini adalah yogurt berkualitas terbuat dari susu sapi terkenal dengan pembuatan alami'}/>
          <ProductCard 
            image={"https://www.nicepng.com/png/full/103-1037016_milk-carton-png-carton-of-milk-png.png"} 
            name={"Milk Carton"} price={'20.360'} 
            about={'ini adalah yogurt berkualitas terbuat dari susu sapi terkenal dengan pembuatan alami'}/>
          
            
        </Row>
      </Col>
      <Col xs='12' sm='7'>
        <Row>
        <ProductCard 
          image={"https://png2.cleanpng.com/sh/dc47e84e6d806af05b128d58d886589b/L0KzQYi4UsE3N2lnfJGAYUO4c7e7gck4aWM4UJC9N0WzRIiBUME2OWQ5T6cEMUS5QoK4TwBvbz==/5a35cf4a97a238.4750478015134759146211.png"} 
          name={"European Blueberry"} price={'20.360'} 
          about={'ini adalah yogurt berkualitas terbuat dari susu sapi terkenal dengan pembuatan alami'}/>
          <ProductCard 
          image={"https://png2.cleanpng.com/sh/9b808f965c41e027d270a3d3db6f15af/L0KzQYi4UsIxN5NwiZGAYUPkcoO5hMQ0aWc2UZCANEe4QIS7VsE2OWQ8Uag6NEG1R4i4VcIxPF91htk=/5a3ab22d43a619.54750346151379614127715204.png"} 
          name={"Dannon yogurt"} price={'33.200'} 
          about={'ini adalah yogurt berkualitas terbuat dari susu sapi terkenal dengan pembuatan alami'}/>
        <ProductCard 
          image={"https://png2.cleanpng.com/sh/dc47e84e6d806af05b128d58d886589b/L0KzQYi4UsE3N2lnfJGAYUO4c7e7gck4aWM4UJC9N0WzRIiBUME2OWQ5T6cEMUS5QoK4TwBvbz==/5a35cf4a97a238.4750478015134759146211.png"} 
          name={"European Blueberry"} price={'20.360'} 
          about={'ini adalah yogurt berkualitas terbuat dari susu sapi terkenal dengan pembuatan alami'}/>
          
        
            
        </Row>
      </Col>
    </Row>      
          
  );
}

export default Products;