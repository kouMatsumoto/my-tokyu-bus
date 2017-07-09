import { NEEDLE_TO_MAIN_CONTENT_ELM_OM_TIMETABLE } from '../../../config/constants';
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

  // when prev pages exists, first node is 'A'. else first node is 'TEXT_NODE'
  const timetableTextNode = getFirstTextNodeFromNodeList(mainContentElm.childNodes);
  if (timetableTextNode === null) {
    throw new Error('node is not found. contents has been changed.');
  }

  // textContent is nullable
  const timetableText = timetableTextNode.textContent || '';
  const timetableTextArray = timetableText.split('\n');

  // filter empty strings
  return timetableTextArray.filter((str: string) => str !== '');
}


/**
 * local function for `parseTimetableHtml` above.
 */
function getFirstTextNodeFromNodeList(nodeList: NodeList) {
  if (nodeList.length <= 0) {
    return null;
  }

  for (let i = 0; i < nodeList.length; i++) {
    const node = nodeList[i];
    // we can't use eNode.TEXT_NODE in Node.js env. so use same value `3` instead.
    if (node.nodeType === 3) {
      return node;
    }
  }

  return null;
}
