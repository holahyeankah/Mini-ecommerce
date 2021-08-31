import React, {Component} from 'react'
import Util from '../Util'
import {connect} from 'react-redux';
import './styles/CartItem.css'
import {removeCart} from '../Actions/cartActions'



class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const{cartItem, removeCart}=this.props
    
        return(
            <div className="alert alert-secondary mx-2 top text-center">
         <div className=" mb-2 fw-bold fs-5"> 
        {cartItem.length === 0 ?"Cart is empty" :<div className="mx-2 w-auto">You have {cartItem.length} {' '}
        {cartItem.length > 1 ? "items" :"item"} in your cart</div>} 
                 </div> 
  {cartItem.length > 0 && cartItem.map((item, index)=>{
     console.log(item)
 return <div key={item.id}>
    <div className="d-flex justify-content-evenly m-3 ">
    <div>{item.title} x {item.count}</div>
   ={(item.count * item.price).toFixed(3)}
    <button className="btn btn-danger btn-xs " onClick={(e)=>removeCart(cartItem, item.id)}>X</button>
 
    </div>
  
    </div>
    
    
 })}
  <br/>
 <b className="fs-6">
     Sum:
     {' '}
     {Util.formatCurrency(cartItem.reduce((a, c)=>a + c.count * c.price, 0))}
 </b>
 
 </div>            
        )
    }

}
const mapStateToProps=(state)=>({
    cartItem:state.cart.item
})
export default connect(mapStateToProps,{removeCart})(CartItem)