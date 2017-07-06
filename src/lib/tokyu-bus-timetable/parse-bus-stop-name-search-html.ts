import { getQueryString } from '../get-query-string/get-query-string';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


interface ParsedBusStopNameSearchData {
  name: string;
  queryString: string;
}

/**
 *
 */
export function parseBusStopNameSearchHTML(html: string) {
  const dom = new JSDOM(html);
  const anchorElements = dom.window.document.querySelectorAll('a');

  // not hit
  if (anchorElements.length <= 0) {
    return [];
  }

  const result: ParsedBusStopNameSearchData[] = [];
  const AnchorElmArray = <HTMLAnchorElement[]>Array.from(anchorElements);

  // remove anchors of '戻る' and 'トップへ'
  AnchorElmArray.pop();
  AnchorElmArray.pop();

  AnchorElmArray.forEach((e: HTMLAnchorElement) => {
    result.push({
      name: e.textContent || '',
      queryString: getQueryString(e.href)
    });
  });

  return result;
}
