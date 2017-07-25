import * as Router from 'koa-router';
import { apiRouter } from './api';

const rootRouter = new Router();

rootRouter.use('/api', apiRouter.routes());

export {
  rootRouter
};
