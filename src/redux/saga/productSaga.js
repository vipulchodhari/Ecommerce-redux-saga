import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../action/actionTypes";
import { takeEvery, put } from 'redux-saga/effects';

function* getProducts(){
    let data = yield fetch('http://localhost:3001/data');
    data = yield data.json();

    console.log("api data in saga", data);

    yield put({type: SET_PRODUCT_LIST, data: data})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;