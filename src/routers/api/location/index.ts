import * as Router from 'koa-router';
import { fetchBusLocationByBusstopNames } from '../../../lib/tokyu-bus-location/fetch-bus-location-by-busstop-names/fetch-bus-location-by-busstop-names';


const _router = new Router();

/**
 * Final api to get timetable data.
 */
_router.get('/', async (ctx) => {
  const departureName: string = ctx.query['departureName'];
  const arrivalName: string = ctx.query['arrivalName'];
  ctx.body = await fetchBusLocationByBusstopNames(departureName, arrivalName);
});


export const locationRouter = _router;
