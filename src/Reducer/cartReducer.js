import {ADD_TO_CART, REMOVE_FROM_CART} from '../Actions/types'





 export const cartReducer=(state={}, action)=>{
    
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
            item:action.cartItem,
          
            }
            case REMOVE_FROM_CART:{
               
                    const item=[...state.item];
                    item.splice(action.cartItem, 1)
                    return{
                        ...state,
                        item
                
              
                }
                }
                
        default:
            return state
    }
}



