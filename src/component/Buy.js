import React from 'react';
import axios from 'axios';
import photo1 from '../img/man4.jpg';
import photo2 from '../img/man5.jpg';
import photo3 from '../img/man7.jpg';
import photo4 from '../img/girls1.jpg';
import photo5 from '../img/girls3.jpg';
import photo6 from '../img/girls4.jpg';
import photo7 from '../img/children1.jpg';
import photo8 from '../img/children5.jpg';
class Buy extends React.Component {
    state = {
        buy : [

        ]
    }
    componentDidMount = () =>{
        axios.get('All-data.json').then((res)=>{
            const buy = res.data;
            this.setState({
               buy
            })
        })
    }
    render() {
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                       <div className="shop-img col-lg-6 col-md-6 col-sm-12 col-sx-12">
                            {this.state.buy.filter( name => name.id  == this.props.buyid ).map(filteredName => (
                                <img src={filteredName.photo} alt=""/>
                            ))}
                       </div>
                       <div className="content-shop col-lg-6 col-md-6 col-sm-12 col-sx-12">
                           {this.state.buy.filter( name => name.id  == this.props.buyid ).map(filteredName => (
                                <h1>{filteredName.titel}</h1>
                            ))}
                           <h2>Price : 139 $</h2>
                           <div className="size">S DOLLER 139$</div><div className="size">M DOLLER 200$</div><div className="size">L DOLLER 307$</div><div className="size">XL DOLLER 400</div>
                           <br />
                           <button className="plus" onClick={()=>this.props.decreas()}><h5>-</h5></button>
                           <span className="num">{this.props.num}</span> 
                           <button className="plus" onClick={()=>this.props.increas()}><h5>+</h5></button>
                           <button onClick={()=>this.props.getid(this.state.buy.id )}  onClick={()=>this.props.increased()} onClick={()=>this.props.cost()} className="add">Add To Cart</button>
                           <br/>
                           <br />
                               <h5>Shipping && Returns</h5>
                               <h5>FREE SHIPPING on orders over EGP 2160.00</h5>
                           <p>
                               Expedited Shipping: 3-6 business days.
                               <br />
                               Standard Shipping: 7-14 business days.
                            </p>
                            <h6>Worry-free Retur</h6>
                            <p>us within 14 days upon receiving the items to initiate the return process if you are not satisfied with your orders.</p>
                       </div>
                    </div>
                    <div className="row complete">
                    <h1>COMPLETE YOUR OUTFIT</h1>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo1} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo2} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo3} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo4} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <h1>YOU MAY ALSO LIKE</h1>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo5} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo6} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo7} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12">
                            <img src ={photo8} alt="" />
                            <h4>EGP 403.40</h4>
                            <h5>EGP 749.76</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Buy;