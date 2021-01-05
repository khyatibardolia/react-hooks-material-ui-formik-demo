import { all, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import {ADD_USER, AUTH_USER_INFO} from "../constants";
import {AddUsersAction} from '../../redux/actions'
import {Db} from "../config";
import {loginWithGoogle} from "../auth";

/*function* callApi(action: any){
    try {
        const res = yield axios.get(`https://randomuser.me/api/?page=${action.payload}&results=10&seed=abc`);
        /!*call action after api response*!/
        yield put(callAPISuccessfully(res.data.results));
    } catch (error) {
        console.error(error);
    }
}*/

// * indicates a generator function and it would execute code line-by-line
// so if there is an error in first line it stops executing further.
function* addUser(payload: any){
    try {
        /*call action*/
        //The yield keyword is used to pause and resume a generator function.
        // basically yield is kind of an observer
        yield put({type: AddUsersAction, payload: payload});
    } catch (e) {
        console.log(e);
    }
}

function* getAuthUser(payload: any){
    try {
        /*call action*/
        //The yield keyword is used to pause and resume a generator function.
        // basically yield is kind of an observer
        yield put({type: loginWithGoogle, payload: payload});
    } catch (e) {
        console.log(e);
    }
}

/*watch function for add user*/
export function* watchAddUser() {
    yield takeEvery(ADD_USER, addUser)
}

export function* watchAuthUser() {
    yield takeEvery(AUTH_USER_INFO, getAuthUser)
}

export default function* rootSaga() {
    yield all([
        watchAddUser(),
        watchAuthUser()
    ]);
}
