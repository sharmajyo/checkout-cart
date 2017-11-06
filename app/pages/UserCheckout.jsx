import React, { Component } from 'react';
import UserCheckoutContainer from '../containers/UserCheckout';

class UserCheckout extends Component {

  render() {
    return (
      <UserCheckoutContainer {...this.props} />
    );
  }
}

export default UserCheckout;
