import { useAsync } from '../../../../../spec/helpers/use-async';
import * as expect from 'expect';
import { parseBusLocationHTML } from './parse-bus-location-html';
import { busLocationHTMLMock } from './bus-location-html.mock';


describe('parseBusLocationHTML', () => {
  it('should', useAsync(async () => {
    const actual = await parseBusLocationHTML(busLocationHTMLMock);
    expect(actual).toBeTruthy();
  }));
});
