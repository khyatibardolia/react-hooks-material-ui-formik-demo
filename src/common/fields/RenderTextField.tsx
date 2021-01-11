import React from 'react'
import {FieldProps, getIn} from 'formik'
import {TextFieldProps, TextField} from '@material-ui/core'

export const RenderTextField: React.FC<FieldProps & TextFieldProps> = (props) => {
    const isTouched = getIn(props.form.touched, props.field.name);
    const errorMessage = getIn(props.form.errors, props.field.name);
    const {error, helperText, field, type, form, ...rest} = props;

    return (
        <>
            <TextField
                variant="outlined"
                className={'py-2'}
                type={type}
                error={error && Boolean(isTouched && errorMessage)}
                helperText={helperText && ((isTouched && errorMessage) ? errorMessage : undefined)}
                {...rest}
                {...field}
            />
            {errorMessage ? <ul className={'pl-4 mb-0'}>
                <li className={'text-danger text-left'}>{errorMessage}</li>
            </ul> : null}
        </>
    )
};
