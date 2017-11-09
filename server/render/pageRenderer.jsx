import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import serialize from 'serialize-javascript';
import staticAssets from './static-assets';

const createApp = (store, props) => renderToString(
  <Provider store={store}>
    <RouterContext {...props} />
  </Provider>
);

const buildPage = ({ componentHTML, initialState }) => {
  return `
<!doctype html>
<html>
  <body>
    <div id="app" class="checkout-app" style="height: 100%">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  return buildPage({ componentHTML, initialState });
};

