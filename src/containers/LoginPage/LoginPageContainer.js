import React, { Component } from 'react';

import './style.css';

import LoginFormComponent from '../../components/loginForm/loginFormComponent';
import {connect} from 'react-redux';
import fetchAuth from '../../actions/auth';

class LoginPageContainer extends Component{

  constructor(props) {
    super(props);
  };

  onSubmit = values => {
    this.props.fetchAuth(values);
    setTimeout( () => this.props.history.push("/"), 2000);
  };

  render() {
    return (
      <section className='loginPage'>
        <LoginFormComponent
          onSubmit={this.onSubmit}
        />
      </section>
    )
  }
}

export default connect(null, {fetchAuth})(LoginPageContainer);
