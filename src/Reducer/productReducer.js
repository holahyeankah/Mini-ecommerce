import {FILTER_PRODUCT_BY_SIZE, FETCH_PRODUCT, SORT_PRODUCT} from '../Actions/types'



const initialState={item:[], filteredProduct:[], size:"", sort:""}

 export const productReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case FETCH_PRODUCT:
            return{
                ...state,
            item:action.payload.data,
            filteredProduct:action.payload.data
            }
        case FILTER_PRODUCT_BY_SIZE:
            return{
                ...state, 
                filteredProduct:action.payload.item,
                size:action.payload.size
            }
            case SORT_PRODUCT:
                return{
                    ...state, 
                    filteredProduct:action.payload.item,
                    sort:action.payload.sort
                }
        default:
            return state
    }
}



