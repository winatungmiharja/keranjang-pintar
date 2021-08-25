import React, { useState } from "react";
import { useDispatchCart } from "../../../api/Cart";
import { useUser } from "../../../api/User";

import {
  Badge,
  Button,
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import { addItem } from "../../../api/CartOperation.js";
import "./_PurchasedCard.css";

const PurchasedCard = ({ purchasedItem, user }) => {
  const dispatch = useDispatchCart();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [count, setCount] = useState(purchasedItem.jumlah);
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  const addToCart = (item, user) => {
    let update = addItem(item, user);
    update.then((data) => dispatch({ type: "ADD", data }));
  };

  const deleteFromCart = (item, user) => {
    let update = removeItem(item, user);
    update.then((data) => dispatch({ type: "REMOVE", data }));
  };

  const editItem = (item) => {
    if (count > purchasedItem.jumlah) {
      addToCart(item, user);
    } else if (count < purchasedItem.jumlah && count > 0) {
      deleteFromCart(item, user);
    }
    // else if (count === 0) {
    //   const item = { ...data };
    //   dispatch({ type: "DELETE", item, user });
    // }
  };

  const removeItem = (data) => {
    const item = { ...data };
    dispatch({ type: "DELETE", item, user });
  };
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <Col xs="12" sm="6" md="6" lg="12">
      <Card className="purchased-card">
        <Row>
          <Col md="12" lg="3" className="d-flex justify-content-center">
            <CardImg
              src={`https://keranjang-pintar.herokuapp.com/gambar/${purchasedItem.gambar}`}
              alt="..."
              className="purchased-img"
            />
          </Col>
          <Col md="12" lg="9">
            <div className="purchased-text-group">
              <CardBody>
                <div className="puchased-text-top">
                  <p className="h5 purchased-title purchased-text">
                    {purchasedItem.nama}
                  </p>
                  <Dropdown
                    className="purchased-btn-edit"
                    isOpen={dropdownOpen}
                    toggle={(e) => dropdownToggle(e)}
                  >
                    <DropdownToggle nav>
                      <p className="purchased-badge-text">edit</p>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <div
                        className="w-100 btn-group btn-group-sm purchased-btn-grp"
                        role="group"
                        aria-label="..."
                      >
                        <Button
                          type="Button"
                          class="btn btn-secondary"
                          onClick={decrement}
                        >
                          <i className="nc-icon nc-simple-delete"></i>
                        </Button>
                        <Button class="btn btn-secondary">{count}</Button>
                        <Button
                          type="Button"
                          class="btn btn-secondary"
                          onClick={increment}
                        >
                          <i className="nc-icon nc-simple-add"></i>
                        </Button>
                      </div>
                      <DropdownItem onClick={() => editItem(purchasedItem)}>
                        Update
                      </DropdownItem>
                      <DropdownItem onClick={() => removeItem(purchasedItem)}>
                        Remove
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <Badge color="success purchased-badge">
                  <p className="purchased-price-text">
                    Rp {purchasedItem.harga}
                  </p>
                </Badge>
              </CardBody>
            </div>
          </Col>
          <div className="purchased-text-jumlah">
            <p>x {purchasedItem.jumlah}</p>
          </div>
        </Row>
      </Card>
    </Col>
  );
};

export default PurchasedCard;
