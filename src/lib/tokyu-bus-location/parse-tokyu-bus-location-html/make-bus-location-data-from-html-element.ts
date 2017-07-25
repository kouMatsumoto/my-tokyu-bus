import { NEEDLE_TO_WAIT_TIME_ELM } from '../../../config/constants';
import { BusLocationData } from '../../../types/bus-location-data';
import { getNaturalNumberFromWaitTimeText } from './get-natural-number-from-wait-time-text';
import { filterFirstWordFromSpaceSeparatedText } from './filter-first-word-from-space-separated-text';


/**
 * make bus location data from a html element.
 *
 * @param {HTMLElement} elm
 * @return {BusLocationData|null} - when improper data is passed, return null
 */
export function makeBusLocationDataFromElement(elm: HTMLElement): BusLocationData | null {
  const wholeText = elm.textContent !== null ? elm.textContent : '';
  const destination = filterFirstWordFromSpaceSeparatedText(wholeText);

  const waitTimesTextElm = elm.querySelector(NEEDLE_TO_WAIT_TIME_ELM); // nullable
  if (waitTimesTextElm === null) {
    throw new Error('expected element is absent');
  }

  const waitTimesText = waitTimesTextElm.textContent !== null ? waitTimesTextElm.textContent : '';
  if (waitTimesText === '') {
    return null;
  }

  const waitTimes = getNaturalNumberFromWaitTimeText(waitTimesText);

  return {
    destination,
    waitTimes
  };
}
