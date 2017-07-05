import * as http from 'http';
import { HttpResult } from '../../types';
import { queryParser } from './query-parser';

// lacks type
const jconv = require('jconv');


/**
 * function to execute HTTP-GET request
 */
export function fetchHtml(url: string, queryObj: {[key: string]: string} = {}): Promise<HttpResult> {
  const urlWithQuery = url + queryParser(queryObj);

  return new Promise((resolve, reject) => {
    const result: HttpResult = {
      status: 0,
      header: {},
      contents: ''
    };

    const req = http.get(urlWithQuery, (res) => {
      result.status = res.statusCode || 400;
      result.header = res.headers;

      const bodyChunk: Buffer[] = [];
      res.on('data', (chunk: Buffer) => {
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


/**
 * to fetch HTML whose <meta charset='shift_jis'>.
 *
 * @param url
 * @param queryObj
 * @return {Promise<HttpResult>}
 */
export function fetchSJISHtml(url: string, queryObj: {[key: string]: string} = {}): Promise<HttpResult> {
  const urlWithQuery = url + queryParser(queryObj);

  return new Promise((resolve, reject) => {
    const result: HttpResult = {
      status: 0,
      header: {},
      contents: ''
    };

    const req = http.get(urlWithQuery, (res) => {
      result.status = res.statusCode || 400;
      result.header = res.headers;

      const bodyChunk: Buffer[] = [];
      res.on('data', (chunk: Buffer) => {
        bodyChunk.push(chunk);
      });

      res.on('end', () => {
        const sjisBuffer = Buffer.concat(bodyChunk);
        const utf8Buffer = jconv.convert(sjisBuffer, 'SJIS', 'UTF8');
        result.contents = utf8Buffer.toString();
        resolve(result);
      });
    });

    req.on('error', (err) => {
      result.error = err;
      reject(result);
    });
  });
}
