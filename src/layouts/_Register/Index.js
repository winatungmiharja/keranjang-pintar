import React, { useState } from "react";
import { fetchUser, fetchItem } from "api/CartOperation.js";
import { useDispatchCart } from "api/Cart.js";
import { useDispatchUser } from "api/User.js";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  Col,
  Container,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
} from "reactstrap";
import "./_Register.css";

const Register = ({ setRegister }) => {
  const dispatchCart = useDispatchCart();
  const dispatchUser = useDispatchUser();
  //setRegister => to change route when user register

  //tempUser => to save user name and email input
  const [user, setUser] = useState({ name: "", email: "" });
  const [buttonStatus, setButtonStatus] = useState("Mulai Berbelanja");

  const submitForm = (e) => {
    e.preventDefault();
    setButtonStatus("Loading....");

    //REAL --------------------->
    // fetchUser(tempUser)
    //   .then((data) => {
    //     setUser((prevState) => {
    //       return {
    //         name: receiveData.name,
    //         email: receiveData.email,
    //         id: receiveData.id,
    //       };
    //     });
    //   })
    //   .then(setRegister(1));
    //------------------------>

    //DUMMY --------------------->
    const receiveData = {
      isSuccess: true,
      message: "Register user success",
      data: {
        name: "cahya",
        email: "cahya123@gmail.com",
        id: 2,
      },
    };
    const getData = (user) => {
      fetchItem(user).then((props) =>
        dispatchCart({ type: "FETCH", data: props.data })
      );
    };

    const getUser = (user) => {
      dispatchUser({ type: "FETCH", data: user });
    };
    function dummyPromise() {
      return new Promise((resolve, reject) => {
        getUser(receiveData.data);
        getData(receiveData.data);
        resolve();
      });
    }
    const registerUser = async () => {
      try {
        await dummyPromise();
      } catch (error) {
        console.log(error);
      }
    };
    registerUser().then(setRegister(1));
    //------------------------->
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card id="belanja" className="register-card">
        <div className="register-badge">
          <Button type="button" className="btn btn-primary">
            Active User
            <span className="badge bg-secondary">4</span>
          </Button>
        </div>
        <Row>
          <Col sm="12" md="6" xl="6">
            <CardImg
              left
              src={require("assets/img/register/login.jpg").default}
              alt="login"
            />
          </Col>
          <Col sm="12" md="6" xl="6">
            <CardBody>
              <form>
                <FormGroup>
                  <Label for="exampleEmail">Nama Lengkap</Label>
                  <Input
                    onChange={(e) =>
                      setUser((prevState) => {
                        return { ...prevState, name: e.target.value };
                      })
                    }
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nama Lengkap"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Alamat Email</Label>
                  <Input
                    onChange={(e) =>
                      setUser((prevState) => {
                        return { ...prevState, email: e.target.value };
                      })
                    }
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  <FormText color="muted">
                    Email ini akan digunakan untuk mengirim struk belanjaan
                    kamu.
                  </FormText>
                </FormGroup>
                <br />
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> dengan ini kamu menyetujui untuk
                    berbelanja dengan metode cashless
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                  </Label>
                </FormGroup>
                <Button
                  color="primary"
                  type="submit"
                  onClick={(e) => submitForm(e)}
                >
                  {buttonStatus}
                </Button>
              </form>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Register;
