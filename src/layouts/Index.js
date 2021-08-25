import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "routes.js";

import { Container, Row, Col } from "reactstrap";
import Admin from "../views/Index.js";
import Register from "./_Register/Index.js";
import LandingPage from "./_LandingPage/Index.js";

const App = () => {
  //to change views when user is register or not
  const [isRegister, setRegister] = useState(0);
  return (
    <div>
      {isRegister ? (
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={(props) => <Admin {...props} />} />
            <Redirect to="/admin/dashboard" />
          </Switch>
        </BrowserRouter>
      ) : (
        <Container className="d-flex justify-content-center">
          <Row>
            <Col xs="12" sm="12" md="12" lg="12">
              <LandingPage></LandingPage>
            </Col>
            <Col xs="12" sm="12" md="12" lg="12">
              <Register routes={routes} setRegister={setRegister} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
export default App;
