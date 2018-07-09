import React from 'react';
import {reduxForm} from 'redux-form';
import {Field} from 'redux-form';
import required from "../../utils/validate";

// const validate = values => {
//     const errors = {};
//     if(!values.login) {
//         errors.login = 'Required';
//     }
//     if(!values.password) {
//         errors.password = 'Required';
//     }
//     return errors;
// };

const renderField = ({ input, meta }) => {
    console.log(meta.error);
    return (
        <div>
            <label htmlFor="login">Login</label>
            <input
                {...input}
            />
        </div>
    )
};

let LoginFormComponent = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                name='email'
                component={renderField}
                type='text'
                placeholder='login'
                validate={required}
            />
            <Field
                name='password'
                component={renderField}
                type='text'
                placeholder='password'
                validate={required}
            />
            <button
                type='submit'
            >Submit</button>
        </form>
    )
};

LoginFormComponent = reduxForm({
    form: 'loginForm',
})(LoginFormComponent);

export default LoginFormComponent;