import React,{useState, useEffect} from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

function Pembayaran() {
  const [katalogData,updateKatalog] = useState(0);

  
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://keranjang-pintar.herokuapp.com/getKatalog.php', {
    headers: {
        'Content-Type' : "application/json",
        "Access-Control-Allow-Origin": "*"
        }
    })
        .then(response => response.json())
        .then(data => updateKatalog(data))
        .catch(err => console.log)
  },[])
  
        
          
  return (
    <>
      <div className="content">
        <Row>
          <Col>
          {katalogData ? 
            katalogData.map(img => 
              (<div>
                {img ? <img src='https://cors-anywhere.herokuapp.com/https://keranjang-pintar.herokuapp.com/'
                        alt={img.img.name}/>
                      
                      :<span>deleted</span>}</div>)): 
                <h3>loading</h3>
          }
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pembayaran;
