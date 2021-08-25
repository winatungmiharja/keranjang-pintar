import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AskPaymentModal = ({ proceed, cancel }) => {
  const [show, setShow] = useState(true);
  const toggle = () => setShow(false);
  return (
    <div className="d-flex justify-content-center align-center">
      <Modal backdrop="static" isOpen={show} className={"className"}>
        <ModalHeader>Lanjut ke Pembayaran?</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={proceed}>
            Lanjutkan Pembayaran
          </Button>
          <Button color="secondary" onClick={cancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AskPaymentModal;
