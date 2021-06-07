import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardLink, CardSubtitle, CardText, Button, Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import './Register.css'

const Register = ({setRegister}) => {
  
  const [name, setName] = React.useState(' ');
  const [email, setEmail] = React.useState('');
  
  
  const onNameChange = (event) => {
    console.log(event.target.value);
  }
  const onEmailChange = (event) => {
    console.log(event.target.value);
  }
  const onSubmitChange = () => {
      setRegister(1);
      
  }
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
      
      <Card id='belanja' className='register-card'>
        
        <div className='register-badge'>
        <Button type="button" class="btn btn-primary">
          Active User <span class="badge bg-secondary">4</span>
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
                    onChange = {onNameChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nama Lengkap"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Alamat Email</Label>
                  <Input
                    onChange = {onEmailChange}
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
                <Button color="primary" type="submit" onClick={onSubmitChange}>
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