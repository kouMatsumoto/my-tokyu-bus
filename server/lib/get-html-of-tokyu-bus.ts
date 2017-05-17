import * as http from 'http';

/**
 * # About URL of tokyu.bus-location
 *
 * ### Base URL
 * http://tokyu.bus-location.jp/blsys/navi
 *
 * ### Queries
 * - VID: Decide page type (required)
 * - EID: Decide page type (required) (this is used with VID)
 * - FID:
 * - SID:
 * - PRM:
 * - SCT: Used to differentiate pages. (this is used with VID and EID)
 * - DSMK: Source bus stop number
 * - DSN: Source bus stop name
 * - ASMK: Destination bus stop number
 * - ASN: Destination bus stop name
 * - FASN:
 * - RAMK: Bus route number
 * - FDSN:
 */

// 2017-05-18: old url, this is url of '路線別バス位置情報'
const urlOfTokyuBus = 'http://tokyu.bus-location.jp/blsys/navi?VID=rsl&EID=nt&PRM=&SCT=1&DSMK=2598&DSN=%E4%B8%8B%E9%A6%AC%E4%B8%80%E4%B8%81%E7%9B%AE&ASMK=2336&ASN=%E6%B8%8B%E8%B0%B7%E9%A7%85&FDSN=0&FASN=0&RAMK=6';  // eslint-disable-max-line-length

// 2017-05-18: new url, this is url of '停留所別バス接近情報'
// const urlOfTokyuBusNavi = 'http://tokyu.bus-location.jp/blsys/navi?VID=lsc&EID=nt&SCT=2&DSMK=2598&ASMK=2336';


interface ResultOfGetHtmlOfTokyuBus {
  status: number;
  header: any;
  contents: string;
  error?: any;
}

export function getHtmlOfTokyuBus(): Promise<ResultOfGetHtmlOfTokyuBus> {
  return new Promise((resolve, reject) => {
    const result: ResultOfGetHtmlOfTokyuBus = {
      status: 0,
      header: {},
      contents: ''
    };

    const req = http.get(urlOfTokyuBus, (res) => {
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
