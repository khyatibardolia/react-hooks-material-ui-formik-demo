import {
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_FAILURE,
    LOGIN_REQUEST,
    GOOGLE_SIGNUP_REQUEST,
    SIGNUP_REQUEST,
    LOGIN_SUCCESS,
    GOOGLE_SIGNUP_SUCCESS,
    SIGNUP_SUCCESS,
    LOGIN_FAILURE,
    GOOGLE_SIGNUP_FAILURE,
    SIGNUP_FAILURE
} from "../../api/constants";

/*initial state*/
const INITIAL_STATE = {
    auth_user: {},
    message: ""
};

export default (state = INITIAL_STATE, action: any) => {
    console.log('action', action);
    switch (action.type) {
        case GOOGLE_LOGIN_REQUEST:
        case LOGIN_REQUEST:
        case GOOGLE_SIGNUP_REQUEST:
        case SIGNUP_REQUEST:
            return { ...state, auth_user: action.payload };
        case GOOGLE_LOGIN_SUCCESS:
        case LOGIN_SUCCESS:
        case GOOGLE_SIGNUP_SUCCESS:
        case SIGNUP_SUCCESS:
            return { ...state, auth_user: action.payload };
        case GOOGLE_LOGIN_FAILURE:
        case LOGIN_FAILURE:
        case GOOGLE_SIGNUP_FAILURE:
        case SIGNUP_FAILURE:
            return { ...state, auth_user: action.payload, message: "" };
        default:
            return state;
    }
}
