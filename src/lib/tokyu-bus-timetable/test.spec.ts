import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { parseBusStopNameSearchHTML } from './parse-bus-stop-name-search-html';

describe('My Test', () => {
  fit('should conduct my-test', testAsync(async () => {
    const html = await fetchBusStopNameSearchHTML('大崎');
    const parsed = parseBusStopNameSearchHTML(html.contents);
    console.log(parsed);
  }));
});


/**
 * Todo: move to helper
 *
 * @param runAsync
 * @return {(done:Function)=>undefined}
 */
function testAsync(runAsync: any) {
  return (done: Function) => {
    runAsync().then(() => done()).catch((e: Error) => { fail(e); done(); });
  };
}
