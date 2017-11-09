import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import CartItem from '../components/CartItem';
import classNames from 'classnames/bind';
import styles from '../css/components/cart';
const cx = classNames.bind(styles);

const Cart = ({purchasedItems, cartTotal})  => {
  const qty = purchasedItems ? _.sumBy(_.map(purchasedItems.ads), 'totalAds') || 0 : 0;
  const msg = qty == 0 ? 'Hi there, you have no item in your cart'
    : 'Hi there, you have selected these items';

  return (
      <div className={cx('cart')}>
        <h4>{msg}</h4>
        {
          qty == 0 ? null
          : <div className={cx('in-cart-items')}>
            <div className={cx('item-header')}>
              <span>Ad description</span>
              <span>Purchase qty</span>
              <span>Price per item</span>
              <span>You Pay</span>
            </div>
            <ui className={cx('cart-ul')}>
            {
              _.map(purchasedItems.ads, (item, i) => {
                const list = <li className={cx('item-details')} key={i} >
                  <CartItem item={item}/>
                </li>
                 return item.totalAds > 0 ?  list : null;
              })
            }
            </ui>
            <div className={cx('purchase-total')}>
              <span className={cx('info-text')}>total </span>
              ${cartTotal}
            </div>
          </div>
      }

    </div>
  );
};

function mapStateToProps(state) {
  return {
    purchasedItems: state.user.purchasedItems,
    cartTotal: state.user.cartTotal
  };
}

export default connect(mapStateToProps, null)(Cart);
