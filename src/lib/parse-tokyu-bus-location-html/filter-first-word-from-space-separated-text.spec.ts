import { filterFirstWordFromSpaceSeparatedText } from './filter-first-word-from-space-separated-text';


describe('filterFirstWordFromSpaceSeparatedText', () => {
  it('should be return "a"', () => {
    const text = 'a b c';
    const actual = filterFirstWordFromSpaceSeparatedText(text);
    const expected = 'a';
    expect(actual).toBe(expected);
  });

  it('should be return "b"', () => {
    const text = 'b';
    const actual = filterFirstWordFromSpaceSeparatedText(text);
    const expected = 'b';
    expect(actual).toBe(expected);
  });

  it('should be return ""', () => {
    const text = '';
    const actual = filterFirstWordFromSpaceSeparatedText(text);
    const expected = '';
    expect(actual).toBe(expected);
  });
});
