import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
class Sign extends React.Component{
    render() {
        return (
            <div className="sign">
                <div className="container">
                    <div className="sign-in">
                        <h1>SIGN-IN</h1>
                        <p>enter your Email</p>
                        <input className="name" type="text" required/>
                        <br />
                        <input id="me" type="checkbox" required/>
                        <label for="me">Remember Me</label>
                        <br />
                        <button className="btn-sign"><Link to="/check">Sign-Up</Link></button>
                        <p>By logging in, you agree to the Terms of Use, Sale and Privacy Notice.</p>
                        <a href="">Don't have an account? Sign Up</a>
                    </div>
                </div>
            </div>
    
        );
    }
}
export default Sign;