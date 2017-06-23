/**
 * Get a natural number from tokyu-bus wait-time text.
 *
 * e.g. '05分待ち' -> '5'
 *
 * @param {string} text - e.g. '05分待ち'
 * @return {number}
 */
export function getNaturalNumberFromWaitTimeText(text: string) {
  const regexp = /(^[1-9]?[0-9]*\D+$)/;
  const matchResults = text.match(regexp); // e.g. ["12分待ち","12"], null

  // when not match, matchResults is null
  if (matchResults === null) {
    throw new Error('unexpected value is passed');
  }

  return parseInt(matchResults[1]);
}
