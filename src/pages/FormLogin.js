import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {useDispatch,useSelector} from "react-redux"
import {authAction} from "../redux/action/authAction"
const FormLogin = () => {
    const history=useHistory();
    const[err,setErr]=useState(null);
    const user = useSelector((state)=>state.auth.user)
    const dispatch= useDispatch()
    const submit=(e)=>{
      e.preventDefault();
      if (!e.target.username.value||!e.target.password.value){
        setErr("you must have email address and password ")
      }
      else{
        dispatch(authAction.login({email:e.target.username.value,password:e.target.password.value}));
      setErr(null)
      history.push(`/`)
      }
      
        
        
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
        <Form onSubmit={(e)=>submit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="username"  />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
          {err===null?null:<h6>{err}</h6>}
        </Form>
      </div>
    </div>
      
        )
}

export default FormLogin
