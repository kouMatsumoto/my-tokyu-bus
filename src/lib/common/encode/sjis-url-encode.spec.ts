import * as expect from 'expect';
import { sjisURLEncode } from './sjis-url-encode';


describe('sjisURLEncode', () => {
  it('should return encoded text', () => {
    const expected = '%89%BA%94n%88%EA%92%9A%96%DA';
    const actual = sjisURLEncode('下馬一丁目');
    expect(actual).toEqual(expected);
  });
});
