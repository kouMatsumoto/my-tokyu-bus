import * as Router from 'koa-router';
import { apiRouter } from './api';
import { dummyApiRouter } from './dummy-api/index';

const rootRouter = new Router();

rootRouter.use('/api', apiRouter.routes());
rootRouter.use('/dummy-api', dummyApiRouter.routes());

export {
  rootRouter
};
