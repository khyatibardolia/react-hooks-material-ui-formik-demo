import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers';
import RootSaga from "../../api/sagas";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

/*create saga middleware*/
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(reduxRouterMiddleware)
);
/*create store*/
const store = createStore(
    reducers(history),
    /*add devtool(extension)*/
    composeWithDevTools(enhancers),
);

sagaMiddleware.run(RootSaga);

export default store;
export {
    history
};
