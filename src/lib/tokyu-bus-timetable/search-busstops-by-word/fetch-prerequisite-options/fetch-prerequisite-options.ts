import * as moment from 'moment';
import { retrieveFolderAndDispValue } from './folder-and-disp-value-html/retrieve-folder-and-disp-value';

/**
 * This application retrieves following options everyday. (e.g. folder, disp_history)
 * This conditions whether options are already retrieved today.
 *
 * ex.) 01, 31
 */
let lastFetchedDay: '';

/**
 * Prerequisite option to retrieve data.
 * This determines weekday type of timetable.
 *
 * ex.) 7, 8
 */
let folder = '';

/**
 * Prerequisite option to retrieve data.
 * This determines timetable version.
 *
 * ex.) 1121
 */
let disp_history = '';

/**
 * Prerequisite Option to retrieve data.
 * This determines date of timetable.
 *
 * ex.) 07/01
 */
let mmdd = '';

interface PrerequisiteOptions {
  folder: string;
  disp_history: string;
  mmdd: string;
}

let prerequisiteOptions: PrerequisiteOptions = {
  folder: '',
  disp_history: '',
  mmdd: '',
};


/**
 * Retrieve prerequisite query values `folder` and `disp_history`.
 * These can be updated everyday.
 */
export async function fetchPrerequisiteOptions(): Promise<PrerequisiteOptions> {
  const today = moment().format('D');
  if (today === lastFetchedDay) {
    return prerequisiteOptions;
  }

  const retrieved = await retrieveFolderAndDispValue();
  folder = retrieved.folder;
  disp_history = retrieved.disp_history;
  mmdd = moment().format('MM/DD');
  return prerequisiteOptions = {
    folder,
    disp_history,
    mmdd,
  };
}
