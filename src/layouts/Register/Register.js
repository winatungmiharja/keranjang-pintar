import React from "react";
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import './Register.css'

const Register = ({setRegister,user,setUser}) => {
  
  const submitForm = () => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
  
    // fetch('http://localhost:3000/register', {
    //     method:'post',
    //     headers: 
    //     {
    //       'Content-Type' : "application/json"
    //     },
    //     body: formData
    //     })
    
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .then(setRegister(1))
    setRegister(1);
  };

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
      
      <Card id='belanja' className='register-card'>
        <div className='register-badge'>
        <Button type="button" className="btn btn-primary">
          Active User <span className="badge bg-secondary">4</span>
        </Button>
        </div>
        <Row>
          <Col sm='12' md="6" xl="6">
            <CardImg left src={require("assets/img/register/login.jpg").default} alt="login"/>
          </Col>
          <Col sm='12' md="6" xl="6">
            <CardBody>
            <form>
                <FormGroup>
                  <Label for="exampleEmail">Nama Lengkap</Label>
                  <Input
                    onChange = {(e)=> 
                    setUser(prevState => 
                    {
                      return { ...prevState, name : e.target.value}
                    })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nama Lengkap"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Alamat Email</Label>
                  <Input
                    onChange = {(e)=> 
                    setUser(prevState => 
                    {
                      return { ...prevState, email : e.target.value}
                    })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  <FormText color="muted">
                    Email ini akan digunakan untuk mengirim struk belanjaan kamu.
                  </FormText>
                </FormGroup>
                <br/>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    dengan ini kamu menyetujui untuk berbelanja dengan metode cashless
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                  </Label>
                </FormGroup>
                <Button color="primary" type="submit" onClick={submitForm}>
                  Mulai Berbelanja
                </Button>
              </form>
            </CardBody>
          </Col>      
        </Row>
      </Card>
    </Container>
    
  );
}

export default Register;