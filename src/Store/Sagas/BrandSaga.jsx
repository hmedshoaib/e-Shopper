import { takeEvery, put } from "redux-saga/effects"
import { createBrandAPI, deleteBrandAPI, getBrandAPI, updateBrandAPI } from "../Service"
import { ADD_BRAND, ADD_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constants"



function* createbrandSaga(action) {
    var response = yield createBrandAPI(action.payload)
    yield put({ type: ADD_BRAND_RED, data: response })
}


function* getbrandSaga() {
    var response = yield getBrandAPI()
    yield put({ type: GET_BRAND_RED, data: response })
}

function* deletebrandSaga(action) {
    yield deleteBrandAPI(action.payload)
    yield put({ type: DELETE_BRAND_RED, data: action.payload })
}


function* updatebrandSaga(action) {
    yield updateBrandAPI(action.payload)
    yield put({ type: UPDATE_BRAND_RED, data: action.payload })
}


export function* brandsaga() {
    yield takeEvery(ADD_BRAND, createbrandSaga)
    yield takeEvery(GET_BRAND, getbrandSaga)
    yield takeEvery(DELETE_BRAND, deletebrandSaga)
    yield takeEvery(UPDATE_BRAND, updatebrandSaga)
}