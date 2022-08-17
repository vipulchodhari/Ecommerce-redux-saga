import { INCREASE_QUANTITY } from "../action/actionTypes"


const init_state = {
    quantityData: []
}

export const quantityReducer = (state=init_state, {type, payload}) => {
    // console.log('final data', payload);
    switch (type) {
        case INCREASE_QUANTITY:
            // console.log('SET product reducer', action)
            const itemIndex = state.quantityData.findIndex(
                (item) => item.id === payload.id
            );
            
            return{
                ...state,
                quantityData: [...state.quantityData, payload]
            }

            default: 
               return state
    }
}