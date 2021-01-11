//import {Db} from "../../api/config";

import {
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST, SIGNUP_SUCCESS
} from "../../api/constants";

export const googleLogin = () => ({
    type: GOOGLE_LOGIN_REQUEST
});

export const googleLoginSuccess = (payload: any) => ({
    type: GOOGLE_LOGIN_SUCCESS,
    payload
});

export const loginWithPassword = (email: string, password: string) => ({
    type: LOGIN_REQUEST,
    email,
    password
});

export const loginWithPasswordSuccess = (payload: any) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const signUpWithPassword = (email: string, password: string) => ({
    type: SIGNUP_REQUEST,
    email,
    password
});

export const signUpWithPasswordSuccess = (payload: any) => ({
    type: SIGNUP_SUCCESS,
    payload
});

/*export const AddUsersAction = (data: any) => {
    console.log('action called');
    return Db.ref(`users`).push(data)
        .then((data: any) => {
            return {
                type: "ADD_USERS",
                data
            }
        });
};*/
