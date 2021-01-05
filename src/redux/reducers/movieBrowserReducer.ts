import {
    ADD_USERS, AUTH_USER_DATA,
    CALL_API_SUCCESSFULLY, CHANGE_PAGE
} from "../../api/constants";

/*initial state*/
const INITIAL_STATE = {
    data: [],
    page: 1,
    user: {},
    auth_user: {}
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CALL_API_SUCCESSFULLY:
            return { ...state, data: action.payload };
        case CHANGE_PAGE:
            return { ...state, page: action.payload };
        case ADD_USERS:
            return { ...state, user: action.payload };
        case AUTH_USER_DATA:
            return { ...state, auth_user: action.payload };
        default:
            return state;
    }
}
