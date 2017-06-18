"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_html_1 = require("./fetch-html");
const tokyu_bus_name_id_map_1 = require("./tokyu-bus-name-id-map");
const urlOfTokyuBusNavi = 'http://tokyu.bus-location.jp/blsys/navi?VID=lsc&EID=nt&SCT=2';
function getHtmlOfTokyuBus(departure, arrival) {
    const dsmk = tokyu_bus_name_id_map_1.tokyuBusNameIdMap.get(departure);
    const asmk = tokyu_bus_name_id_map_1.tokyuBusNameIdMap.get(arrival);
    const requestUrl = `${urlOfTokyuBusNavi}&DSMK=${dsmk}&ASMK=${asmk}`;
    return fetch_html_1.fetchHtml(requestUrl);
}
exports.getHtmlOfTokyuBus = getHtmlOfTokyuBus;
