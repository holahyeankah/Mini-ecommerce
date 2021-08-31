import React, {Component} from 'react';
import Util from '../Util';
import './styles/Product.css';
import {connect} from 'react-redux';
import {addCart} from '../Actions/cartActions'
import {fetchProduct} from '../Actions/productAction'


class Product extends Component{
constructor(props){
    super(props);
    this.state={
      update:false
    }
}


componentDidMount(){
 this.getCartItem()
      
  };

  
  getCartItem = () => {
 const {fetchProduct}= this.props;
 fetchProduct()
this.setState({update:true})
  
}




render(){
    const {products, cartItem}=this.props
    const productItems = products.length > 0 && products.map((product, i) => 
       <div className="col-md-4" key={product.id}>
          <div className="thumbnail text-center">
              <div className="card bg-secondary mx-3 my-3">
            <a
              className="text-decoration-none" href={`#${product.id}`}  
              onClick={(e) => this.props.addCart(cartItem,  product)}         
            >
              <img className="img-fluid img-thumbnail" src={`products/${product.sku}_2.jpg`} alt={product.title} />
              <p className="text-white mt-2">{product.title}</p>
            </a>
            <b className="text-white">{Util.formatCurrency(product.price)}</b>
            <button
              className="btn btn-md w-50 align-self-center mb-2 btn-secondary"
              onClick={(e) => this.props.addCart(cartItem, product)}
            >
              Add to cart
            </button>
          </div>
        </div>
        </div>
    ) 
     
                                                                  
    return(
        <div className="row">     
{productItems}

  </div>
    )
}
}
const mapStateToProps=(state)=>({
    products:state.product.filteredProduct,
    cartItem:state.cart.item
})

export default connect(mapStateToProps, {fetchProduct, addCart})(Product)