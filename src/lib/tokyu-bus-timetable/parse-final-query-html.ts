const jsdom = require('jsdom');
const { JSDOM } = jsdom;


interface ParsedFinalQueryData {
  disp_history: string;
  search_str: string;
  page: string;
  kasira1: string;
  kasira2: string;
  kasira3: string;
  line_type: string;
  station_cd: string;
  busstop_cd: string;
  keito_cd: string;
  updown_cd: string;
  pole_cd: string;
  mmdd: string;
  folder: string;
}


/**
 * parse html and create query object to fetch final result html of timetable.
 *
 * @param {string} html
 * @return {ParsedFinalQueryData}
 */
export function parseFinalQueryHTML(html: string) {
  const dom = new JSDOM(html);
  const inputHiddenNodeList = dom.window.document.querySelectorAll('input[type=hidden]');

  // not hit
  if (inputHiddenNodeList.length <= 0) {
    throw new Error('expected input elements is absent');
  }

  const queryObj: any = {};
  const inputElements = <HTMLInputElement[]>Array.from(inputHiddenNodeList);
  inputElements.forEach((e) => queryObj[e.name] = e.value);
  return <ParsedFinalQueryData>queryObj;
}
