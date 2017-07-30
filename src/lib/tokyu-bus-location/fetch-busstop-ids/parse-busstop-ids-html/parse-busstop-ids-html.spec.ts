import * as expect from 'expect';
import { parseBusstopIdsHTML } from './parse-busstop-ids-html';
import { busstopIdsHTMLMock } from './parse-busstop-ids-html.mock';


describe.only('parseBusstopIdsHTML', () => {
  it('should parse html properly', () => {
    const parsed = parseBusstopIdsHTML(busstopIdsHTMLMock);
    const expected = {
      departures: {
        text: '下馬一丁目',
        value: '2598'
      },
      arrivals: {
        text: '中目黒',
        value: '2351'
      },
    };
    expect(parsed).toEqual(expected);
  });
});
