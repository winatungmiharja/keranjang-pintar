import React from "react";
import { useDispatchCart } from "api/Cart.js";
import { useUser } from "api/User.js";
import { Row, Col } from "reactstrap";
import PriceCard from "./_PriceCard/Index.js";
import Purchased from "./_Purchased/Index.js";

const Dashboard = (props) => {
  const user = useUser();
  return (
    <>
      <div className="content">
        <Row>
          <Col sm="12" md="8" lg="8">
            <Purchased user={user} />
          </Col>
          <Col>
            <PriceCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
