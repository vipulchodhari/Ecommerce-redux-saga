import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../action/actionTypes"

const init_state = {
    data: []
}

export const productReducer = (state=init_state, action) => {
    // console.log('final data', payload);
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log('product reducer', state.data)
        //     return {
        //         ...state, 
        //         data: payload
        //     }
        case SET_PRODUCT_LIST:
            // console.log('SET product reducer', action)
            return{
                ...state,
                data: [...action.data]
            }

            default: 
               return state
    }
}