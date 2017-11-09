import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users'
import classNames from 'classnames/bind';
import styles from '../css/components/login';
const cx = classNames.bind(styles);

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

handleOnSubmit(event) {
    event.preventDefault();

    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  renderHeader() {
    const { user: { isLogin }, toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <div className={cx('header')}>
          <h3>Login</h3>
          <div className={cx('alternative')}>
            New user?
            <a
              href=''
              className={cx('alternative-link')}
              onClick={toggleLoginMode}
            > Register an Account</a>
          </div>
        </div>
      );
    }

    return (
      <div className={cx('header')}>
        <h3>Register</h3>
        <div className={cx('alternative')}>
          Already have an account?
          <a
            href=''
            className={cx('alternative-link')}
            onClick={toggleLoginMode}
          > Login</a>
        </div>
      </div>
    );
  }

  render() {

    const { isWaiting, message, isLogin } = this.props.user;

    return (
      <div
        className={cx('login')}
      >
        <div className={cx('login-container')}>
          { this.renderHeader() }
          <div className={cx('email-container')}>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className={cx('input')}
                type="email"
                ref="email"
               placeholder="email"
              />
              <br/>
              <input
                className={cx('input')}
                type="password"
               ref="password"
                placeholder="password"
              />

              <p
                className={cx('message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <Button
                type='submit'
                bsStyle="primary"
                className={cx('button')}
              >
                {isLogin ? 'Login' : 'Register'}
               </Button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, { manualLogin, signUp, toggleLoginMode })(Login);
