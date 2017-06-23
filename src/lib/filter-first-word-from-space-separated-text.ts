/**
 * Get a first word from a space separated text.
 *
 * e.g. '龍雲寺 05分待ち' -> '龍雲寺'
 *
 * @param {string} text - a space-separated text e.g. '龍雲寺 05分待ち'
 * @return {string}
 */
export function filterFirstWordFromSpaceSeparatedText(text: string) {
  const splitted = text.split(' ');
  return splitted[0];
}
