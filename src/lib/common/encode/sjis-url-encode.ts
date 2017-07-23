import * as Encoding from 'encoding-japanese';

/**
 * URLEncode for SJIS.
 *
 * @param {string} utf8Text
 * @return {string}
 */
export function sjisURLEncode(utf8Text: string): string {
  const utf8CodeArray = Encoding.stringToCode(utf8Text);
  const sjisArray = Encoding.convert(utf8CodeArray, 'SJIS', 'UNICODE');
  return <string>Encoding.urlEncode(sjisArray);
}
