import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {
  class Authentication extends Component {

    handleRender = props =>
      this.props.isAuthenticated ?
        <ComposedComponent {...props} {...rest} /> :
        <Redirect to="/login"/>

    render() {
      return (
        <Route {...rest} render={this.handleRender}/>
      );
    }
  }

  const mapStateToProps = ({auth}) => ({
    isAuthenticated: auth.isAuthenticated,
  });

  const AuthenticationContainer = connect(mapStateToProps)(Authentication);
  return <AuthenticationContainer />;
};


