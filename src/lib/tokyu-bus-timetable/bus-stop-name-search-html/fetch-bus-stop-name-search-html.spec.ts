import * as expect from 'expect';
import * as moment from 'moment';
import { fetchBusStopNameSearchHTML } from './fetch-bus-stop-name-search-html';
import { busStopNameSearchHTMLMockString } from './bus-stop-name-search-html.mock';
import { retrieveFolderAndDispValue } from '../folder-and-disp-value-html/retrieve-folder-and-disp-value';


describe('fetchBusStopNameSearchHTML', () => {
  let options: any;
  beforeEach((done) => {
    retrieveFolderAndDispValue().then((retrieved) => {
      options = {
        mmdd: moment().format('MM/DD'),
        folder: retrieved['folder'],
        disp_history: retrieved['disp_history']
      };
      done();
    });
  });

  it('should be same result to sample-html', (done) => {
    fetchBusStopNameSearchHTML('下馬', options)
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
