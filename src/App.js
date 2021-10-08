import React from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import Nav from './component/Navbar';
import SlidePhoto from './component/SlidePhoto';
import Divs from './component/Div';
import Email from './component/email';
import Product from './component/Product';
import Footer from './component/Footer';
import New from './component/New';
import Buy from './component/Buy';
import Cart from './component/Cart';
import Sign from './component/Sign';
import Check from './component/Check-one';
import Checktwo from './component/Check-two';
import Checkthree from './component/Check-three';
import Placeorder from './component/Place';
class App extends React.Component {
  state = {
    id : 0 ,
    num : 0 , 
    cart : 0,
    allid:[],
    cost :300
  }
  handelid = (id) => {
   this.setState({
     id:id
   })
   this.setState(prevState => ({
    allid: [...prevState.allid , id ] 
}))
  }
  increased = () => {
    this.setState({
        cart : this.state.cart+1
    })
}
increas = () => {
  this.setState({
      num : this.state.num+1
  })
}
decreas = () => {
  if (this.state.num < 1) {
    this.setState({
      num :0
    })  
  }
   else {
    this.setState({
      num : this.state.num-1
    })
  }
}
cost = () => {
  this.setState({
    cost:this.state.cost * this.state.num
  })
}
 
render() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App}>
                  <Nav cart = {this.state.cart} />
                  <SlidePhoto />
                  <Divs />
                  <Product  getid={this.handelid} dataid = {this.state.id} />
                  <New />
                  <Email />
                  <Footer/>
              </Route>
              <Route  path="/buy" component={Buy}>
                  <Nav cart = {this.state.cart} />
                  <Buy  buyid = {this.state.id} num = {this.state.num}  increas = {this.increas} decreas={this.decreas} increased = {this.increased} getid={this.handelid} cost ={this.cost}/>
                  <Footer/>
              </Route>
              <Route  path="/cart" component={Cart}>
                  <Nav cart = {this.state.cart} />
                  <Cart cost = {this.state.cost} buyid = {this.state.allid} num = {this.state.num} />
                  <Footer/>
              </Route>
              <Route path="/sign" component={Sign}>
                <Nav cart = {this.state.cart} />
                <Sign />
                <Footer/>
              </Route>
              <Route path="/check" component={Check}>
                <Check />
              </Route>
              <Route path="/checktwo" component={Checktwo}>
                <Checktwo />
              </Route>
              <Route path="/checkthree" component={Checkthree}>
                <Checkthree />
              </Route>
              <Route path="/place" component={Placeorder}>
                <Placeorder />
              </Route>
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
