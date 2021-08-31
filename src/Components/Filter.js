import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filterSize, sortProduct} from '../Actions/productAction'

class Filter extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const{ sort, size,filterSize, product, sortProduct,  filteredItem}=this.props
        console.log(sort)
        return(
            <div className="row mb-3">
                <div className="col-md-4">
<label className="text-light mx-2 fw-bold fs-5">{filteredItem.length} {filteredItem.length > 1 ?
 "products" : "product"} found</label>
                </div>                
                <div className="col-md-4">
                    <label>
                       <div className="text-light text-center fw-bold fs-5">Filter size</div> 
                        <select className="form-select form-select-md"
                         value={size} onChange={(e)=>filterSize(product, e.target.value)}>
                            <option value="">All Sizes</option>
                            <option value="x">X</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                          
                        </select>
                    </label>

                </div>
                <div className="col-md-4">
                <label>
                       <div className="text-light text-center fw-bold fs-5">Order by</div> 
                        <select className="form-select form-select-md"
                          value={sort} onChange={(e)=>sortProduct(filteredItem, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest-price">Lowest to highest</option>
                            <option value="highest-price">Highest to lowest</option>      
                        </select>
                    </label>

                </div>


            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    product:state.product.item,
    filteredItem:state.product.filteredProduct,
    size:state.product.size,
    sort:state.product.sort

})

export default connect(mapStateToProps, {filterSize, sortProduct})(Filter)