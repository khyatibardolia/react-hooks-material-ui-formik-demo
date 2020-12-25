import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as routes from './constants';
import {Authenticate} from "../views/authentication";

export const AppRouting: React.FC = () => {
    return(<>
        <BrowserRouter>
            <Route exact path={routes.HOME} component={Authenticate}/>
        </BrowserRouter>
    </>)
};
