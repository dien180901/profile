import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const FormLogin = () => {
    const history=useHistory();
    const submit=()=>{
        history.push(`/`)
    }
    return (
    
        
         <div className="dien-form-login-parent">
         <Navbar bg="dark" variant="dark" fixed="top">
            <div className="dien-parent">
                    <img src="/images/logo-login.png" className="dien-image"/>
            </div>
            <Nav className="mr-auto">
                <Nav.Link href="#home"> </Nav.Link>
                <Nav.Link href="#features"> </Nav.Link>
                <Nav.Link href="#pricing"> </Nav.Link>
            </Nav>
        
        </Navbar>
            <div className="dien-form-login">
                    <nav className="dien-nav-form-Login">
                    <div className="dien-nav-form-img">
                        <img src="/images/login-it.png" className="img-login-form"/>
                    </div>
                    <div className="dien-nav-form-img2">Login</div>            
                </nav>
                <Form>
                <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
         </div>
      
        )
}

export default FormLogin
