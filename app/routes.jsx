import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { App, UserCheckout, LoginOrRegister, Cart, Marketplace } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  // const redirectAuth = (nextState, replace, callback) => {
  //   const { user: { authenticated }} = store.getState();
  //   if (authenticated) {
  //     replace({
  //       pathname: '/'
  //     });
  //   }
  //   callback();
  // };
  return (
    <Router>
      <Route path="/" component={App} >
        <IndexRoute component={LoginOrRegister} />
      </Route>
      <Route path="/user" component={UserCheckout}>
        <IndexRoute component={Marketplace} />
        <Route path="cart" component={Cart} />
      </Route>
    </Router>
  );
};
