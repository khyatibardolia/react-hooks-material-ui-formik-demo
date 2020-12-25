import React from "react";
import {SignUp} from "./signup";
import {Login} from "./login";

export const Authenticate: React.FC = () => {
    return (
        <div className={'bg-light'}>
            <div className={'container d-flex justify-content-center align-items-center'}>
            <div className={'row w-100 h-100'}>
                <div className={'col-sm-6 m-0 p-0'}>
                    <Login/>
                </div>
                <div className={'col-sm-6 m-0 p-0'}>
                    <SignUp/>
                </div>
            </div>
            </div>
        </div>)
};
