import { takeEvery, put } from "redux-saga/effects"
import { createCartAPI, deleteCartAPI, getCartAPI, updateCartAPI } from "../Service"
import { ADD_CART, ADD_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED } from "../Constants"



function* createcartSaga(action) {
    var response = yield createCartAPI(action.payload)
    yield put({ type: ADD_CART_RED, data: response })
}


function* getcartSaga() {
    var response = yield getCartAPI()
    yield put({ type: GET_CART_RED, data: response })
}

function* deletecartSaga(action) {
    yield deleteCartAPI(action.payload)
    yield put({ type: DELETE_CART_RED, data: action.payload })
}


function* updatecartSaga(action) {
    yield updateCartAPI(action.payload)
    yield put({ type: UPDATE_CART_RED, data: action.payload })
}


export function* cartsaga() {
    yield takeEvery(ADD_CART, createcartSaga)
    yield takeEvery(GET_CART, getcartSaga)
    yield takeEvery(DELETE_CART, deletecartSaga)
    yield takeEvery(UPDATE_CART, updatecartSaga)
}