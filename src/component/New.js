import React from 'react';
import Photo4 from '../img/shoes1.jpg';
import Photo5 from '../img/shoes3.jpg';
import Photo6 from '../img/shoes2.jpg'; 
const New = () => {
    return(
        <div className="new">
            <div className="container">
                <div className="titel2">
                    <h1>Latest news</h1>
                    <span className="liner"></span><span>See our latest news</span>
                </div>
                    <div className="row">
                        <div class="card">
                                <img src={Photo4} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Donec Pellesque Non Risus</h5>
                                    <p class="card-text">Vestibulum malesuada varius mi id congue. Phasellus aliquam mollis ex,...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                    </div>
                    <div class="card">
                                <img src={Photo5} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Donec Pellesque Non Risus</h5>
                                    <p class="card-text">Vestibulum malesuada varius mi id congue. Phasellus aliquam mollis ex,...</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>
                    </div>
                        <div class="card">
                                        <img src={Photo6} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Donec Pellesque Non Risus</h5>
                                            <p class="card-text">Vestibulum malesuada varius mi id congue. Phasellus aliquam mollis ex,...</p>
                                            <a href="#" class="btn btn-primary">Read More</a>
                                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default New;