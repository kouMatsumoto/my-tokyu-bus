import * as expect from 'expect';
import { filterLocationDataFromText } from './filter-location-data-from-text';
import { sampleTextContent } from './sample.mock';


describe('filterLocationDataFromText', () => {
  it('should filter properly', () => {
    const actual = filterLocationDataFromText(sampleTextContent);
    const expected = {
      name: '渋３２ 渋谷駅行',
      waitTime: 0
    };
    expect(actual).toEqual(expected);
  });

  it('should return null when text is &nbsp;', () => {
    const actual = filterLocationDataFromText('&nbsp;');
    expect(actual).toBe(null);
  });
});
