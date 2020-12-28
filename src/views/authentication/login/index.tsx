import React, {useState, useCallback} from "react";
import './login.scss';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import {loginWithGoogle, loginWithPassword} from "../../../api/auth";

export const Login: React.FC = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const fnLogin = useCallback((emailId, password) => {
        loginWithGoogle().then((response: any) => {
           // setValidated(true);
           // history.push(routes.ADDTODOS);
        }).catch((error: any) => {
           /* if(emailId === '' && password === '') {
                setErrorMessage("The fields are required!")
            } else {
                setErrorMessage(error.message)
            }*/
           console.log('error', error);
        });
    }, [history]);
    return (
        <form className={''} noValidate autoComplete="off">
            <div className={'row'}>
                <div className={'col-sm-12 py-3 d-flex justify-content-center align-items-center'}>
                    <TextField className='w-50' id="outlined-basic" label="Enter email address"
                               variant="outlined" onChange={(e) => setEmailId(e.target.value)}/>
                </div>
                <div className={'col-sm-12 py-3 d-flex justify-content-center align-items-center'}>
                    <TextField
                        className='w-50'
                        id="standard-password-input"
                        label="Enter password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className={'col-sm-12 d-flex justify-content-center align-items-center'}>
                    <Button size="large" variant="contained" color="primary"
                            onClick={() => fnLogin(emailId, password)}>Sign In</Button>
                </div>
            </div>
        </form>)
};
