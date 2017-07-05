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

/**
 * URLDecoded for SJIS.
 *
 * @param sjisURLEncoded
 * @return {string}
 */
export function sjisURLDecode(sjisURLEncoded: string): string {
  const sjisCodeArray = Encoding.urlDecode(sjisURLEncoded);
  const utf8CodeArray = Encoding.convert(sjisCodeArray, 'UNICODE', 'SJIS');
  return <string>Encoding.codeToString(utf8CodeArray);
}
