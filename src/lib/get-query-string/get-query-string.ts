/**
 * get 'param=a' in 'uri?param=a'.
 *
 * @param text
 * @return {string}
 */
export function getQueryString(text: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  const regExp = /^.*\?(.*)$/;
  const matchResult = text.match(regExp);

  // matchResult is nullable.
  if (matchResult === null) {
    return '';
  }

  return matchResult[1] || '';
}
