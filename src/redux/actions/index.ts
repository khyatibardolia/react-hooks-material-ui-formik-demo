import {
    CALL_API,
    CALL_API_SUCCESSFULLY,
    CHANGE_PAGE
} from '../../api/constants';

export const callAPI = (payload: any) => ({
    type: CALL_API,
    payload
});

export const callAPISuccessfully = (payload: any) => ({
    type: CALL_API_SUCCESSFULLY,
    payload
});

export const changePage = (payload: any) => {
    return {
        type: CHANGE_PAGE,
        payload
    }
};
