import * as tf from "@tensorflow/tfjs";

export const makePrediction = async (product_detection_model, imageRef) => {
  let product = 0;
  console.log(imageRef);
  if (imageRef) {
    let selectedImage = undefined;
    selectedImage = imageRef.current;

    let tensor = tf.browser
      .fromPixels(selectedImage)
      .resizeNearestNeighbor([225, 225]) // change the image size here
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();
    try {
      let predictions = await product_detection_model.predict(tensor).data();

      if (predictions[0] > predictions[1]) {
        product = 2;
        console.log("Tolak Angin");
      } else {
        product = 1;
        console.log("Ultra Milk");
      }
      return product;
    } catch (error) {
      console.log("failed to fetch data from model");
    }
  }
  return product;
};
