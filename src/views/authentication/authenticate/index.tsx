import React, {useState, useCallback} from "react";
import './login.scss';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
/*import {loginWithGoogle, loginWithPassword, signUpWithPassword} from "../../../redux/actions/auth";*/
import {Formik, FormikHelpers, FormikProps, Form, Field} from "formik";
import * as Yup from "yup";
import {RenderTextField} from "../../../common/fields/RenderTextField";
import {googleLogin, loginWithPassword, signUpWithPassword} from "../../../redux/actions";
/*import {Auth} from "../../../api/config";*/
import {useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import * as routes from '../../../../src/router/constants';
import {useHistory} from "react-router";

interface FormValues {
    email: string;
    password: string;
}

interface otherProps {
    isUserSigningUp: boolean;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email Is Required!")
        .matches(/\D/, "Can Not Enter Only Numbers"),
    password: Yup.string().required("Password is Required!")
});

export const AuthenticateUser: React.FC<otherProps> = (props) => {
    const {isUserSigningUp} = props;
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('isUserSigningUp', isUserSigningUp);
    const initialValues: FormValues = {email: "", password: ""};
    const fnUserAuthentication = (values: any) => {
        console.log('values', values);
        if(!isUserSigningUp) {
            console.log('loginwithpass called')
            dispatch(loginWithPassword(values.email, values.password));
        } else {
            dispatch(signUpWithPassword(values.email, values.password))
        }
    };

    const fnLoginWithGoogle = () => {
        dispatch(googleLogin())
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, formikHelpers: FormikHelpers<FormValues>) => {
                console.log('values', values);
                fnUserAuthentication(values);

                formikHelpers.setSubmitting(false);
            }}
        >
            {(formikProps: FormikProps<FormValues>) =>
        <Form className={''} onSubmit={formikProps.handleSubmit} noValidate autoComplete="off">
            <div className={'row mx-5 gutters-10'}>
                <div className={'col-sm-12 _custom-input-div'}>
                    <Field
                        name="email"
                        label="Enter email address"
                        size="small"
                        className={'w-100'}
                        component={RenderTextField}
                    />
                </div>
                <div className={'col-sm-12 _custom-input-div'}>
                    <Field
                        name="password"
                        type="password"
                        className={'w-100'}
                        label="Enter password"
                        size="small"
                        component={RenderTextField}
                    />
                </div>
                <div className={'col-sm-12 _custom-input-div d-flex justify-content-center align-items-center'}>
                    <Button type="submit" size="large" variant="contained" color="primary"
                            >{`Sign ${isUserSigningUp ? 'Up' : 'In'}`}</Button>
                </div>
                <div className={'col-sm-12 py-2 d-flex justify-content-center align-items-center'}>
                    OR</div>
                <div className={'col-sm-12 d-flex justify-content-center align-items-center'}>
                    <Button
                        variant="outlined"
                        startIcon={<i className="fa fa-google text-danger"/>}
                        onClick={() => fnLoginWithGoogle()}
                    >
                        {`Sign ${isUserSigningUp ? 'Up' : 'In'} with Google`}
                    </Button>
                </div>
            </div>
        </Form>}
        </Formik>)
};
