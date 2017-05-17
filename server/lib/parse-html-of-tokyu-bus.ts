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
function parseTextOfElement(text: string): TokyuBusInformation {
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



// identifier name of element which has bus information
const needle = 'td.businfo em';

/**
 * Parse html of tokyu-bus-navi
 *
 * @param html {string} - fetched html of http://tokyu.bus-location.jp/blsys/navi
 * @returns {TokyuBusInformation[]}
 */
export function parseHtmlOfTokyuBus(html?: string) {
  const dom = new JSDOM(html);

  const businfoElms = dom.window.document.querySelectorAll(needle);

  const infoArray: TokyuBusInformation[] = [];
  for (let elm of businfoElms) {
    const info = parseTextOfElement(elm.textContent);
    if (info.coming) {
      infoArray.push(info);
    }
  }

  // sort `infoArray` by `waitingTime` asc
  infoArray.sort((a, b) => a.waitingTime - b.waitingTime);

  return infoArray;
}
