const jsdom = require('jsdom');
const { JSDOM } = jsdom;


const departureSelectElmSelector = 'select[name="DSMK"]';
const arrivalSelectElmSelector = 'select[name="ASMK"]';


interface ParsedOptionData {
  text: string;
  value: string;
}

interface ParseBusstopIdsResult {
  departures: ParsedOptionData[];
  arrivals: ParsedOptionData[];
}


export function parseBusstopIdsHTML(html: string): ParseBusstopIdsResult {
  const dom = new JSDOM(html);

  const departureSelectElm = <HTMLSelectElement|null>dom.window.document.querySelector(departureSelectElmSelector);
  const arrivalSelectElm = <HTMLSelectElement|null>dom.window.document.querySelector(arrivalSelectElmSelector);

  if (!departureSelectElm) {
    throw new Error('departure select element is not found.');
  }
  if (!arrivalSelectElm) {
    throw new Error('arrival select element is not found.');
  }

  const departureOptionsElms = <HTMLOptionElement[]>Array.from(departureSelectElm.options);
  const arrivalOptionsElms = <HTMLOptionElement[]>Array.from(arrivalSelectElm.options);

  const departuresData: ParsedOptionData[] = departureOptionsElms.map((elm) => ({
    text: elm.textContent || '',
    value: elm.value
  }));
  const arrivalsData: ParsedOptionData[] = arrivalOptionsElms.map((elm) => ({
    text: elm.textContent || '',
    value: elm.value
  }));

  return {
    departures: departuresData,
    arrivals: arrivalsData,
  };
}
