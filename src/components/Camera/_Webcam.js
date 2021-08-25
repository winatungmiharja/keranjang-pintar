import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Button, Spinner } from "reactstrap";
import Webcam from "react-webcam";
import Notification from "./_Notification.js";
import { makePrediction } from "api/Prediction.js";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user",
};

export const WebcamCapture = (props) => {
  const { image, item, setImage, setItem } = props;
  const [modal, setModal] = useState(false);
  const webcamRef = useRef(null);
  const imageRef = useRef(null);

  let product_detection_model;
  const MODEL_PATH =
    "https://tensorflowjskeranjangpintarmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json";
  (async function () {
    product_detection_model = await tf.loadLayersModel(MODEL_PATH, {});
    product_detection_model.summary();
  })();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [setImage]);

  const detectProduct = async () => {
    const prediction = await makePrediction(product_detection_model, imageRef);
    setItem(prediction);
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 5000);
    setImage("");
  };

  return (
    <div className="webcam-container">
      {item !== 0 && modal === true && (
        <Notification
          image={image}
          item={item}
          modal={modal}
          setModal={setModal}
        />
      )}
      <div className="webcam-img">
        {image === "" ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={"100%"}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img id="selected-image" ref={imageRef} src={image} alt="grocery" />
        )}
      </div>
      <div>
        {image !== "" ? (
          <>
            <Button
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
              className="webcam-btn"
            >
              Retake Image
            </Button>
          </>
        ) : (
          <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              capture();
              setTimeout(detectProduct, 200);
            }}
          >
            Capture
          </Button>
        )}
      </div>
    </div>
  );
};
