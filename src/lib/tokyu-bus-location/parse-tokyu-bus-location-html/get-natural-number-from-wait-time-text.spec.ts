import * as expect from 'expect';
import { getNaturalNumberFromWaitTimeText } from './get-natural-number-from-wait-time-text';


describe('getNaturalNumberFromWaitTimeText', () => {
  it('should be return 2 (with start 0)', () => {
    const actual = getNaturalNumberFromWaitTimeText('02分待ち');
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should be return 3 (without start 0)', () => {
    const actual = getNaturalNumberFromWaitTimeText('3分待ち');
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it('should be return 14', () => {
    const actual = getNaturalNumberFromWaitTimeText('14分待ち');
    const expected = 14;
    expect(actual).toBe(expected);
  });

  it('should throw an error', () => {
    expect(() => getNaturalNumberFromWaitTimeText('あ14分待ち')).toThrow();
  });

  it('should throw an error', () => {
    expect(() => getNaturalNumberFromWaitTimeText('')).toThrow();
  });
});
