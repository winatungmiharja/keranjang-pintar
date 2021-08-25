import React from "react";

const QrCode = ({ paymentMethod }) => {
  return (
    <div>
      <img
        src={
          require(`views/_Pembayaran/_QrCode/_QrImages/QR-${paymentMethod}.png`)
            .default
        }
        alt="gopay"
      />
    </div>
  );
};
export default QrCode;
