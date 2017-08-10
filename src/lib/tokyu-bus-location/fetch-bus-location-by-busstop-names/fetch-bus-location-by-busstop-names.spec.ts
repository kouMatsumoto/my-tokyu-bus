import { useAsync } from '../../../spec/helpers/use-async';
import * as expect from 'expect';
import { fetchBusLocationByBusstopNames } from './fetch-bus-location-by-busstop-names';


describe('fetchBusLocationByBusstopNames', () => {
  it('should', useAsync(async () => {
    const actual = await fetchBusLocationByBusstopNames('大鳥神社', '渋谷駅');
    expect(actual).toBeTruthy();
  }));
});
