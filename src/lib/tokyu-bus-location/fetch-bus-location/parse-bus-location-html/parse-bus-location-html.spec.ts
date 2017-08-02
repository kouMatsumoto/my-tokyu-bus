import * as expect from 'expect';
import { parseBusLocationHTML } from './parse-bus-location-html';
import { busLocationHTMLMock } from './bus-location-html.mock';


const expected = [
 {
   name: '渋３２ 渋谷駅行',
   waitTime: 0,
   remainingStops: 0
 },
 {
   name: '渋３２ 渋谷駅行',
   waitTime: 6,
   remainingStops: 4
 }
];

describe('parseBusLocationHTML', () => {
  it('should parse properly', () => {
    const actual = parseBusLocationHTML(busLocationHTMLMock);
    expect(actual).toEqual(expected);
  });
});
