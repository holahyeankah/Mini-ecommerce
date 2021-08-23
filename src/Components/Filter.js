import React, {Component} from 'react'

class Filter extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const{count, sort, size, handleChangeSize, handleChangeSort}=this.props
        return(
            <div className="row">
                <div className="col-md-4">
<label className="text-light mx-2 fw-bold fs-5">{count} {count > 1 ? "products" : "product"} found</label>
                </div>                
                <div className="col-md-4">
                    <label>
                       <div className="text-light fw-bold fs-5">Filter size</div> 
                        <select className="form-select form-select-md"
                         value={size} onChange={handleChangeSize}>
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
                       <div className="text-light fw-bold fs-5">Order by</div> 
                        <select className="form-select form-select-md"
                          value={sort} onChange={handleChangeSort}>
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

export default Filter