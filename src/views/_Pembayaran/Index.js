import React, { useState } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import { Collapse, Button, CardBody, CardTitle, Card, Fade } from "reactstrap";
import QrCode from "./_QrCode/Index";
import "./_Pembayaran.css";
import CompanyLogo from "./_CompanyLogo";

const Pembayaran = () => {
  const method = ["gopay", "ovo", "dana"];
  const [isOpen, setIsOpen] = useState(false);
  const [isPick, setIsPick] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col className="pembayaran" sm="12" md="6">
            <Row className="pembayaran-center">
              <Col sm="12">
                <h6>
                  Total{" "}
                  <span className="small text-info">yang harus dibayar</span>
                </h6>
                <h2 className="title text-left">
                  Rp {"200.875"}
                  <p className="price-text-dark-blue"> +10%</p>
                </h2>
                <Button
                  color="primary"
                  onClick={toggle}
                  style={{ marginBottom: "1rem" }}
                >
                  Metode Pembayaran
                </Button>
                <Collapse isOpen={isOpen}>
                  <Fade in={isOpen} className="payment-method-group">
                    {method.map((element, i) => {
                      return (
                        <CompanyLogo
                          value={element}
                          paymentMethod={paymentMethod}
                          key={i}
                          id={i}
                          setPaymentMethod={setPaymentMethod}
                          setIsPick={setIsPick}
                        />
                      );
                    })}
                  </Fade>
                </Collapse>
              </Col>
            </Row>
            <Row className="pembayaran-end">
              <Col>
                <Button
                  color="warning"
                  onClick={toggle}
                  style={{ width: "100%" }}
                >
                  Akhiri Sesi
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm="12" md="6">
            <Fade in={isPick} className="payment-method-group">
              <Card>
                <CardBody>
                  <QrCode paymentMethod={method[paymentMethod]} />
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Pembayaran;
