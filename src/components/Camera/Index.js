import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { WebcamCapture } from "./_Webcam";

const Camera = (props) => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [item, setItem] = useState(0);

  const toggle = () => setModal(!modal);
  const close = () => {
    setModal(!modal);
    setImage("");
    setItem(0);
  };

  return (
    <div className="fixed-plugin">
      <div>
        <div onClick={toggle}>
          <i className="fa fa-cart-plus fa-2x" />
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={close}>Camera</ModalHeader>
          <ModalBody>
            <WebcamCapture
              image={image}
              item={item}
              setImage={setImage}
              setItem={setItem}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Camera;
