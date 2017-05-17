"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        const result = {
            status: 0,
            header: {},
            contents: ''
        };
        const req = http.get(url, (res) => {
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
exports.fetchHtml = fetchHtml;
