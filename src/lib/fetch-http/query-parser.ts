
/**
 * get query string of http-get, e.g. ?q=a&r=b
 *
 * @param {Object} queryObj - key value object
 * @return {string}
 */
export function queryParser(queryObj: {[key: string]: string}): string {
  // check null
  if (!queryObj) {
    return '';
  }

  // e.g. [ ['k1', 'v1'], ['k2', 'v2'], ['k3', 'v3'] ]
  const keyValueArray: string[][] = Object.entries(queryObj);
  const queryString = keyValueArray
    .map((pair) => `${pair[0]}=${pair[1]}`)
    .reduce((acc, str) => acc + `&${str}`, '');

  if (queryString !== '') {
    return '?' + queryString;
  } else {
    return '';
  }
}
