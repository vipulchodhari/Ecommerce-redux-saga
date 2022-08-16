import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../action/actionTypes";

const init_state = {
    data: []
}

export const dataReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case ADD_TO_CART:
            // console.log("add to cart", state);
            // const item = state.data.find((data) => data.img === payload.img);
            // if (item) {
            //     item.quantity += payload.quantity;
            // } else {
            //     state.data.push(payload);
            // }
            return{
                ...state,
                // data: addToCart(state.data, payload)
                data: [...state.data, payload]
            }
        case REMOVE_FROM_CART:
            // console.log('data length', state.data.length);
            // state.data.length=state.data.length ? state.data.length-1 : []
            return{
                ...state,
                data: removeToCart(state.data, payload)
                // data: [...state.data]
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

// const addToCart = (data, key) => {
//     return data.filter((item) => item.id === key.id)
// }

const removeToCart = (data, key) => {
    return data.filter((item) => item.id!==key.id)
}
