import * as expect from 'expect';
import * as moment from 'moment';
import { useAsync } from '../../../../spec/helpers/use-async';
import { fetchPrerequisiteOptions } from './fetch-prerequisite-options';


let actual: any;

describe('fetchPrerequisiteOptions', () => {
  beforeEach(useAsync(async () => {
    actual = await fetchPrerequisiteOptions();
  }));

  describe('fetched value disp_history', () => {
    it('should be 111213', () => {
      expect(actual.disp_history).toBe('111213');
    });
  });

  describe('fetched value folder', () => {
    it('should match 7 or 8 or 9', () => {
      expect(actual.folder).toMatch(/7|8|9/);
    });
  });

  describe('fetched value mmdd', () => {
    it('should be MM/DD', () => {
      expect(actual.mmdd).toBe(moment().format('MM/DD'));
    });
  });
});
