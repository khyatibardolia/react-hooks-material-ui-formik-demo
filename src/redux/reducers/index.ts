import {combineReducers} from "redux";
import MovieBrowserReducer from "./movieBrowserReducer";
import {connectRouter} from 'connected-react-router'

/*combine all reducers*/
const reducers = (history: any) => combineReducers({
    router: connectRouter(history),
    MovieBrowserReducer,
});

export default reducers;
