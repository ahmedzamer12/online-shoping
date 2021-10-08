import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom"; 
class Check extends React.Component{
    render() {
        return (
            <div className="check1">
                <div className="container">
                    <h1>Check Out</h1>
                    <div className="group-check row">
                        <p className=" col-lg-4 col-sm-4"><span className="active">1</span>Shipping address</p>
                        <p className="col-lg-4 col-sm-4"><span>2</span>Payment details</p>
                        <p className="col-lg-4 col-sm-4"><span>3</span>Review your order</p>
                    </div>
                    <hr />
                    <div className="row">
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="Frist Name *" required/>
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="Last Name *" required/>
                    <input className="col-lg-12 col-sm-4" type="text" placeholder="Address Line *" required/>
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="City*" required/>
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="State/region *" required/>
                    <input className="col-lg-12 col-sm-4" type="text" placeholder="Zip/Postal Code *"required/>
                    <input id="me" type="checkbox"required/>
                    <label className="" for="me"> Use this address for payment details</label>
                    <button className="next"><Link to="/Checktwo">Next</Link></button>
                    </div>

                </div>
            </div>
    
        );
    }
}
export default Check;