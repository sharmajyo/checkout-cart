import React, { Component } from 'react';
import CartContainer from '../containers/Cart';

class Cart extends Component {

  render() {
    return (
      <CartContainer {...this.props} />
    );
  }
}

export default Cart;
