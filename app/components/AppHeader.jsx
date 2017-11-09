import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../containers/Navigation';
import logo from '../images/logo.png';
import styles from '../css/components/appHeader';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const AppHeader = ({loggedInUser}) => {
  const header = <header className={cx('app-header')} >
    <img className={cx('app-logo')} src={logo} />
    <div className={cx('user-details')}>
      <Navigation/>
    </div>
  </header>

  return (
    <header className={cx('app-header')} >
      <img className={cx('app-logo')} src={logo} />
      {
        loggedInUser
        ? <div className={cx('user-details')}>
            <Navigation/>
          </div>
        : null
      }
    </header>
  );
};

function mapStateToProps({user}) {
  return {
    loggedInUser: user.authenticated
  };
}

export default connect(mapStateToProps, null)(AppHeader);







