import { takeEvery, put } from "redux-saga/effects"
import { createContactAPI, deleteContactAPI, getContactAPI, updateContactAPI } from "../Service"
import { ADD_CONTACT, ADD_CONTACT_RED, DELETE_CONTACT, DELETE_CONTACT_RED, GET_CONTACT, GET_CONTACT_RED, UPDATE_CONTACT, UPDATE_CONTACT_RED } from "../Constants"



function* createcontactSaga(action) {
    var response = yield createContactAPI(action.payload)
    yield put({ type: ADD_CONTACT_RED, data: response })
}


function* getcontactSaga() {
    var response = yield getContactAPI()
    yield put({ type: GET_CONTACT_RED, data: response })
}

function* deletecontactSaga(action) {
    yield deleteContactAPI(action.payload)
    yield put({ type: DELETE_CONTACT_RED, data: action.payload })
}


function* updatecontactSaga(action) {
    yield updateContactAPI(action.payload)
    yield put({ type: UPDATE_CONTACT_RED, data: action.payload })
}


export function* contactsaga() {
    yield takeEvery(ADD_CONTACT, createcontactSaga)
    yield takeEvery(GET_CONTACT, getcontactSaga)
    yield takeEvery(DELETE_CONTACT, deletecontactSaga)
    yield takeEvery(UPDATE_CONTACT, updatecontactSaga)
}