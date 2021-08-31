import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

export const addCart=(item, product )=>(dispatch)=>{
    const cartItem=item.slice();
    let productAlreadyInCart=false;
    cartItem.map(item=>{
        if(item.id === product.id){
            productAlreadyInCart=true
            item.count ++
        }
    });
    if(!productAlreadyInCart){
        cartItem.push({...product, count:1})
    }
    localStorage.setItem("cartItem", JSON.stringify(cartItem))
    dispatch({
        type:ADD_TO_CART,
        cartItem:cartItem
    })

}

export const removeCart=(product, item)=>(dispatch)=>{
    const cartItem=product.filter(list=>list.id !== item)
   localStorage.setItem("cartItem", JSON.stringify(cartItem))
    dispatch({
        type:REMOVE_FROM_CART,
        cartItem:cartItem,
        
    })
}