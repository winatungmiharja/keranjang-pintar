import React from "react";
import { Card } from "reactstrap";

const CompanyLogo = ({
  value,
  setIsPick,
  setPaymentMethod,
  paymentMethod,
  id,
}) => {
  const pickPaymentMethod = () => {
    console.log(paymentMethod, id);
    if (paymentMethod !== id) {
      setIsPick(false);
      setTimeout(() => {
        setPaymentMethod(id);
        setIsPick(true);
      }, 100);
    } else {
      setPaymentMethod(id);
    }
  };
  return (
    <div class="company-logo-item">
      <Card onClick={() => pickPaymentMethod()} className="company-logo-card">
        <img alt="ss" src={require(`assets/img/logo/${value}.svg`).default} />
      </Card>
      {paymentMethod === id && <span className="company-logo-line"></span>}
    </div>
  );
};
export default CompanyLogo;
