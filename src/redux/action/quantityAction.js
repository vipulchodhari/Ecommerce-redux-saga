import { INCREASE_QUANTITY } from "./actionTypes"

export const Increase_Quantity = (data) => {
    return{
        type: INCREASE_QUANTITY,
        payload: data
    }
}