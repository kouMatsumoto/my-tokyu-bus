import * as expect from 'expect';
import { sjisURLDecode } from './sjis-url-decode';


describe('sjisURLDecode', () => {
  it('should return decoded text', () => {
    const expected = '下馬一丁目';
    const actual = sjisURLDecode('%89%BA%94n%88%EA%92%9A%96%DA');
    expect(actual).toEqual(expected);
  });
});
