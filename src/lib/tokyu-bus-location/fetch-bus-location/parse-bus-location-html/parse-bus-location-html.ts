import { filterLocationDataFromText } from './filter-location-data-from-text/filter-location-data-from-text';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

interface BusLocationData {
  routeName: string;
  waitTime: number;
  remainingStops: number;
}

const mainTableSelector = 'table.sekkinListTbl';
const evenTrSelector = '.trEven';
const busInfoTdSelector = 'td.businfo';
// how many odd-even-tr-sets exists in table.
const rowCount = 6;

/**
 * Parse html of tokyu-bus-navi
 *
 * @param html {string} - fetched html of http://tokyu.bus-location.jp/blsys/navi
 * @returns {TokyuBusInformation[]}
 */
export function parseBusLocationHTML(html: string) {
  const dom = new JSDOM(html);

  const mainTableElm = dom.window.document.querySelector(mainTableSelector);
  const evenTrElms = <HTMLTableRowElement[]>Array.from(mainTableElm.querySelectorAll(evenTrSelector));

  const busInfoData: BusLocationData[] = [];
  for (let i = 0; i < rowCount; i++) {
    const trElm = evenTrElms[i];
    const tdElm = trElm.querySelector(busInfoTdSelector);
    // null check
    if (!tdElm) {
      continue;
    }

    const filteredData = filterLocationDataFromText(tdElm.textContent);
    // null check
    if (filteredData === null) {
      continue;
    }

    busInfoData.push({
      ...filteredData,
      remainingStops: i
    });
  }

  return busInfoData;
}
