import React from "react";
import {SignUp} from "./signup";
import {Login} from "./login";
import './index.scss';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link/Link";

export const Authenticate: React.FC = () => {
    return (
        <div className={'background-img w-100 h-100'}>
            <div className={'container w-100 h-100'}>
                <div className={'row w-100 h-100 m-0 p-0 d-flex justify-content-center align-items-center'}>
                    {/*<div className={'col-sm-6 m-0 p-0'}>
                    <Login/>
                </div>
                <div className={'col-sm-6 m-0 p-0'}>
                    <SignUp/>
                </div>*/}
                    <Card className={'w-75 h-75'} variant="outlined">
                        <CardContent>
                            <Typography
                                className='d-flex justify-content-center align-items-center py-2'
                                variant="h4" component="h2">
                                Sign In
                            </Typography>
                            <div>
                                <Login/>
                            </div>
                        </CardContent>
                        <CardActions className={'d-flex justify-content-center align-items-center py-2'}>
                            <div className={'row'}>
                                <div className={'col-sm-12 d-flex'}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Not a member?
                                    </Typography>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => {
                                            console.info("I'm a button.");
                                        }}
                                    > &nbsp;Sign Up Now</Link>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>)
};
