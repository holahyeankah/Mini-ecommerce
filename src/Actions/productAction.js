import {FILTER_PRODUCT_BY_SIZE, FETCH_PRODUCT, SORT_PRODUCT} from './types';
import db from '../Components/db'


export const fetchProduct=()=>(dispatch)=>{
  dispatch({
       type:FETCH_PRODUCT,
       payload:{
        data:db 
        
       }
     })
  }
 
export const filterSize=(product, size)=>(dispatch)=>{
 dispatch({
      type:FILTER_PRODUCT_BY_SIZE,
      payload:{
        size:size,
        item:size === "" ? product :product.filter((a)=>a.availableSizes.indexOf(size.toString().toUpperCase())>= 0)
 }
})
  
}

export const sortProduct=(item, sort)=>(dispatch)=>{
  const product=item.slice()
  if(sort !==""){
    product.sort((a,b)=>sort ==="lowest-price" 
    ?(a.price > b.price ? 1 :-1) :(a.price < b.price ? 1 :-1))
  } else{
  product.sort((a, b)=> a.id > b.id ? 1 : -1)
  }
   dispatch({
    type:SORT_PRODUCT,
    payload:{
     sort:sort,
     item:product
 
       }
     })
   
 }



