import { combineReducers } from 'redux';
import * as types from '../types';


const initialState = {
  authenticated: null,
  isWaiting: false,
  message: '',
  isLogin: false,
  cartTotal: 0,
  purchasedItems: [],
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    default:
      return newState;
  }
};
