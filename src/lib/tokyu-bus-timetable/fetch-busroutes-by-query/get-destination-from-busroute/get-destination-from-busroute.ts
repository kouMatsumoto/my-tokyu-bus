/**
 * Get a destination busstop name from busroute.
 *
 * busroute-examples)
 *   - 【循環】野沢龍雲寺(野沢三丁目方面)
 *   - 東京医療センター(都立大学駅北口)
 *   - 都立大学駅北口
 * busroutes are composed of 3 parts, `type` and `destination` and `via`.
 *
 * - `type` is surrounded with `【】`.
 * - `destination` adjoins `type` and `via`.
 * - `via` is surrounded with `()`.
 *
 * @param {string} busroute - busroute name.
 * @return {string}
 */
export function getDestinationFromBusroute(busroute: string): string {
  let processed = busroute;

  // scrape `【】` if busroute includes it.
  if (processed.includes('【')) {
    const regexp = /^【.+?】(.+?)$/u;
    const regexpResult = processed.match(regexp);
    // null check
    if (regexpResult) {
      processed = regexpResult[1];
    }
  }

  // scrape `()` if busroute includes it.
  if (processed.includes('(')) {
    const regexp = /^(.+?)\(.+?\)$/u;
    const regexpResult = processed.match(regexp);
    // null check
    if (regexpResult) {
      processed = regexpResult[1];
    }
  }

  return processed;
}
