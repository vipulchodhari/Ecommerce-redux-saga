// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./reducer";
import createSagaMiddleware from 'redux-saga';
import productSaga from './saga/productSaga';

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: ()=> [sagaMiddleWare]
    }
    
)

sagaMiddleWare.run(productSaga)