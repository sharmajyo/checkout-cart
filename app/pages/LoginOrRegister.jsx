import React, { Component } from 'react';
import LoginContainer from '../containers/Login';

class LoginOrRegister extends Component {

  render() {
    return (
      <LoginContainer {...this.props} />
    );
  }
}

export default LoginOrRegister;
