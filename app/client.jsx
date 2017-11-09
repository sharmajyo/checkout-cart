import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from './routes';
import * as types from './types';
import configureStore from './store/configureStore';
import fetchDataForRoute from './utils/fetchDataForRoute';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

/**
 * Callback function handling frontend route changes.
 */
function onUpdate() {
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  store.dispatch({ type: types.CREATE_REQUEST });
  fetchDataForRoute(this.state)
    .then((data) => {
      return store.dispatch({ type: types.REQUEST_SUCCESS, data });
    });
}


render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app'));
