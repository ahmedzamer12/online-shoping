import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
class Checkthree extends React.Component{
    render() {
        return (
            <div className="check1">
                <div className="container">
                    <h1>Check Out</h1>
                    <div className="group-check row">
                        <p className=" col-lg-4 col-sm-4"><span  className="active"><i class="fas fa-check"></i></span>Shipping address</p>
                        <p className="col-lg-4 col-sm-4"><span  className="active"><i class="fas fa-check"></i></span>Payment details</p>
                        <p className="col-lg-4 col-sm-4"><span className="active">3</span>Review your order</p>
                        <h2>Order summary</h2>
                    </div>
                    <hr />
                    <div className="row">
                        <div className=" col-lg-6 col-sm-12" >
                            <h3>Shipping</h3>
                            <span>John Smith</span>
                            <p>1 Material-UI Drive, Reactville, Anytown, 99999, USA</p>
                        </div>
                        <div className=" col-lg-6 col-sm-12" >
                            <h3>Payment details</h3>
                            <p>Card type :Visa</p>
                            <p>Card holder :Mr John Smith</p>
                            <p>Card number :xxxx-xxxx-xxxx-1234</p>
                            <p>Expiry date :04/2024</p>
                            <strong>Titel : 300$</strong>
                        </div>
                    <button className="back"><Link to="/Checktwo">Back</Link></button>
                    <button className="next"><Link to="/place">Place Order</Link></button>
                    </div>

                </div>
            </div>
    
        );
    }
}
export default Checkthree;