import { HttpResult } from '../../../types/index';
import { queryParser } from '../../fetch-http/query-parser';
import * as http from 'http';

const jconv = require('jconv');

/**
 * to fetch HTML whose <meta charset='shift_jis'>.
 *
 * @param url
 * @param queryObj
 * @return {Promise<HttpResult>}
 */
export function fetchSJISHtml(url: string, queryObj: { [key: string]: string } = {}): Promise<HttpResult> {
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
