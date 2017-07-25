import * as expect from 'expect';
import { BUS_LOCATION_RESULT_HTML_TEXT } from './tokyu-bus-location-html.mock';
import { parseTokyuBusLocationHtml } from './parse-tokyu-bus-location-html';
import { BusLocationData } from '../../../types/bus-location-data';


const expected: BusLocationData[] = [
  {
    destination: '野沢龍行',
    waitTimes: 14
  },
  {
    destination: '野沢龍行',
    waitTimes: 5
  },
  {
    destination: '野沢龍行',
    waitTimes: 0
  },
  {
    destination: '渋谷駅行',
    waitTimes: 6
  },
];


describe('parseTokyuBusLocationHtml', () => {
  it('should be return expected data', () => {
    const actual = parseTokyuBusLocationHtml(BUS_LOCATION_RESULT_HTML_TEXT);
    expect(actual).toEqual(expected);
  });
});
