
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true:false}>
        <Row>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()} Keranjang Belanja Pintar Berbasis Komputer Vision dan Sensor untuk Membudayakan Cashier-Less Store
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
