// @types/jsdom is incorrectly
import { BusLocationData } from '../../types/bus-location-data';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

import { makeBusLocationDataFromElement } from './make-bus-location-data-from-html-element';
import { NEEDLE_TO_MAIN_CONTENT_ELM, NEEDLE_TO_BUS_INFO_ELMS } from '../../config/constants';


/**
 * parse tokyu-bus-location html and get data.
 *
 * @param {string} htmlText - html of tokyu-bus-location
 * @return {BusLocationData[]}
 */
export function parseTokyuBusLocationHtml(htmlText: string): BusLocationData[] {
  const dom = new JSDOM(htmlText);

  // This is table element including all bus-stops contents.
  const mainContentElm = dom.window.document.querySelector(NEEDLE_TO_MAIN_CONTENT_ELM);

  // when coming: '<dd>野沢龍行 <em>05分待ち</em></dd>'
  // when gone  : '<dd>(折)野沢龍行 <em></em></dd>'
  const busInfoElements = mainContentElm.querySelectorAll(NEEDLE_TO_BUS_INFO_ELMS);

  const busLocationDataArray: BusLocationData[] = [];
  for (let elm of busInfoElements.values()) {
    const result = makeBusLocationDataFromElement(elm); // nullable
    if (result) {
      busLocationDataArray.push(result);
    }
  }

  return busLocationDataArray;
}
