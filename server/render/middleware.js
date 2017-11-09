import { createMemoryHistory, match } from 'react-router';
import createRoutes from '../../app/routes';
import configureStore from '../../app/store/configureStore';
import * as types from '../../app/types';
import pageRenderer from './pageRenderer';
import fetchDataForRoute from '../../app/utils/fetchDataForRoute';

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
  const authenticated = req.isAuthenticated();
  const history = createMemoryHistory();

  const store = configureStore({
    user: {
      authenticated: false,
      isWaiting: false,
      isLogin: true,
      message: '',
    }
  }, history);
  const routes = createRoutes(store);


  match({routes, location: req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).json(err);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      // This method waits for all render component
      // promises to resolve before returning to browser
      store.dispatch({ type: types.CREATE_REQUEST });
      fetchDataForRoute(props)
        .then((data) => {
          store.dispatch({ type: types.REQUEST_SUCCESS, data });
          const html = pageRenderer(store, props);
          res.status(200).send(html);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json(err);
        });
    } else {
      res.sendStatus(404);
    }
  });
}
