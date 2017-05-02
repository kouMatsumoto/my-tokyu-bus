"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const urlOfTokyuBus = 'http://tokyu.bus-location.jp/blsys/navi?VID=rsl&EID=nt&PRM=&SCT=1&DSMK=2598&DSN=%E4%B8%8B%E9%A6%AC%E4%B8%80%E4%B8%81%E7%9B%AE&ASMK=2336&ASN=%E6%B8%8B%E8%B0%B7%E9%A7%85&FDSN=0&FASN=0&RAMK=6';
function getHtmlOfTokyuBus() {
    return new Promise((resolve, reject) => {
        const result = {
            status: 0,
            header: {},
            contents: ''
        };
        const req = http.get(urlOfTokyuBus, (res) => {
            result.status = res.statusCode || 400;
            result.header = res.headers;
            const bodyChunk = [];
            res.on('data', (chunk) => {
                bodyChunk.push(chunk);
            });
            res.on('end', () => {
                const body = Buffer.concat(bodyChunk);
                result.contents = body.toString();
                resolve(result);
            });
        });
        req.on('error', (err) => {
            result.error = err;
            reject(result);
        });
    });
}
exports.getHtmlOfTokyuBus = getHtmlOfTokyuBus;
