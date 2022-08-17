import { dataReducer } from "./data";
import { combineReducers } from 'redux'
import { productReducer } from "./product";
import { quantityReducer } from "./cartQuantity";

export const rootReducer = combineReducers({
    dataState: dataReducer,
    productState: productReducer,
    quantityState: quantityReducer
})