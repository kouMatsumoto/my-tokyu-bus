import * as expect from 'expect';
import { useAsync } from '../../../../spec/support/helpers/use-async';
import { retrieveFolderAndDispValue } from './retrieve-folder-and-disp-value';


describe('retrieveFolderAndDispValue', () => {
  it('should fetch folder and disp_history values', useAsync(async () => {
    const retrieved = await retrieveFolderAndDispValue();

    expect(retrieved.folder).toBeTruthy();
    expect(retrieved.disp_history).toBeTruthy();
  }));
});
