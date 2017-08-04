import * as Router from 'koa-router';
import { searchBusstopByWord } from '../../../lib/tokyu-bus-timetable/search-busstops-by-word/search-busstops-by-word';
import { fetchBusroutesByQuery } from '../../../lib/tokyu-bus-timetable/fetch-busroutes-by-query/fetch-busroutes-by-query';
import { fetchTimetableByQuery } from '../../../lib/tokyu-bus-timetable/fetch-timetable-by-query/fetch-timetable-by-query';


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
  ctx.body = await fetchTimetableByQuery(busrouteData.queryString);
});


/**
 * Final api to get timetable data.
 */
_router.get('/', async (ctx) => {
  const queryString: string = ctx.query['query'];
  ctx.body = await fetchTimetableByQuery(queryString);
});


export const timetableRouter = _router;
