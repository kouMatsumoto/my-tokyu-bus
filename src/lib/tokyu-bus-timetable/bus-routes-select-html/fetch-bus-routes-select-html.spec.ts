import * as expect from 'expect';
import * as moment from 'moment';
import { parseHTMLByAnchor } from '../parse-html-by-anchor/parse-html-by-anchor';
import { useAsync } from '../../../../spec/helpers/use-async';
import { fetchBusStopNameSearchHTML } from '../bus-stop-name-search-html/fetch-bus-stop-name-search-html';
import { fetchBusRoutesSelectHTML } from './fetch-bus-routes-select-html';
import { busRoutesSelectHTML } from './bus-routes-select-html.mock';
import { retrieveFolderAndDispValue } from '../folder-and-disp-value-html/retrieve-folder-and-disp-value';


describe('fetchBusRoutesSelectHTML', () => {
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

  // NOTE: this test can failed because routes options are variable by folder value.
  it.skip('should fetch expected html', useAsync(async () => {
    const searchHTTPResult = await fetchBusStopNameSearchHTML('下馬', options);
    const busstopNameData = parseHTMLByAnchor(searchHTTPResult.contents);
    const simouma1 = busstopNameData[0];

    const routesHTTPResult = await fetchBusRoutesSelectHTML(simouma1.queryString);
    const routesHTML = routesHTTPResult.contents;
    expect(routesHTML.length).toBe(busRoutesSelectHTML.length);
  }));
});
