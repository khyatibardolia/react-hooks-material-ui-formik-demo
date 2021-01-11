import React from 'react';
import {Route} from 'react-router-dom';
import * as routes from './constants';
import {Authenticate} from "../views/authentication";
import {MovieBrowserHome} from "../views/MovieBrowser";
import {history} from "../redux/store";
import {ConnectedRouter} from 'connected-react-router'

export const AppRouting: React.FC = () => {
    return (<>
        <ConnectedRouter history={history}>
            <Route exact path={routes.USER_AUTHENTICATION} component={Authenticate}/>
            <Route exact path={routes.HOME} component={MovieBrowserHome}/>
        </ConnectedRouter>
    </>)
};
