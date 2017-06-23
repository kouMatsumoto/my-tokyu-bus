import * as Router from 'koa-router';
import { makeWebApiErrorResultObject } from '../../../lib/make-web-api-error-result-object';


const _router = new Router();

/**
 * Error handling for this router
 * it's better move this error handling to global router
 */
_router.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = makeWebApiErrorResultObject(e.message);
  }
});


/**
 * query
 *   *disp_history - to identify file to refer.
 *   *updown_cd
 *   *pole_cd
 *   *busstop_cd - departure bus-stop
 *   *keito_cd
 */
_router.get('/', async (ctx) => {
  ctx.body = '/api/timetable';
});


export const timetableRouter = _router;
