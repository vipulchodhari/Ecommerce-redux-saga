import { dataReducer } from "./data";
import { combineReducers } from 'redux'
import { productReducer } from "./product";

export const rootReducer = combineReducers({
    dataState: dataReducer,
    productState: productReducer,
})