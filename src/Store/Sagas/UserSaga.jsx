import { takeEvery, put } from "redux-saga/effects"
import { createUserAPI, deleteUserAPI, getUserAPI, updateUserAPI } from "../Service"
import { ADD_USER, ADD_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED } from "../Constants"



function* createuserSaga(action) {
    var response = yield createUserAPI(action.payload)
    yield put({ type: ADD_USER_RED, data: response })
}


function* getuserSaga() {
    var response = yield getUserAPI()
    yield put({ type: GET_USER_RED, data: response })
}

function* deleteuserSaga(action) {
    yield deleteUserAPI(action.payload)
    yield put({ type: DELETE_USER_RED, data: action.payload })
}


function* updateuserSaga(action) {
    yield updateUserAPI(action.payload)
    yield put({ type: UPDATE_USER_RED, data: action.payload })
}


export function* userSaga() {
    yield takeEvery(ADD_USER, createuserSaga)
    yield takeEvery(GET_USER, getuserSaga)
    yield takeEvery(DELETE_USER, deleteuserSaga)
    yield takeEvery(UPDATE_USER, updateuserSaga)
}