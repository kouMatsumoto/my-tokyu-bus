import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { parseBusStopNameSearchHTML } from './parse-bus-stop-name-search-html';
import { useAsync } from '../../../spec/support/helpers/use-async';
import { fetchBusRoutesSelectHTML } from './fetch-bus-routes-select-html';


describe('My Test', () => {
  xit('should conduct my-test', useAsync(async () => {
    const html = await fetchBusStopNameSearchHTML('下馬');
    const parsed = parseBusStopNameSearchHTML(html.contents);
    const simouma1 = parsed[0];

    const routesHTML = await fetchBusRoutesSelectHTML(simouma1.queryString);
    const routesData = parseBusStopNameSearchHTML(routesHTML.contents);

    console.log(routesData);
  }));
});
