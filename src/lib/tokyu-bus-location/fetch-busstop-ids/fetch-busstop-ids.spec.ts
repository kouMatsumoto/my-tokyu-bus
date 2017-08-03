import { fetchBusstopIds } from './fetch-busstop-ids';
import { useAsync } from '../../../../spec/helpers/use-async';
import * as expect from 'expect';


describe('fetchBusstopIds', () => {
  it('should fetch html without errors', useAsync(async () => {
    const actual = await fetchBusstopIds('大鳥神社', '渋谷');
    expect(actual).toBeTruthy();
  }));
});
