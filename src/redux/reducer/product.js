import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../action/actionTypes"

const init_state = {
    data: []
}

export const productReducer = (state = init_state, {type, payload}) => {
    switch (type) {
        case PRODUCT_LIST:
            // console.log('product reducer', state)
            return {
                ...state, 
                data: payload
            }
        case SET_PRODUCT_LIST:
            console.log('SET product reducer', state)
            return {
                ...state,
                data: [state.data, payload]
            }

            default: 
               return state
    }
}