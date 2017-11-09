import { combineReducers } from 'redux';
import * as types from '../types';


const initialState = {
  authenticated: false,
  isWaiting: false,
  id: NaN,
  message: '',
  isLogin: true,
  cartTotal: 0,
  purchasedItems: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case types.TOGGLE_LOGIN_MODE :
      newState.message = '';
      newState.isLogin = !state.isLogin;
      return newState;
    case types.LOGOUT_SUCCESS_USER :
      return initialState;
    case types.LOGIN_ERROR_USER :
    case types.SIGNUP_ERROR_USER :
      newState.message = action.message;
      return newState;
    case types.LOGIN_SUCCESS_USER :
    case types.SIGNUP_SUCCESS_USER :
      return Object.assign(newState, action.data);
    case types.FETCH_CART_SUCCESS :
      const cartTotal = action.data.purchasedItems ? action.data.purchasedItems.total : 0;
      return Object.assign(newState, {cartTotal}, action.data);
    default:
      return newState;
  }
};
