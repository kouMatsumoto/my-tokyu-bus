import { INDEX_OF_TIMETABLE_TEXT, NEEDLE_TO_MAIN_CONTENT_ELM_OM_TIMETABLE } from '../../../config/constants';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


/**
 * parse html of tokyu-bus and return timetable string array.
 *
 * @param {string} htmlText - html fetched from tokyu-bus-location
 * @return {string[]} - e.g. [ '21:13', '21:14', '21:20' ]
 */
export function parseTimetableHtml(htmlText: string): string[] {
  const dom = new JSDOM(htmlText);

  // This is pre element contains textNode of timetable
  const mainContentElm = dom.window.document.querySelector(NEEDLE_TO_MAIN_CONTENT_ELM_OM_TIMETABLE);
  if (mainContentElm === null) {
    throw new Error('unexpected html. html schema has been changed.');
  }

  // get textNode contains timetable text
  // e.g.
  //   \n
  //   21:13\n
  //   21:14\n
  //   21:20\n
  //   \n
  const timetableTextNode = mainContentElm.childNodes[INDEX_OF_TIMETABLE_TEXT];
  if (timetableTextNode === null) {
    throw new Error('node is not found. contents has been changed.');
  }

  const timetableTextArray = timetableTextNode.textContent.split('\n');

  // filter empty strings
  return timetableTextArray.filter((str: string) => str !== '');
}
