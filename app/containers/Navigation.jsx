import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/users';
import cart from '../images/cart.png';
import styles from '../css/components/appHeader';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Navigation = ({ purchasedItems, logOut }) => {
    const qty = purchasedItems ? _.sumBy(_.map(purchasedItems.ads), 'totalAds') || 0 : 0;

    return (
      <nav className={cx('navigation')} role="navigation">
        <Link to="/user" > Marketplace </Link>
        <Link to="/user/cart" >
          <img className={cx('cart')} src={cart}/>
          {
            qty > 0
            ? <span className={cx('cart-items')}>{qty}</span>
            : null
          }
        </Link>
        <Link className='item' to='/logout' onClick={logOut}>Log out</Link>
      </nav>
    );
};

Navigation.propTypes = {
  purchasedItems: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    purchasedItems: state.user.purchasedItems
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
