import React, { useState, useEffect } from "react";
import {
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { useDispatchCart } from "../../api/Cart";

const Notification = ({ modal, setModal, image, item }) => {
  const product = [
    {
      id: "4",
      nama: "Ultramilk",
      harga: "5000",
      gambar: "produk_210612_0.jpg",
    },
    {
      id: "5",
      nama: "Ultramilk Full Cream",
      harga: "10000",
      gambar: "produk_210612_1.jpg",
    },
    {
      id: "18",
      nama: "Tolak Angin",
      harga: "35000",
      gambar: "tolak angin.jpg",
    },
  ];
  const toggle = () => setModal(!modal);
  const dispatch = useDispatchCart();

  const addToCart = (data) => {
    if (item > 0) {
      //  addItem
      //   dispatch({ type: "ADD", data});
    }
  };

  useEffect(() => {
    addToCart(product[item]);
  }, [item]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={"Modal"}>
        <ModalHeader toggle={toggle}>Benda Terdeteksi</ModalHeader>
        <ModalBody style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Dimasukkan dalam keranjang</p>
            <h6 className="text-info">{product[item].nama}</h6>
            <Badge color="success">
              <p style={{ fontSize: "20px" }}>Rp {product[item].harga}</p>
            </Badge>
          </div>
          <img
            style={{ maxWidth: "100%" }}
            src={`https://keranjang-pintar.herokuapp.com/gambar/${product[item].gambar}`}
            alt="..."
            className="katalog-img"
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Notification;
