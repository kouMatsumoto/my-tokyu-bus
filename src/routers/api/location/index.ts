import * as Router from 'koa-router';
import { makeWebApiErrorResultObject } from '../../../lib/api-response/make-web-api-error-result-object';
import { fetchBusLocationByBusstopNames } from '../../../lib/tokyu-bus-location/fetch-bus-location-by-busstop-names/fetch-bus-location-by-busstop-names';


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
 * Final api to get timetable data.
 */
_router.get('/', async (ctx) => {
  const departureName: string = ctx.query['departureName'];
  const arrivalName: string = ctx.query['arrivalName'];
  ctx.body = await fetchBusLocationByBusstopNames(departureName, arrivalName);
});


export const locationRouter = _router;
