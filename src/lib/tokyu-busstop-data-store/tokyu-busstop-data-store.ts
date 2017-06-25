/**
 * {string} name - busstop name used as id
 * {string} busstop_cd - busstop id to timetable
 */
interface TokyuBusstopDataStoreObject {
  name: string;
  busstop_cd: string;
}

const objForMap: {[key: string]: TokyuBusstopDataStoreObject} = {
  '下馬一丁目': {
    name: '下馬一丁目',
    busstop_cd: '1710409'
  },
};


export const tokyuBusstopDataStore = new Map<string, TokyuBusstopDataStoreObject>(
  Object.entries(objForMap)
);
