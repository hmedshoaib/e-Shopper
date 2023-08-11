import { takeEvery, put } from "redux-saga/effects"
import { createProductAPI, deleteProductAPI, getProductAPI, updateProductAPI } from "../Service"
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constants"



function* createproductSaga(action) {
    var response = yield createProductAPI(action.payload)
    yield put({ type: ADD_PRODUCT_RED, data: response })
}


function* getproductSaga() {
    var response = yield getProductAPI()
    yield put({ type: GET_PRODUCT_RED, data: response })
}

function* deleteproductSaga(action) {
    yield deleteProductAPI(action.payload)
    yield put({ type: DELETE_PRODUCT_RED, data: action.payload })
}


function* updateproductSaga(action) {
    yield updateProductAPI(action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, data: action.payload })
}


export function* productSaga() {
    yield takeEvery(ADD_PRODUCT, createproductSaga)
    yield takeEvery(GET_PRODUCT, getproductSaga)
    yield takeEvery(DELETE_PRODUCT, deleteproductSaga)
    yield takeEvery(UPDATE_PRODUCT, updateproductSaga)
}