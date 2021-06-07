import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import routes from "routes.js";
import { Container, Row, Col } from 'reactstrap';
import Register from "layouts/Register/Register.js";
import Admin from "layouts/Admin.js";
import LandingPage from "./LandingPage/LandingPage";

const App = () => {
    const [isRegister,setRegister] = React.useState(0);

    if(isRegister)
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={(props) => <Admin {...props} />} />
                    <Redirect to="/admin/dashboard" />
                </Switch>
            </BrowserRouter>);
    }
    else
    {
        return(
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Col xs='12' sm='12' md='12' lg='12'><LandingPage></LandingPage></Col>
                    <Col xs='12' sm='12' md='12' lg='12'><Register routes={routes} setRegister={setRegister} ></Register></Col>
                    
                </Row>
            </Container>
        );
    }

}

export default App;
