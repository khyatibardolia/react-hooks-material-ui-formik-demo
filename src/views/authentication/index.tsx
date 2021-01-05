import React, {useState} from "react";
import {AuthenticateUser} from "./authenticate";
import './index.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link/Link";

export const Authenticate: React.FC = () => {
    const [isUserSigningUp, setSignUpForm] = useState(false);
    const toggleForm = () => {
        setSignUpForm(!isUserSigningUp)
    };
    return (
        <div className={'background-img w-100 h-100'}>
            <div className={'container w-100 h-100'}>
                <div className={'row w-100 h-100 m-0 p-0 d-flex justify-content-center align-items-center'}>
                    <Card className={'w-50 h-75 p-4 text-center'} variant="outlined">
                        <CardContent className={''}>
                            <Typography
                                className='d-flex justify-content-center align-items-center py-2'
                                color="primary" variant="h4" component="h2">
                                {`Sign ${!isUserSigningUp ? 'In' : 'Up'}`}
                            </Typography>
                            <div>
                                {<AuthenticateUser isUserSigningUp={isUserSigningUp}/>}
                            </div>
                        </CardContent>
                        <CardActions className={'d-flex justify-content-center align-items-center py-2'}>
                            <div className={'row'}>
                                <div className={'col-sm-12 d-flex'}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {`${!isUserSigningUp ? 'Not' : 'Already'} a member?`}
                                    </Typography>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => {
                                            toggleForm()
                                        }}
                                    > &nbsp;{`${!isUserSigningUp ? 'Sign Up Now' : 'Sign In'}`}</Link>
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>)
};
