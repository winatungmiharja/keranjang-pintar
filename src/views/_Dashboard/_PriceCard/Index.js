import { useCart, totalCart, recentCart } from "../../../api/Cart";
import React from "react";
import { Button, Row, Col, Card, CardBody } from "reactstrap";

import {
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";

import Receipt from "./_Receipt/Index";

import "./_PriceCard.scss";

const PriceCard = () => {
  const purchasedItem = useCart();
  const total = totalCart(purchasedItem);
  // console.log("recentCart");
  // const test = recentCart();
  // console.log(test);

  return (
    <Card className="price-card">
      <p className="lead text-center price-text-white-2">Total</p>
      <CardBody className="price-card-body">
        <Row>
          <Col xs="9" sm="10" md="9" lg="9">
            <h2 className="title text-left price-text-white">
              Rp {total}
              <p className="price-text-dark-blue"> +4.500</p>
            </h2>
          </Col>
          <Col xs="1" sm="1" md="2" lg="1">
            <UncontrolledButtonDropdown>
              <DropdownToggle
                caret
                className="dropdown-toggle-split"
                color="secondary"
              />
              <DropdownMenu
                style={{
                  width: "270px",
                  height: "350px",
                  overflowX: "scroll",
                  overflowY: "scroll",
                }}
              >
                <Receipt items={purchasedItem}></Receipt>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <p className="lead text-center price-text-white-2">
            Selesai Berbelanja?
          </p>
          <Button className="price-pay-btn">
            <p className="price-text-dark-blue">Bayar</p>
          </Button>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PriceCard;
