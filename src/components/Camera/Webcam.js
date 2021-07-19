import React, {  useRef } from 'react';
import { Button } from 'reactstrap';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 400,
    height: 300,
    facingMode: "user"
};

export const WebcamCapture = (props) => {

    const {image,setImage} = props;
    const webcamRef = useRef(null);

    const capture = React.useCallback(
    () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
    },[setImage]);


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image === '' ? <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={"100%"}
                    videoConstraints={videoConstraints}
                /> : <img src={image} alt="grocery"/>}
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
                    }}>Capture</Button>
          
                }
            </div>
        </div>
    );
};
