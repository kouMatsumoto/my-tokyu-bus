"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
function parseTextOfElement(text) {
    const regexp = /([0-9]+)分待ち/iu;
    const matchResult = text.match(regexp);
    if (Array.isArray(matchResult)) {
        return {
            waitTimes: parseInt(matchResult[1])
        };
    }
    else {
        return null;
    }
}
const needle = 'td.businfo em';
function parseHtmlOfTokyuBus(html) {
    const dom = new JSDOM(html);
    const businfoElms = dom.window.document.querySelectorAll(needle);
    const infoArray = [];
    for (let elm of businfoElms) {
        const info = parseTextOfElement(elm.textContent);
        if (info) {
            infoArray.push(info);
        }
    }
    if (0 < infoArray.length) {
        infoArray.sort((a, b) => a.waitTimes - b.waitTimes);
    }
    return infoArray;
}
exports.parseHtmlOfTokyuBus = parseHtmlOfTokyuBus;
