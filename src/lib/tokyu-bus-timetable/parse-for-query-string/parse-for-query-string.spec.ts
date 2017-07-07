import { parseForQueryString } from './parse-for-query-string';
import { busStopNameSearchHTMLMockString } from '../bus-stop-name-search-html/bus-stop-name-search-html.mock';

const expected = [
  {
    name: '下馬一丁目',
    queryString: 'cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1710409,'
  },
  {
    name: '下馬営業所',
    queryString: 'cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1710410,'
  },
  {
    name: '下馬五丁目',
    queryString: 'cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1735415,'
  },
  {
    name: '下馬六丁目',
    queryString: 'cd=11121303,07/06,7,2,%89%ba%94n,1,,,,,,1725509,'
  }
];

describe('parseForQueryString', () => {
  it('should parse the html properly', () => {
    const actual = parseForQueryString(busStopNameSearchHTMLMockString);
    expect(actual).toEqual(expected);
  });
});
