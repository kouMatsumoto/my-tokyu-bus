"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
function parseTextOfElement(text) {
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
const needle = 'td.businfo em';
function parseHtmlOfTokyuBus(html) {
    const dom = new JSDOM(html);
    const businfoElms = dom.window.document.querySelectorAll(needle);
    const infoArray = [];
    for (let elm of businfoElms) {
        const info = parseTextOfElement(elm.textContent);
        if (info.coming) {
            infoArray.push(info);
        }
    }
    infoArray.sort((a, b) => a.waitingTime - b.waitingTime);
    return infoArray;
}
exports.parseHtmlOfTokyuBus = parseHtmlOfTokyuBus;
