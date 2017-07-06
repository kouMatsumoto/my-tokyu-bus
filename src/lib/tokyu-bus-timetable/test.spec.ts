import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { parseBusStopNameSearchHTML } from './parse-bus-stop-name-search-html';
import { useAsync } from '../../../spec/support/helpers/use-async';


describe('My Test', () => {
  fit('should conduct my-test', useAsync(async () => {
    const html = await fetchBusStopNameSearchHTML('大崎');
    const parsed = parseBusStopNameSearchHTML(html.contents);
    console.log(parsed);
  }));
});
