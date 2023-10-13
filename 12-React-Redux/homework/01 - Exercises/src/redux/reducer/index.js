 import { ADD_PRODUCT, DELETE_PRODUCT } from"../actions/types";
 
 const initialState = {
   list: []
 }

 
 function rootReducer(state = initialState, action) {
 switch (action.type) {
    case ADD_PRODUCT:
        const updatedList = [...state.list, action.payload]
        return {
            ...state,
            list: updateList
        };
    case DELETE_PRODUCT:
        const filteredlist = state.list.filter(
            product => product.id !== action.payload
        );    
        return {
            ...state,
            list: filteredlist,
        };
    default:
        return state;
 }
 }


 export default rootReducer
