import React from 'react';
import LoginFormStyled from './loginFormStyled';
import {reduxForm} from 'redux-form';
import {Field} from 'redux-form';
import {required, email, number, minLength3, maxLength15} from '../../utils/validate';

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
  const {name} = input;
  const { visited, number, dirty, touched, error, invalid } = meta;
  return (
    <div className={`inputGroup ${name}`}>
      <label htmlFor={name}>{name}</label>
      <input
        {...input}
      />
      {
        visited && invalid &&
        <p className="error">{error}</p>
      }
    </div>
  )
};

let LoginFormComponent = (props) => {
  const { handleSubmit, valid, reset, submitting } = props;
  return(
    <LoginFormStyled onSubmit={handleSubmit}>
      <Field
        name='email'
        component={renderField}
        type='email'
        validate={[ required, email, minLength3, maxLength15]}
      />
      <Field
        name='password'
        component={renderField}
        type='password'
        validate={[ required, minLength3, maxLength15, number ]}
      />
      <button
        type='submit'
        disabled={!valid}
        // onClick={reset}
      >Submit</button>
    </LoginFormStyled>
  );
};

LoginFormComponent = reduxForm({
    form: 'loginForm',
})(LoginFormComponent);

export default LoginFormComponent;