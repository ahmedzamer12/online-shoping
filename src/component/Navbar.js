import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><strong>A</strong>nivio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">    
                            <li className="nav-item">
                               <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                               <Link to=""  className="nav-link" >Shop</Link >
                            </li>
                            <li className="nav-item">
                               <Link to="" className="nav-link">Blog</Link>
                            </li> 
                            <li className="nav-item">
                               <Link to="" className="nav-link" >Pages</Link>
                            </li>
                            <li className="nav-item">
                               <Link to="" className="nav-link" >Buy</Link>
                            </li>
                    </ul>
                    </div>
                    <button type="button" className="btn position-relative">
                            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {props.cart}
                            <span className="visually-hidden">unread messages</span>
                            </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
export default Nav;