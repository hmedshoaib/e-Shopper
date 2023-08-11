import { takeEvery, put } from "redux-saga/effects"
import { createCheckoutAPI, deleteCheckoutAPI, getCheckoutAPI, updateCheckoutAPI } from "../Service"
import { ADD_CHECKOUT, ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constants"



function* createcheckoutSaga(action) {
    var response = yield createCheckoutAPI(action.payload)
    yield put({ type: ADD_CHECKOUT_RED, data: response })
}


function* getcheckoutSaga() {
    var response = yield getCheckoutAPI()
    yield put({ type: GET_CHECKOUT_RED, data: response })
}

function* deletecheckoutSaga(action) {
    yield deleteCheckoutAPI(action.payload)
    yield put({ type: DELETE_CHECKOUT_RED, data: action.payload })
}


function* updatecheckoutSaga(action) {
    yield updateCheckoutAPI(action.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, data: action.payload })
}


export function* checkoutsaga() {
    yield takeEvery(ADD_CHECKOUT, createcheckoutSaga)
    yield takeEvery(GET_CHECKOUT, getcheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT, deletecheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT, updatecheckoutSaga)
}