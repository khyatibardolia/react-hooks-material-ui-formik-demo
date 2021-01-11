import * as React from "react";
import './App.css';
import {AppRouting} from "./router/appRouting";
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "./redux/store";

export const App: React.FC = () => {
    return (
        <div className={'w-100 h-100'}>
            <Provider store={store}>
                <ToastContainer position="top-right"
                                autoClose={4000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                draggable
                                pauseOnHover/>
                <AppRouting/>
            </Provider>
        </div>
    );
};
