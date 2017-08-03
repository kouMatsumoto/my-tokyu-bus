import { useAsync } from '../../../../spec/helpers/use-async';
import * as expect from 'expect';
import { fetchBusLocation } from './fetch-bus-location';


const dsmk = '2598'; // 下馬一丁目
const asmk = '2336'; // 渋谷駅


describe('fetchBusLocation', () => {
  it('should fetch information properly', useAsync(async () => {
    const actual = await fetchBusLocation(dsmk, asmk);
    expect(actual).toBeTruthy();
  }));
});
