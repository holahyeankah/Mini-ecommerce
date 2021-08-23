import React, {Component} from 'react';
import Util from '../Util';
import './styles/Product.css'

class Product extends Component{
constructor(props){
    super(props);
    this.state={}
}
render(){
    const{productItem, handleAddCart}=this.props;
   const productRender=productItem.length > 0 && productItem.map((product, i)=>{  
      return  <div key={product.id} className="col-md-4">
            <div className="thumbnail m-1 text-center">
                <div className="card bg-secondary mt-5">
                    <div className="view overlay">
                <a href={`#${product.id}`} className="text-decoration-none" onClick={(e)=>handleAddCart(e, product)}>
                    <img className="img-fluid w-50"src={`products/${product.sku}_2.jpg`} alt={product.title}/>  
                   < div className="card-body text-center text-light title fw-lighter fs-6">{product.title}</div>                                                
                     <div className="text-center text-light fw-bold ">{Util.formatCurrency(product.price)}</div>
                     <button  type="button" className="btn btn-sm btn-secondary fs-6 mb-1 " onClick={()=>handleAddCart(product)}>
                         Add cart</button>                                          
                     </a>                                       
                </div>
                </div>             
            </div>
        </div>
    })
    return(
        <div className="row">
{productRender}

        </div>
    )
}
}

export default Product