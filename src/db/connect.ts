/**
 * This file set mongoose connection initialized
 *
 * to know emitted mongoose connection event types, see mongoose source code of
 *   - node_modules/@types/mongoose/index.d.ts: ConnectionBase
 *
 * how to handle events is referenced below
 *   - http://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback
 *   - http://theholmesoffice.com/mongoose-connection-best-practice/
 */

import { connect, Mongoose } from 'mongoose';
import { devLogger } from '../lib/logger/dev-logger';
import { ENV } from '../config/environments';


const dbURI = ENV.dbUrl;

// Fixme: enable `useMongoClient: true`
// @see: http://mongoosejs.com/docs/connections.html#use-mongo-client
const connectOptions = {
  promiseLibrary: Promise,
};


const mongoose: Mongoose = connect(dbURI, connectOptions);
// use ES6 Promise instead of mongoose Built-in Promise
mongoose.Promise = Promise;


mongoose.connection.on('connecting', () => {
  devLogger.info('mongoose connecting');
});

mongoose.connection.on('connected', () => {
  devLogger.info('mongoose connected');
});

mongoose.connection.on('open', () => {
  devLogger.info('mongoose open');
});

mongoose.connection.on('disconnecting', () => {
  devLogger.warn('mongoose disconnecting');
});

mongoose.connection.on('disconnected', () => {
  devLogger.error('mongoose disconnected');
});

mongoose.connection.on('close', () => {
  devLogger.info('mongoose close');
});

mongoose.connection.on('reconnected', () => {
  devLogger.warn('mongoose reconnected');
});

mongoose.connection.on('error', () => {
  devLogger.error('mongoose error');
});
