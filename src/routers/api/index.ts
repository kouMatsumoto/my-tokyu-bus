import * as Router from 'koa-router';
import { timetableRouter } from './timetable/index';
import { locationRouter } from './location/index';
import { makeWebApiErrorResultObject } from '../../lib/api-response/make-web-api-error-result-object';
import { makeWebApiResultObject } from '../../lib/api-response/make-web-api-result-object';


const apiRouter = new Router();


/**
 * This middleware catches all errors thrown by child routers.
 */
apiRouter.use(async (ctx, next) => {
  try {
    await next();
    ctx.body = makeWebApiResultObject(ctx.body);
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = makeWebApiErrorResultObject(e.message);
  }
});



apiRouter.use('/location', locationRouter.routes());
apiRouter.use('/timetable', timetableRouter.routes());

export {
  apiRouter
};
