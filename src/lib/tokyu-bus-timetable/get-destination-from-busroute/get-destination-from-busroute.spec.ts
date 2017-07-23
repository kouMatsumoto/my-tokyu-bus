import * as expect from 'expect';
import { getDestinationFromBusroute } from './get-destination-from-busroute';


describe.only('getDestinationFromBusroute', () => {
  it('should scrape 【】', () => {
    const route = '【循環】野沢龍雲寺';
    const expected = '野沢龍雲寺';

    const actual = getDestinationFromBusroute(route);
    expect(actual).toBe(expected);
  });

  it('should scrape 【】 and ()', () => {
    const route = '【循環】野沢龍雲寺(野沢三丁目方面)';
    const expected = '野沢龍雲寺';

    const actual = getDestinationFromBusroute(route);
    expect(actual).toBe(expected);
  });

  it('should scrape ()', () => {
    const route = '野沢龍雲寺(野沢三丁目方面)';
    const expected = '野沢龍雲寺';

    const actual = getDestinationFromBusroute(route);
    expect(actual).toBe(expected);
  });
});
