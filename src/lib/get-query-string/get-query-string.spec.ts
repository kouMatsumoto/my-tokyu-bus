import * as expect from 'expect';
import { getQueryString } from './get-query-string';

describe('getQueryString', () => {
  it('should return empty string', () => {
    expect(getQueryString('')).toEqual('');
  });

  it('should return empty string even if null', () => {
    expect(getQueryString(null as any)).toEqual('');
  });

  it('should return empty string if not match', () => {
    expect(getQueryString('test-text')).toEqual('');
  });

  it('should return query-string matched', () => {
    expect(getQueryString('url?a=b')).toEqual('a=b');
  });
});
