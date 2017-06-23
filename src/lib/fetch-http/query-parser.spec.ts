import { queryParser } from './query-parser';

const testObj1 = {
  param1: 'param1'
};
const expected1 = '?&param1=param1';

const testObj2 = {
  param1: 'param1',
  param2: 'param2',
};
const expected2 = '?&param1=param1&param2=param2';



describe('queryParser', () => {
  it('should be return expected', () => {
    const actual = queryParser(testObj1);
    expect(actual).toEqual(expected1);
  });

  it('should be return expected', () => {
    const actual = queryParser(testObj2);
    expect(actual).toEqual(expected2);
  });

  it('should be return empty string', () => {
    const actual = queryParser({});
    expect(actual).toEqual('');
  });
});
