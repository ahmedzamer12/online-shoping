import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
class Checktwo extends React.Component{
    render() {
        return (
            <div className="check1">
                <div className="container">
                    <h1>Check Out</h1>
                    <div className="group-check row">
                        <p className=" col-lg-4 col-sm-4"><span  className="active"><i class="fas fa-check"></i></span>Shipping address</p>
                        <p className="col-lg-4 col-sm-4"><span className="active">2</span>Payment details</p>
                        <p className="col-lg-4 col-sm-4"><span>3</span>Review your order</p>
                    </div>
                    <hr />
                    <div className="row">
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="Name on Card *" required/>
                    <input className="col-lg-5 col-sm-4" type="text" placeholder="Card Number *" required/>
                    <input className="col-lg-12 col-sm-4" type="text" placeholder="Expiry Data **" required/>
                    <input className="col-lg-12 col-sm-4" type="text" placeholder="CVV *"required/>
                    <input id="me" type="checkbox"required/>
                    <label className="" for="me"> Use this address for payment details</label>
                    <button className="back"><Link to="/check">Back</Link></button>
                    <button className="next"><Link to="/checkthree">Next</Link></button>
                    </div>

                </div>
            </div>
    
        );
    }
}
export default Checktwo;