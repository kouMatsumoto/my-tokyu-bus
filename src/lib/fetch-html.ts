import * as http from 'http';
import { HttpResult } from '../types';


/**
 * function to execute HTTP-GET request
 */
export function fetchHtml(url: string): Promise<HttpResult> {
  return new Promise((resolve, reject) => {
    const result: HttpResult = {
      status: 0,
      header: {},
      contents: ''
    };

    const req = http.get(url, (res) => {
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
