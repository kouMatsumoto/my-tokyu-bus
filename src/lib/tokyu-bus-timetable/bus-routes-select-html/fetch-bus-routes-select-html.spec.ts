import { parseForQueryString } from '../parse-for-query-string/parse-for-query-string';
import { useAsync } from '../../../../spec/support/helpers/use-async';
import { fetchBusStopNameSearchHTML } from '../bus-stop-name-search-html/fetch-bus-stop-name-search-html';
import { fetchBusRoutesSelectHTML } from './fetch-bus-routes-select-html';
import { busRoutesSelectHTML } from './bus-routes-select-html.mock';


describe('fetchBusRoutesSelectHTML', () => {
  it('should fetch expected html', useAsync(async () => {
    const searchHTTPResult = await fetchBusStopNameSearchHTML('下馬');
    const busstopNameData = parseForQueryString(searchHTTPResult.contents);
    const simouma1 = busstopNameData[0];

    const routesHTTPResult = await fetchBusRoutesSelectHTML(simouma1.queryString);
    const routesHTML = routesHTTPResult.contents;
    expect(routesHTML.length).toBe(busRoutesSelectHTML.length);
  }));
});
