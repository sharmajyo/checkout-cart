/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const checkoutController = controllers && controllers.checkout;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }
  // checkout routes
  if (checkoutController) {
    app.get('/cart/:userId/item', checkoutController.all);
    app.post('/cart/item/:id', checkoutController.add);
    app.put('/cart/item/:id', checkoutController.update);
    app.delete('/cart/item/:id', checkoutController.remove);
  } else {
    console.warn(unsupportedMessage('checkout routes'));
  }
};
