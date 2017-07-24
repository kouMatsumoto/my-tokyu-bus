import * as Router from 'koa-router';
import { makeWebApiErrorResultObject } from '../../../lib/api-response/make-web-api-error-result-object';
import { fetchFinalQueryHTML } from '../../../lib/tokyu-bus-timetable/final-query-html/fetch-final-query-html';
import { parseFinalQueryHTML } from '../../../lib/tokyu-bus-timetable/final-query-html/parse-final-query-html';
import { fetchTimetableHTML } from '../../../lib/tokyu-bus-timetable/timetable-html/fetch-timetable-html';
import { parseTimetableHtml } from '../../../lib/tokyu-bus-timetable/timetable-html/parse-timetable-html';
import { searchBusstopByWord } from '../../../lib/tokyu-bus-timetable/search-busstop-by-word/search-busstop-by-word';
import { fetchBusroutesByQuery } from '../../../lib/tokyu-bus-timetable/fetch-busroutes-by-query/fetch-busroutes-by-query';


/**
 * Tokyu Bus Timetable
 *
 * endpoint
 *   - http://www.tokyubus.co.jp/keitai/i/index.cgi?
 * query
 *   *disp_history - to identify file to refer (2122232425030405)
 *   *busstop_cd - departure bus-stop number (e.g. 1710409)
 *   *keito_cd - bus-route type number (e.g. 616101)
 *   *updown_cd - direction to go. (1 or 2)
 *   *pole_cd - specify a bus-stop to get-on among same name (e.g. 01, 24)
 */


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
 * First api to search busstop-name by a inputted word.
 */
_router.get('/busstops', async (ctx) => {
  const search: string = ctx.query['search'];
  ctx.body = await searchBusstopByWord(search);
});


/**
 * Second api to get routes options by searched busstop-name.
 */
_router.get('/routes', async (ctx) => {
  const queryString: string = ctx.query['query'];
  ctx.body = await fetchBusroutesByQuery(queryString);
});


/**
 * Fetch timetable by busstop and busroute
 */
_router.get('/:busstop/:busroute', async (ctx) => {
  const targetBusrouteName = ctx.params['busroute'];
  const busstop: string = ctx.params['busstop'];

  // fetch busstops data
  const busstopsData = await searchBusstopByWord(busstop);
  const busstopData = busstopsData[0];
  if (!busstopData) {
    return ctx.throw('Invalid busstop name');
  }

  // fetch busroutes of this busstop
  const busroutesData = await fetchBusroutesByQuery(busstopData.queryString);
  let busrouteData;
  for (let v of busroutesData) {
    if (v.name === targetBusrouteName) {
      busrouteData = v;
    }
  }
  if (!busrouteData) {
    return ctx.throw('Invalid busroute name');
  }

  // fetch timetable
  const httpResultOfFinalQuery = await fetchFinalQueryHTML(busrouteData.queryString);
  // will throw an error when the fetched html is unexpected.
  const queryObj = parseFinalQueryHTML(httpResultOfFinalQuery.contents);

  const httpResultOfTimetable = await fetchTimetableHTML(queryObj);
  // as above, will throw an error when the fetched html is unexpected.
  ctx.body = parseTimetableHtml(httpResultOfTimetable.contents);
});


/**
 * Final api to get timetable data.
 */
_router.get('/', async (ctx) => {
  const queryString: string = ctx.query['query'];
  const httpResultOfFinalQuery = await fetchFinalQueryHTML(queryString);
  // will throw an error when the fetched html is unexpected.
  const queryObj = parseFinalQueryHTML(httpResultOfFinalQuery.contents);

  const httpResultOfTimetable = await fetchTimetableHTML(queryObj);
  // as above, will throw an error when the fetched html is unexpected.
  ctx.body = parseTimetableHtml(httpResultOfTimetable.contents);
});


export const timetableRouter = _router;
