import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// reactstrap components
import ChoosePaymentMethod from "./_ChoosePaymentMethod";
import AskPaymentModal from "./_AskPaymentModal";

const Pembayaran = (props) => {
  const { setFocusedPath } = props;
  const [modal, setModal] = useState(1);
  const [cancel, setCancel] = useState(0);

  const userProceedToPayment = () => {
    setModal(false);
    setFocusedPath("/pembayaran");
  };

  const userCancelledPayment = () => {
    setCancel(true);
    setModal(false);
    setFocusedPath("");
  };

  return (
    <>
      <div className="content">
        {cancel && <Redirect to="/admin/dashboard" />}
        {modal && (
          <AskPaymentModal
            proceed={userProceedToPayment}
            cancel={userCancelledPayment}
          />
        )}
        <ChoosePaymentMethod />
      </div>
    </>
  );
};

export default Pembayaran;
