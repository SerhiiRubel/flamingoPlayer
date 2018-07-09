import React, { Component } from 'react';
import LoginFormComponent from '../../components/loginForm/loginFormComponent';
import {connect} from 'react-redux';
import fetchAuth from '../../actions/auth';

class LoginPageContainer extends Component{

  constructor(props) {
    super(props);
  };

  onSubmit = values => {
    console.log(values);
    this.props.fetchAuth(values);
  };

  render() {
    return (
      <section className='loginPage'
        style={{display: 'flex', alignItems: 'center'}}
      >
        <LoginFormComponent
          onSubmit={this.onSubmit}
        />
      </section>
    )
  }
}

export default connect(null, {fetchAuth})(LoginPageContainer);
