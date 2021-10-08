import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
class Cart extends React.Component{
    state = {
        cart : [

        ],
        cartid : [
       
        ]
    }
    componentDidMount = () =>{
        axios.get('All-data.json').then((res)=>{
            const cart = res.data;
            this.setState({
               cart
            })
        })
        this.setState({
            cartid: this.props.buyid
        })
       
    }
    render() {  
        return (
             <div>
                 <div className="container">
                     <div className="row">
                     {this.state.cartid.map(cartid=>
                    <div>
                        {this.state.cart.filter( name => name.id  == cartid ).map(filteredName => (
                                <div className="row cart col-lg-8 col-md-12 col-sm-12 col-sx-12">
                                    <div className="col-lg-4 col-sm-6"><img src={filteredName.photo} alt=""/></div>
                                    <div className="detials col-lg-8 col-sm-6">
                                        <h3>Name : {filteredName.titel}</h3>
                                        <h4>Quantity : {this.props.num}</h4>
                                        <h5>Size : Medium</h5>
                                        <p>Cost : {this.props.cost}</p> 
                                        <div className="btn-cart">
                                            <button><Link to="/sign">Buy Now</Link></button>
                                            <button className="delete">Delete</button>
                                        </div>
                                        
                                    </div>
                                </div>                
                            ))}
                    </div>
                    )}  
                     </div>
                 </div>
             </div>
        );
    }
}
export default Cart;