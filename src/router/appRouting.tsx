import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as routes from './constants';
import {Authenticate} from "../views/authentication";
import {MovieBrowserHome} from "../views/MovieBrowser";

export const AppRouting: React.FC = () => {
    return(<>
        <BrowserRouter>
            <Route exact path={routes.USER_AUTHENTICATION} component={Authenticate}/>
            <Route exact path={routes.HOME} component={MovieBrowserHome}/>
        </BrowserRouter>
    </>)
};
