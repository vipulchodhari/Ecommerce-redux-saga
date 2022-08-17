import { ADD_TO_CART, EMPTY_CART, INCREASE_QUANTITY, REMOVE_FROM_CART } from "../action/actionTypes";
import { toast } from "react-toastify";

const init_state = {
    data: []
}

export const dataReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case ADD_TO_CART:
            // console.log("add to cart", state);
            //toast.info => for blue alert & toast.success => for green alert
            toast.success("Your Item add to cart", {
                position: 'bottom-left',
            });
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
        // case INCREASE_QUANTITY:
        //     // const itemIndex = state.data.findIndex(
        //     //     (item) => item.id === payload.id
        //     // );
        //     // if(itemIndex>=0){
        //     //     state.data[itemIndex].cartQuantity += 1;
        //     // }else{
        //     //     const tempProduct = {...payload, cartQuantity:1};
        //     //     state.data.push(tempProduct)
        //     // }
        //     return{
        //         ...state,
        //         data: increase_itmes(state.data, payload)
        //         // data: state.data, payload
        //     }    
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

// const increase_itmes = (data) => {
//     return 
// }