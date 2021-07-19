import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { WebcamCapture } from "./Webcam";


const Camera = (props) => {
  const [modal, setModal] = useState(false);
  const [image,setImage] = useState('');
  const [item,setItem] = useState('');

  const toggle = () => setModal(!modal);
  const close = () => {
    setModal(!modal);
    setImage('');
  }
  
  return (
    <div className="fixed-plugin">
      <div>
        <div onClick={toggle}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={close}>Camera</ModalHeader>
        <ModalBody>
          <WebcamCapture image={image} setImage={setImage}></WebcamCapture>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Capture</Button>{' '}
          <Button color="secondary" onClick={close}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  );
}

export default Camera;
