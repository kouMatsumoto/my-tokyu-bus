import * as Encoding from 'encoding-japanese';

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
