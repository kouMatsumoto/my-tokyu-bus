import { fetchBusstopIds } from './fetch-busstop-ids';
import { useAsync } from '../../../../spec/helpers/use-async';
import * as expect from 'expect';


describe.only('fetchBusstopIds', () => {
  it('should fetch html without errors', useAsync(async () => {
    const actual = await fetchBusstopIds('下馬一丁目', '中目黒');
    expect(actual).toBeTruthy();
  }));
});
