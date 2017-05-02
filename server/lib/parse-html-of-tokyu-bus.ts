import { TokyuBusInformation } from '../types/index';

// @types/jsdom is incorrectly
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


/**
 * To parse dd tag contents of tokyu-bus-navi page html
 *
 * @param text {string} - e.g. '下馬一行 12分待ち', '(折)下馬一行 ', '渋谷駅行 ', '下馬一行 02分待ち'
 * @returns {TokyuBusInformation}
 */
function parseTextOfDDElement(text: string): TokyuBusInformation {
  const retval: TokyuBusInformation = {
    coming: false,
    gone: false,
    waitingTime: 0
  };

  const regexp = /([0-9]+)分待ち/iu;
  const matchResult = text.match(regexp); // e.g. ["12分待ち","12"], null

  if (Array.isArray(matchResult)) {
    // when bus is coming
    retval.coming = true;
    retval.gone = false;
    retval.waitingTime = parseInt(matchResult[1]);

  } else {
    // when bus had gone
    retval.coming = false;
    retval.gone = true;
  }

  return retval;
}


/**
 * Parse html of tokyu-bus-navi
 *
 * @param html {string} - fetched html of http://tokyu.bus-location.jp/blsys/navi
 * @returns {TokyuBusInformation[]}
 */
export function parseHtmlOfTokyuBus(html?: string): TokyuBusInformation[] {
  const dom = new JSDOM(html);
  const tableDOM = dom.window.document.querySelector('table.routeListTbl');

  // get dl elements in table
  const ddElms = tableDOM.querySelectorAll('dd');

  // result variable to store
  const infoArray: TokyuBusInformation[] = [];

  for (let dd of ddElms) {
    const info = parseTextOfDDElement(dd.textContent);
    if (info.coming) {
      infoArray.push(info);
    }
  }

  // order `infoArray` by `waitingTime` asc
  infoArray.sort((a, b) => a.waitingTime - b.waitingTime);
  return infoArray;
}
