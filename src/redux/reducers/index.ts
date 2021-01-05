import {combineReducers} from "redux";

import MovieBrowserReducer from "./movieBrowserReducer";

/*combine all reducers*/
const reducers = combineReducers({
    MovieBrowserReducer,
});

export default reducers;
