import * as Router from 'koa-router';
import { timetableRouter } from './timetable/index';
import { locationRouter } from './location/index';
import { makeWebApiErrorResultObject } from '../lib/api-response/make-web-api-error-result-object';
import { makeWebApiResultObject } from '../lib/api-response/make-web-api-result-object';

const rootRouter = new Router();


/**
 * This middleware catches all errors thrown by child routers.
 */
rootRouter.use(async (ctx, next) => {
  try {
    await next();
    ctx.body = makeWebApiResultObject(ctx.body);
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = makeWebApiErrorResultObject(e.message);
  }
});


rootRouter.use('/location', locationRouter.routes());
rootRouter.use('/timetable', timetableRouter.routes());


export { rootRouter };
