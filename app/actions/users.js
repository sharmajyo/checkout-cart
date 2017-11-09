import { push } from 'react-router-redux';
import { authService, cartService } from '../services';

import * as types from '../types';

function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message, data) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message,
    data
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess(message, data) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message,
    data
  };
}

function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode(e) {
  e.preventDefault();
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return (dispatch) => {
    dispatch(beginLogin());

    return authService().login(data)
      .then((response) => {
        dispatch(loginSuccess('You have been successfully logged in', response.data.user));
        dispatch(push('/user'));
      })
      .catch((err) => {
        dispatch(loginError('Oops! Invalid username or password'));
      });
  };
}

export function signUp(data) {
  return (dispatch) => {
    dispatch(beginSignUp());

    return authService().signUp(data)
      .then((response) => {
          dispatch(signUpSuccess('You have successfully registered an account!', response.data.user));
          dispatch(push('/user'));
      })
      .catch((err) => {
        dispatch(signUpError('Oops! Something went wrong when signing up'));
      });
  };
}

export function logOut() {
  return (dispatch) => {
    dispatch(beginLogout());

    return authService().logOut()
      .then((response) => {
          dispatch(logoutSuccess());
          dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(logoutError());
      });
  };
}


function cartSuccess(response) {
  return {type: types.FETCH_CART_SUCCESS, data: response.data};
}

function addedInCartSuccess(response) {
  return {type: types.FETCH_CART_SUCCESS, data: response.data};
}

function fetchCartItems(userId, dispatch) {
  return cartService().getItemsInCart(userId)
    .then((response) => {
     dispatch(cartSuccess(response));
    })
    .catch((err) => {
      // addToCartError('Oops! something went wrong.');
    });
}

const mapDispatchToProps = (dispatch) => {

  return {
    addAndCheckout: (itemId, userId, qty) => {
      return cartService().addToCart(itemId, userId, qty)
      .then((response) => {
        fetchCartItems(userId, dispatch);
        dispatch(push('/user/cart'));
      })
      .catch((err) => {
        // addToCartError('Oops! something went wrong.');
      });
    },
    addToCart: (itemId, userId, qty) => {
      return cartService().addToCart(itemId, userId, qty)
        .then((response) => {
          fetchCartItems(userId, dispatch);
          dispatch(addedInCartSuccess());
        })
        .catch((err) => {
          // addToCartError('Oops! something went wrong.');
        });
    },
    getItemsInCart: (userId) => {
      fetchCartItems(userId, dispatch);
    }
  };
}
export default mapDispatchToProps;
