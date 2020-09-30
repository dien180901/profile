import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
const FormLogin = () => {
    const history=useHistory();
    const submit=()=>{
        history.push(`/`)
    }
    return (
        <div className="dien-form-login-parent">
            <div className="dien-form-login">
                <nav className="dien-nav-form-Login">
                    <div className="dien-nav-form-img">
                        <img src="/images/login-it.png" className="img-login-form"/>
                    </div>
                    <div className="dien-nav-form-img2">Login</div>            
                </nav>
                <div className="email-address">
                    <h5 className="h5-email-address">Email address</h5>
                </div> 
                <div class="div-input-email">
                    <input type="text" placeholder="Enter email" class="input-email"></input>
                </div>
                <div>
                    <h4 className="h4-form-login">We'll never share your email with anyone else.</h4>
                </div>
                <div className="email-password">
                    <h5 className="h5-email-password">Password</h5>
                </div> 
                <div class="div-input-password">
                    <input type="text" placeholder="Password" class="input-password"></input>
                </div>
                <div className="login-form-button">
                    <input type="checkbox" id="check"/>
                    <label for="check">Check me out</label>
                </div>
                <div>
                    <Button variant="danger" onClick={()=>submit()}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
