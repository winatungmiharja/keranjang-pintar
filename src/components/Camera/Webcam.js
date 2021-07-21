import React, { useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import { Button } from 'reactstrap';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 400,
    height: 300,
    facingMode: "user"
};

export const WebcamCapture = (props) => {

    const {image,setImage,setItem} = props;
    const webcamRef = useRef(null);
    const imageRef = useRef(null);

    const MODEL_PATH = "https://tensorflowjskeranjangpintarmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json";


    let product_detection_model;
    (async function () {
        product_detection_model = await tf.loadLayersModel(MODEL_PATH, {});
        product_detection_model.summary();
    })();
  
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    },[setImage]);
    
    const onDetectImage = async () => {
        if(imageRef)
        {
            let selectedImage = undefined;
            selectedImage = imageRef.current;
            
            let tensor = tf.browser.fromPixels(selectedImage)
                .resizeNearestNeighbor([225, 225]) // change the image size here
                .toFloat()
                .div(tf.scalar(255.0))
                .expandDims();
            try {
                let predictions = await product_detection_model.predict(tensor).data();
                if(predictions[0]>predictions[1])
                {
                    setItem("Tolak Angin");
                    console.log("Tolak Angin");
                }
                else
                {   
                    setItem("Ultra Milk");
                    console.log("Ultra Milk");
                }
            } catch (error) {
                console.log("failed to fetch data to model");
            }
            
        }
    };

    // useEffect(()=>{runModel()},[]);

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image === '' ? <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={"100%"}
                    videoConstraints={videoConstraints}
                /> : <img id='selected-image' ref={imageRef} src={image} alt="grocery"/>}
            </div>
            <div>
                {image !== '' ?
                    <Button color="secondary" onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</Button> :
                    <Button color="primary" onClick={(e) => {
                        e.preventDefault();
                        capture();
                        setTimeout(()=>onDetectImage(),100);
                    }}>Capture</Button>
                }
            </div>
        </div>
    );
};
