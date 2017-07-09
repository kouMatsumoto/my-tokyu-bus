import * as moment from 'moment';
import * as Router from 'koa-router';
import { makeWebApiErrorResultObject } from '../../../lib/make-web-api-error-result-object';
import { fetchBusStopNameSearchHTML } from '../../../lib/tokyu-bus-timetable/bus-stop-name-search-html/fetch-bus-stop-name-search-html';
import { parseHTMLByAnchor } from '../../../lib/tokyu-bus-timetable/parse-html-by-anchor/parse-html-by-anchor';
import { fetchBusRoutesSelectHTML } from '../../../lib/tokyu-bus-timetable/bus-routes-select-html/fetch-bus-routes-select-html';
import { fetchFinalQueryHTML } from '../../../lib/tokyu-bus-timetable/final-query-html/fetch-final-query-html';
import { parseFinalQueryHTML } from '../../../lib/tokyu-bus-timetable/final-query-html/parse-final-query-html';
import { fetchTimetableHTML } from '../../../lib/tokyu-bus-timetable/timetable-html/fetch-timetable-html';
import { parseTimetableHtml } from '../../../lib/tokyu-bus-timetable/timetable-html/parse-timetable-html';
import { retrieveFolderAndDispValue } from '../../../lib/tokyu-bus-timetable/folder-and-disp-value-html/retrieve-folder-and-disp-value';


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


// TODO: use db to store following variables.
// to retrieve 'folder' and 'disp_history' prerequisite options every day.
let lastFetchedDay: '';
// required to fetch timetable. (this is parameter for weekday type)
let folder = '';
// required to fetch timetable. (this is parameter for timetable version)
let disp_history = '';

/**
 * Retrieve prerequisite query values `folder` and `disp_history`.
 * These can be updated everyday.
 */
_router.use(async (_ctx, next) => {
  const today = moment().format('D');
  if (today === lastFetchedDay) {
    return next();
  }

  const retrieved = await retrieveFolderAndDispValue();
  folder = retrieved.folder;
  disp_history = retrieved.disp_history;
  return next();
});


/**
 * First api to search busstop-name by a inputted word.
 */
_router.get('/busstops', async (ctx) => {
  const search: string = ctx.query['search'];
  const mmdd = moment().format('MM/DD');

  const options = {
    folder,
    disp_history,
    mmdd
  };
  const httpResult = await fetchBusStopNameSearchHTML(search, options);
  // when busstop not found, result is an empty array [].
  ctx.body = parseHTMLByAnchor(httpResult.contents);
});


/**
 * Second api to get routes options by searched busstop-name.
 */
_router.get('/routes', async (ctx) => {
  const queryString: string = ctx.query['query'];
  const httpResult = await fetchBusRoutesSelectHTML(queryString);
  // when bus-routes not found, result is an empty array [].
  ctx.body = parseHTMLByAnchor(httpResult.contents);
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
