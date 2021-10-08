import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
class Product extends React.Component{
    state = {
       data  : [
           
       ]
    }
    componentDidMount = () =>{
        axios.get('Data.json').then((res)=>{
            const data = res.data;
            this.setState({
               data
            })
        })
    }
    handeldataman = () =>{
        axios.get('Data-man.json').then((res)=>{
            const data = res.data;
            this.setState({
               data
            })
        })
    }
    handeldatagirls = () =>{
        axios.get('Data-girls.json').then((res)=>{
            const data = res.data;
            this.setState({
               data
            })
        })
    }
    handeldatachidren = () =>{
        axios.get('Data-children.json').then((res)=>{
            const data = res.data;
            this.setState({
               data
            })
        })
    }
 render() {
     
     return (
        <div className="product">
            <div className="container">
                <div className="btns">
                    <button onClick={this.componentDidMount}>All Product</button>
                    <button onClick={this.handeldataman}>Man</button>
                    <button onClick={this.handeldatagirls}>Girls</button>
                    <button onClick={this.handeldatachidren}>Children</button>
                </div>
                <div className="row">
                                { this.state.data.map(data => 
                                        <div className="product2 col-lg-3 col-md-6 col-sm-12 col-sx-12">
                                            <div className="overlay">
                                                 <button className="buy" onClick={()=>this.props.getid(data.id)}><Link to="/buy">Buy Now</Link></button>
                                            </div>
                                                    <img src={data.photo} alt=""/>
                                                    <p>{data.titel}</p>
                                                    <p className="price">{data.price}</p>
                                            </div>
                                )}
                </div>
            </div>
        </div>
     );
 }
}
export default Product;

