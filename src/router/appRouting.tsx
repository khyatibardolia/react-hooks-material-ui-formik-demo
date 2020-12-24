import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as routes from './constants';
import {Home} from "../views/Home";

export const AppRouting: React.FC = () => {
    return(<>
        <BrowserRouter>
            <Route exact path={routes.HOME} component={Home}/>
        </BrowserRouter>
    </>)
};
