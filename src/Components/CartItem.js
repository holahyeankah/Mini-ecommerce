import React, {Component} from 'react'
import Util from '../Util'



class CartItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const{cartItem, handleRemoveCart}=this.props
    
        const listCount=cartItem.length
       let list;
       if(cartItem.length > 1){
          list="products"
       }else{
           list="product"
       }
     
        return(
            <div className="alert alert-secondary mx-3 mt-5 text-center">
                <div className=" mb-2 fw-bold fs-5">
                {cartItem.length === 0 ?"Cart is empty" :<div>You have {listCount} {list} in your cart</div>}
                </div>
 {cartItem.length > 0 && cartItem.map((item, index)=>{
     console.log(item)
 return <div key={index}>
    <div className="d-flex justify-content-evenly m-3 ">
    <div>{item.title} x {item.quantity}</div>
   ={item.quantity * item.price}
    <button className="btn btn-danger btn-xs " onClick={()=>handleRemoveCart(item)}>X</button>
 
    </div>
    </div>
    
 })}
 <br/>
 <b className="fs-6">
     Sum:
     {' '}
     {Util.formatCurrency(cartItem.reduce((a, c)=>a + c.quantity*c.price, 0))}
 </b>
 </div>            
        )
    }

}
export default CartItem