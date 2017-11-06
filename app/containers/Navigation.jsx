import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/users';

const Navigation = ({ user, logOut }) => {
    return (
      <nav className='navigation' role="navigation">
        <Link to="/user/marketplace">marketplace</Link>
        <Link to="/user/cart">cart</Link>
        <Link className='item' to="/">Log out</Link>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
