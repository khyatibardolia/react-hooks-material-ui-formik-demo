import * as React from "react";
import './App.css';
import {AppRouting} from "./router/appRouting";
import {Provider} from 'react-redux';
import {configureStore} from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className={'w-100 h-100'}>
            <Provider store={configureStore()}>
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
}

export default App;
