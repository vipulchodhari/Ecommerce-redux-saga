import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../action/actionTypes";

const init_state = {
    data: []
}

export const dataReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case ADD_TO_CART:
            // console.log("add to cart", state);
            return{
                ...state,
                // data: addToCart(...state.data, payload)
                data: [...state.data, payload]
            }
        case REMOVE_FROM_CART:
            // console.log("remove form cart", state);
            console.log('data length', state.data.length);
            state.data.length=state.data.length ? state.data.length-1 : []
            return{
                ...state,
                // data: removeToCart(state.data, payload)
                data: [...state.data]
            }
        case EMPTY_CART:
            return{
                ...state,
                data: []
            }

            default:
                return state
    }
}

// const removeToCart = (data) => {
//     return data
// }
