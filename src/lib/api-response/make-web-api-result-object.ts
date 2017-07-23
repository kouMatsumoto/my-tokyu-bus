import { TokyuBusInformation, WebApiResult } from '../../types/index';


export function makeWebApiResultObject(informations: TokyuBusInformation[]): WebApiResult {
  return {
    data: informations
  };
}
