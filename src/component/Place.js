import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
class Placeorder extends React.Component{
    render() {
        return (
            <div className="check1">
                <div className="container">
                    <h1>Check Out</h1>
                    <div className="group-check row">
                        <p className=" col-lg-4 col-sm-4"><span  className="active"><i class="fas fa-check"></i></span>Shipping address</p>
                        <p className="col-lg-4 col-sm-4"><span  className="active"><i class="fas fa-check"></i></span>Payment details</p>
                        <p className="col-lg-4 col-sm-4"><span className="active"><i class="fas fa-check"></i></span>Review your order</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className=" col-lg-12 col-sm-12" >
                            <h3>Thank you for your order.</h3>
                            <p>Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.</p>
                        </div>
                        <hr />
                        <p>Copyright © 2021 Ahmed Amer . All Rights Reserved.</p>
                    </div>

                </div>
            </div>
    
        );
    }
}
export default Placeorder;