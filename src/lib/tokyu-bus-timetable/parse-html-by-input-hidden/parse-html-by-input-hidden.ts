const jsdom = require('jsdom');
const { JSDOM } = jsdom;


interface ParsedResult {
  [key: string]: string;
}


/**
 * parse html by 'input[type=hidden]' and return object of key-value of it.
 *
 * @param {string} html
 * @return {ParsedResult}
 */
export function parseHTMLByInputHidden(html: string): ParsedResult {
  const dom = new JSDOM(html);
  const inputHiddenNodeList = dom.window.document.querySelectorAll('input[type=hidden]');

  // not hit
  if (inputHiddenNodeList.length <= 0) {
    throw new Error('expected input elements are absent');
  }

  const queryObj: any = {};
  const inputElements = <HTMLInputElement[]>Array.from(inputHiddenNodeList);
  const validInputs = inputElements.filter((e) => e.value !== '');
  validInputs.forEach((e) => queryObj[e.name] = e.value);
  return <ParsedResult>queryObj;
}
