import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from "../action/actionTypes";
import { toast } from "react-toastify";

const init_state = {
    data: new Map()
}

export const dataReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case ADD_TO_CART:
            // console.log("add to cart", state);
            //toast.info => for blue alert & toast.success => for green alert
           
            return{
                ...state,
                data: addToCart(state.data, payload)
                // data: [...state.data, payload]
            }
        case REMOVE_FROM_CART:
            // console.log('data length', state.data.length);
            // state.data.length=state.data.length ? state.data.length-1 : []
            return{
                ...state,
                data: removeToCart(state.data, payload)
                // data: [...state.data]
            }   
        case CHANGE_QUANTITY:
            return{
                ...state,
                data: changeQuantity(state.data, payload.id, payload.change)
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

const addToCart = (data, payload) => {
    data.set(payload.id, {value:payload, quantity:1})

    toast.success("Your Item add to cart", {
        position: 'bottom-left',
    });
    return data
}

const removeToCart = (data, payload) => {
    data.delete(payload.id)
    return data
    // return data.filter((item) => item.id!==payload.id)
}

const changeQuantity = (data, id, change) =>{
    const itemData = data.get(id)
    const prevQuantity = itemData.quantity
    data.set(id, {
        ...itemData,
        quantity: prevQuantity+change
    })

    if(change == 1){
        toast.info("Your cart quantity increase", {
            position: 'bottom-left'
        })
    }else{
        toast.warning("Your cart quantity decrease", {
            position: 'bottom-left'
        })
    }
    return data
}
