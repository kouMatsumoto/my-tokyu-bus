import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { busStopNameSearchHTMLMockString } from './bus-stop-name-search-html.mock';


describe('fetchBusStopNameSearchHTML', () => {
  it('should be same result to sample-html', (done) => {
    fetchBusStopNameSearchHTML('下馬')
      .then((result) => {
        const expected = busStopNameSearchHTMLMockString;
        const actual = result.contents;

        // date is variable, so compare with length of each html.
        expect(actual.length).toEqual(expected.length);
      })
      .then(() => {
        done();
      });
  });
});
