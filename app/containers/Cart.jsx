import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import CartItem from '../components/CartItem';

const Cart = ({purchasedItems, cartTotal})  => {
  return (
    <div>
      <h2>cart</h2>
      <ui>
      {
        _.map(purchasedItems, (item, i) => {
          const list = <li className="item-details" key={i} >
            <CartItem product={item}/>
          </li>
          return list;
        })
      }
      </ui>
      <div className='total'>
        total {cartTotal}
      </div>
    </div>
  );
};

Cart.propTypes = {
};

function mapStateToProps(state) {
  console.log("state.usestate.usestate.use",state.user);
  return {
    purchasedItems: state.user.purchasedItems,
    cartTotal: state.user.cartTotal
  };
}

export default connect(mapStateToProps, null)(Cart);
