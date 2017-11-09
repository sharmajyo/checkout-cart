import { DB_TYPE } from '../../config/env';
const dbConfig = require('./mongo').default;

/* use inline requires for conditional loading */
// switch (DB_TYPE) {
//   case DB_TYPE:
//     dbConfig = require('./mongo').default;
//     break;

//   default:
//     throw new Error(`No database type '${DB_TYPE}' found`);
// }

export const connect = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const passport = dbConfig.passport;
export const session = dbConfig.session;

