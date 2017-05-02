"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
function parseTextOfDDElement(text) {
    const retval = {
        coming: false,
        gone: false,
        waitingTime: 0
    };
    const regexp = /([0-9]+)分待ち/iu;
    const matchResult = text.match(regexp);
    if (Array.isArray(matchResult)) {
        retval.coming = true;
        retval.gone = false;
        retval.waitingTime = parseInt(matchResult[1]);
    }
    else {
        retval.coming = false;
        retval.gone = true;
    }
    return retval;
}
function parseHtmlOfTokyuBus(html) {
    const dom = new JSDOM(html);
    const tableDOM = dom.window.document.querySelector('table.routeListTbl');
    const ddElms = tableDOM.querySelectorAll('dd');
    const infoArray = [];
    for (let dd of ddElms) {
        const info = parseTextOfDDElement(dd.textContent);
        if (info.coming) {
            infoArray.push(info);
        }
    }
    infoArray.sort((a, b) => a.waitingTime - b.waitingTime);
    return infoArray;
}
exports.parseHtmlOfTokyuBus = parseHtmlOfTokyuBus;
