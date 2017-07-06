import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { parseBusStopNameSearchHTML } from './parse-bus-stop-name-search-html';

describe('My Test', () => {
  fit('should conduct my-test', useAsync(async () => {
    const html = await fetchBusStopNameSearchHTML('大崎');
    const parsed = parseBusStopNameSearchHTML(html.contents);
    console.log(parsed);
  }));
});


/**
 * helper function to use async/await syntax in jasmine.
 *
 * Todo: move to helper
 *
 * @param asyncFunction
 * @return {(done) => void}
 */
function useAsync(asyncFunction: () => Promise<void>) {
  return (done: Function) => {
    asyncFunction().then(() => done()).catch((e: Error) => { fail(e); done(); });
  };
}
