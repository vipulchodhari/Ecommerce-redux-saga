import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes"

export const Add_To_Cart = (data) => {
    // console.log('add acton called', data);
    return{
        type: ADD_TO_CART,
        payload: data
    }
}

export const Remove_From_Cart = (data) => {
    // console.log('remove acton called', data);
    return{
        type: REMOVE_FROM_CART,
        payload: data
    }
}

export const Change_Quantity = (id, change) => {
    return{
        type: CHANGE_QUANTITY,
        payload: {id, change}
    }
}

export const Empty_Cart = () => {
    return {
        type: EMPTY_CART
    }
}


// export const getData = () => async (dispatch) => {
//     await fetch('http://localhost:3000/data')
//        .then((res) => res.json())
//        .then((data) => dispatch(FetchData(data)));
//   };
