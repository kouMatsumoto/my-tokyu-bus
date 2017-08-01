const jsdom = require('jsdom');
const { JSDOM } = jsdom;

interface TokyuBusInformation {
  waitTimes: number;
}


const needle = 'td.businfo em';

/**
 * Parse html of tokyu-bus-navi
 *
 * @param html {string} - fetched html of http://tokyu.bus-location.jp/blsys/navi
 * @returns {TokyuBusInformation[]}
 */
export function parseBusLocationHTML(html: string) {
  const dom = new JSDOM(html);

  const businfoElms = dom.window.document.querySelectorAll(needle);

  const infoArray: TokyuBusInformation[] = [];
  for (let elm of businfoElms) {
    const info = parseTextOfElement(elm.textContent);
    if (info) {
      infoArray.push(info);
    }
  }

  // sort `infoArray` by `waitTimes` asc
  if (0 < infoArray.length) {
    infoArray.sort((a, b) => a.waitTimes - b.waitTimes);
  }

  return infoArray;
}


/**
 * To parse dd tag contents of tokyu-bus-navi page html
 *
 * @param text {string} - e.g. '下馬一行 12分待ち', '(折)下馬一行 ', '渋谷駅行 ', '下馬一行 02分待ち'
 * @returns {TokyuBusInformation}
 */
function parseTextOfElement(text: string): TokyuBusInformation | null {
  const regexp = /([0-9]+)分待ち/iu;
  const matchResult = text.match(regexp); // e.g. ["12分待ち","12"], null

  // when bus is coming
  if (Array.isArray(matchResult)) {
    return {
      waitTimes: parseInt(matchResult[1])
    };

    // when no bus is coming
  } else {
    return null;
  }
}
