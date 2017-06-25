/**
 * {string} name - busstop name used as id
 * {string} busstop_cd - busstop id to timetable
 */
interface TokyuBusstopDataStoreObject {
  name: string;
  busstop_cd: string;
  timetableList: TokyuBusTimetableListData[];
}

interface TokyuBusTimetableListData {
  routeName: string; // e.g. 渋３４
  data: TokyuBusTimetableRouteData[];
}

interface TokyuBusTimetableRouteData {
  routeName: string; // e.g. 渋谷駅(三宿)
  keito_cd: string;
  updown_cd: string;
  pole_cd: string;
}


const objForMap: {[key: string]: TokyuBusstopDataStoreObject} = {
  '下馬一丁目': {
    name: '下馬一丁目',
    busstop_cd: '1710409',
    timetableList: [
      {
        routeName: '渋３４',
        data: [
          {
            routeName: '東京医療センター(都立大学駅北口)',
            keito_cd: '612201',
            updown_cd: '1',
            pole_cd: '02',
          }
        ]
      }
    ]
  },
};


export const tokyuBusstopDataStore = new Map<string, TokyuBusstopDataStoreObject>(
  Object.entries(objForMap)
);
