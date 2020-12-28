import {combineReducers} from "redux";

import PaginationReducer from "./paginationReducer";

/*combine all reducers*/
const reducers = combineReducers({
    PaginationReducer,
});

export default reducers;
