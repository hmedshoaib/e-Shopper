import { takeEvery, put } from "redux-saga/effects"
import { createWishlistAPI, deleteWishlistAPI, getWishlistAPI, updateWishlistAPI } from "../Service"
import { ADD_WISHLIST, ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Constants"



function* createwishlistSaga(action) {
    var response = yield createWishlistAPI(action.payload)
    yield put({ type: ADD_WISHLIST_RED, data: response })
}


function* getwishlistSaga() {
    var response = yield getWishlistAPI()
    yield put({ type: GET_WISHLIST_RED, data: response })
}

function* deletewishlistSaga(action) {
    yield deleteWishlistAPI(action.payload)
    yield put({ type: DELETE_WISHLIST_RED, data: action.payload })
}


function* updatewishlistSaga(action) {
    yield updateWishlistAPI(action.payload)
    yield put({ type: UPDATE_WISHLIST_RED, data: action.payload })
}


export function* wishlistsaga() {
    yield takeEvery(ADD_WISHLIST, createwishlistSaga)
    yield takeEvery(GET_WISHLIST, getwishlistSaga)
    yield takeEvery(DELETE_WISHLIST, deletewishlistSaga)
    yield takeEvery(UPDATE_WISHLIST, updatewishlistSaga)
}