import { WebApiErrorResult } from '../types/index';


export function makeWebApiErrorResultObject(message: string): WebApiErrorResult {
  return {
    message: message
  };
}
