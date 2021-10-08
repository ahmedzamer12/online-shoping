import React, { Component } from 'react';
import Photo1 from '../img/bg_1.jpg';
import Photo2 from '../img/bg_2.jpg';
import Photo3 from '../img/bg-3.jpg';               
const SlidePhoto = () => {
    return (
        <div className="slide">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={Photo3} class="d-block w-100" alt="..." />
                           <div className="titel">
                                <span>WOMEN BESTSELLER LIST</span>
                                <h1>New Collection</h1>
                                <h2>-New Design</h2>
                                <button>SHOP NOW</button>
                            </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Photo2} class="d-block w-100" alt="..."/>
                        <div className="titel">
                            <span>WOMEN BESTSELLER LIST</span>
                            <h1>New Collection</h1>
                            <h2>-New Design</h2>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Photo1} class="d-block w-100" alt="..."/>
                        <div className="titel">
                            <span>WOMEN BESTSELLER LIST</span>
                            <h1>New Collection</h1>
                            <h2>-New Design</h2>
                            <button>SHOP NOW</button>  
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
}
export default SlidePhoto;