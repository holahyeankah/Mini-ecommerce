import React, { Component} from 'react'
import '../App.css';
import db from './db'
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './Product'
import axios from 'axios';
import CartItem from './CartItem'
import Filter from './Filter'

class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  

  render(){
  

  return (


    <div className="container">      
      <div className="row">
      <h2 className="text-center text-white mb-5 mt-3 fs-2 fw-bold">
         Ecommerce Shopping Cart Application</h2>
         <div className="col-md-8">      
         <Filter/>
         <Product/>
         </div>
         <div className="col-md-4">
           <CartItem /> 
            
        </div>
          </div>
          </div>
 );
}
}
export default App;
