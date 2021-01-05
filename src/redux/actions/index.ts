import {
    CALL_API,
    CALL_API_SUCCESSFULLY,
    CHANGE_PAGE
} from '../../api/constants';
import {Db} from "../../api/config";

export const callAPI = (payload: any) => ({
    type: CALL_API,
    payload
});

export const callAPISuccessfully = (payload: any) => ({
    type: CALL_API_SUCCESSFULLY,
    payload
});

export const AddUsersAction = (data: any) => {
    console.log('action called');
    return Db.ref(`users`).push(data)
        .then((data: any) => {
            return {
                type: "ADD_USERS",
                data
            }
        });
};
