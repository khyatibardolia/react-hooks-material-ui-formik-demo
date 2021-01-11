import { all, put, takeEvery, call } from 'redux-saga/effects';
import {
    AUTH_USER_INFO,
    GOOGLE_LOGIN_FAILURE,
    GOOGLE_LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    SIGNUP_FAILURE, SIGNUP_REQUEST
} from "../constants";
import {googleLogin, googleLoginSuccess, loginWithPasswordSuccess, signUpWithPasswordSuccess} from '../../redux/actions'
/*import {Db} from "../config";*/
import firebase from 'firebase';
/*import {loginWithGoogle} from "../../redux/actions/auth";*/
import rsf from '../config/firebase';
import { push } from 'connected-react-router';
import * as routes from '../../../src/router/constants';
import history from "../../redux/store";

const authProvider = new firebase.auth.GoogleAuthProvider();


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
/*function* addUser(payload: any){
    try {
        /!*call action*!/
        //The yield keyword is used to pause and resume a generator function.
        // basically yield is kind of an observer
        yield put({type: AddUsersAction, payload: payload});
    } catch (e) {
        console.log(e);
    }
}*/

/*function* getAuthUser(payload: any){
    try {
        console.log('auth saga called')
        /!*call action*!/
        //The yield keyword is used to pause and resume a generator function.
        // basically yield is kind of an observer
        //yield call(loginWithGoogle);
        yield put({type: loginWithGoogle, payload: payload});
    } catch (e) {
        console.log(e);
    }
}*/

function *loginSaga () {
    try {
        const data = yield call(rsf.auth.signInWithPopup, authProvider);
        console.log('data', data);
        console.log('history', history);
        yield put(googleLoginSuccess(data));
        yield put(push(routes.HOME));
    } catch (error) {
        console.log(error);
        yield put({type: GOOGLE_LOGIN_FAILURE, payload: error});
    }
}

function *loginWithPasswordSaga (payload: any) {
    try {
        const data = yield call(rsf.auth.signInWithEmailAndPassword, payload.email, payload.password);
        yield put(loginWithPasswordSuccess(data));
        yield put(push(routes.HOME));
    } catch (error) {
        console.log(error);
        yield put({type: LOGIN_FAILURE, payload: error});
    }
}

function *signUpWithPasswordSaga (payload: any) {
    try {
        const data = yield call(rsf.auth.createUserWithEmailAndPassword, payload.email, payload.password);
        yield put(signUpWithPasswordSuccess(data));
        yield put(push(routes.HOME));
    } catch (error) {
        yield put({type: SIGNUP_FAILURE, payload: error});
    }
}

/*watch function for add user*/
/*export function* watchAddUser() {
    yield takeEvery(ADD_USER, addUser)
}*/

export function* watchLoginSaga() {
    yield takeEvery(GOOGLE_LOGIN_REQUEST, loginSaga)
}
export function* watchLoginWithPasswordSaga() {
    yield takeEvery(LOGIN_REQUEST, loginWithPasswordSaga)
}

export function* watchSignUpWithPasswordSaga() {
    yield takeEvery(SIGNUP_REQUEST, signUpWithPasswordSaga)
}

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchLoginWithPasswordSaga(),
        watchSignUpWithPasswordSaga()
    ]);
}
