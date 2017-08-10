import { useAsync } from '../../../../spec/helpers/use-async';
import * as expect from 'expect';
import { fetchBusLocationHTML } from './fetch-bus-location-html';

const dsmk = '2598'; // 下馬一丁目
const asmk = '2336'; // 渋谷駅


describe('fetchBusLocationHTML', () => {
  it('should', useAsync(async () => {
    const actual = await fetchBusLocationHTML(dsmk, asmk);
    expect(actual).toBeTruthy();
  }));
});
