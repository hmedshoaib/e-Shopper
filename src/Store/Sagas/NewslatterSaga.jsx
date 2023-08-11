import { takeEvery, put } from "redux-saga/effects"
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI } from "../Service"
import { ADD_NEWSLATTER, ADD_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED } from "../Constants"



function* createnewslatterSaga(action) {
    var response = yield createNewslatterAPI(action.payload)
    yield put({ type: ADD_NEWSLATTER_RED, data: response })
}


function* getnewslatterSaga() {
    var response = yield getNewslatterAPI()
    yield put({ type: GET_NEWSLATTER_RED, data: response })
}

function* deletenewslatterSaga(action) {
    yield deleteNewslatterAPI(action.payload)
    yield put({ type: DELETE_NEWSLATTER_RED, data: action.payload })
}


// function* updatenewslatterSaga(action) {
//     yield updateNewslatterAPI(action.payload)
//     yield put({ type: UPDATE_NEWSLATTER_RED, data: action.payload })
// }


export function* newslattersaga() {
    yield takeEvery(ADD_NEWSLATTER, createnewslatterSaga)
    yield takeEvery(GET_NEWSLATTER, getnewslatterSaga)
    yield takeEvery(DELETE_NEWSLATTER, deletenewslatterSaga)
    // yield takeEvery(UPDATE_NEWSLATTER, updatenewslatterSaga)
}