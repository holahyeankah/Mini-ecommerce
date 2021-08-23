import React, { Component} from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './Product'
import axios from 'axios';
import CartItem from './CartItem'
import Filter from './Filter'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      products:[],
      filteredProducts:[],
      cart:[],
      size:"",
      sort:"",
      error:[]
      
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/products')
    .then(response=>{
       this.setState({products:response.data, filteredProducts:response.data})
       if(localStorage.getItem('cartItem')){
         this.setState({cart:JSON.parse(localStorage.getItem('cartItem'))})
      }
    }).catch(err=>{
        this.setState({error:err})
    })
  }
  

 
  handleAddCart=(e, product)=>{
      this.setState(state=>{
        const cartItem=state.cart
        let productAlreadyInCart=false
        cartItem.forEach(item=>{
            if(item.id===product.id){
              item.quantity +=1;
                productAlreadyInCart=true;            
               
            }
           
        });
        if(!productAlreadyInCart){
          cartItem.push({...product})         
      }
      localStorage.setItem("cartItem", cartItem)
      return cartItem
      })  
  }


  removeCart=(item)=>{
    this.setState((prevState)=>({
       cart:prevState.cart.filter(option=>{
           return item.id!==option.id
       })
   }) )

   }
  
  

  handleChangeSort=(e)=>{
    this.setState({sort:e.target.value})
    this.listProduct()
  }


  handleChangeSize=(e)=>{
    this.setState({size:e.target.value})
    this.filterSize()
  }

  filterSize(){
    this.setState(state=>{ 
    if(state.size !==''){
      return {filteredProducts:state.products.filter(
       (x) => x.availableSizes.indexOf(state.size.toString().toUpperCase()) >= 0 ),}
       }

      return {filteredProducts:state.products}
    })
  };


  listProduct(){
    this.setState(state=>{
      if(state.sort !==""){
        state.products.sort((a,b)=>state.sort ==="lowest-price" 
        ?(a.price > b.price ? 1 :-1) :(a.price < b.price ? 1 :-1))
      } else{
        state.products.sort((a, b)=> a.id >b.id ? 1 : -1)
      }
     
      return {filteredProducts:state.products}
    })
  }

  render(){
    const{products, filteredProducts, cart, size, sort}=this.state;

  return (
    <div className="container">      
      <div className="row">
        <div className="col-md-8">
        <h2 className="text-center text-white m-4 mt-2 fs-2 fw-bold">
          Ecommerce Shopping Cart Application</h2>
        <Filter count={filteredProducts.length} size={size} sort={sort}
         handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort}/>
          <Product productItem={filteredProducts}  handleAddCart={this.handleAddCart}/>
        </div>
        <div className="col-md-4">
            <CartItem cartItem={cart} handleRemoveCart={this.removeCart}/>
        </div>
      </div>

    </div>
  );
}
}
export default App;
