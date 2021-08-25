import { useCart } from "../../../api/Cart";
import React from "react";
import { Row, Col, Badge, Jumbotron, Button } from "reactstrap";

import PurchasedCard from "./_PurchasedCard.js";

const Purchased = (props) => {
  const purchasedItem = useCart();
  console.log(purchasedItem);

  return purchasedItem.length !== 0 ? (
    <Row>
      <Col xs="12" sm="12" lg="12">
        <p className="text-muted">{`Recent Purchased from ${props.user}`}</p>
        <hr className="my-2" />
        <Row>
          {purchasedItem.map((item) => {
            return <PurchasedCard user={props.user} purchasedItem={item} />;
          })}
        </Row>
      </Col>
    </Row>
  ) : (
    <div>
      <Jumbotron>
        <h3 className="display-3">Hai!</h3>
        <p className="lead">
          Supermarket ini menggunakkan teknologi Keranjang Pintar, Kamu hanya
          perlu memasukkan barang belanjaanmu
        </p>
        <hr className="my-2" />
        <p>
          Sistem kami akan otomatis mendeteksinya lewat tab ini. Selamat
          Berbelanja!
        </p>
        <br />
      </Jumbotron>
    </div>
  );
};

export default Purchased;
