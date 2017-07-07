import { useAsync } from '../../../spec/support/helpers/use-async';
import { fetchBusStopNameSearchHTML } from './bus-stop-name-search-html/fetch-bus-stop-name-search-html';
import { parseForQueryString } from './parse-for-query-string/parse-for-query-string';
import { fetchBusRoutesSelectHTML } from './bus-routes-select-html/fetch-bus-routes-select-html';
import { fetchSJISHtml } from '../fetch-http/fetch-html';
import { TOKYU_BUS_TIMETABLE_URL } from '../../config/constants';
import { parseFinalQueryHTML } from './final-query-html/parse-final-query-html';
import { fetchTimetableHTML } from './timetable-html/fetch-timetable-html';
import { parseTimetableHtml } from './timetable-html/parse-timetable-html';


describe('total test of tokyu-bus-timetable', () => {
  it('should conduct my-test', useAsync(async () => {
    const html = await fetchBusStopNameSearchHTML('下馬');
    const parsed = parseForQueryString(html.contents);
    const simouma1 = parsed[0];

    const routesHTML = await fetchBusRoutesSelectHTML(simouma1.queryString);
    const routesData = parseForQueryString(routesHTML.contents);

    const sibuyaData = routesData[1];
    const url = `${TOKYU_BUS_TIMETABLE_URL}?${sibuyaData.queryString}`;
    const finalQueryHTTPResult = await fetchSJISHtml(url);

    const finalQuery = parseFinalQueryHTML(finalQueryHTTPResult.contents);
    const timetableHTTPResult = await fetchTimetableHTML(finalQuery);
    const timetableData = parseTimetableHtml(timetableHTTPResult.contents);

    expect(timetableData.length).toBeGreaterThanOrEqual(1);
  }));
});
