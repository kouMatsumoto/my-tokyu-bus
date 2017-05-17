"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_html_1 = require("./fetch-html");
const urlOfTokyuBusNavi = 'http://tokyu.bus-location.jp/blsys/navi?VID=lsc&EID=nt&SCT=2';
function getHtmlOfTokyuBus(from, to) {
    const requestUrl = `${urlOfTokyuBusNavi}&DSMK=${from}&ASMK=${to}`;
    return fetch_html_1.fetchHtml(requestUrl);
}
exports.getHtmlOfTokyuBus = getHtmlOfTokyuBus;
