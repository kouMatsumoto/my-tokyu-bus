import * as expect from 'expect';
import { makeBusLocationDataFromElement } from './make-bus-location-data-from-html-element';
import { BusLocationData } from '../../../types/bus-location-data';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const testHtml1 = '<dd>野沢龍行 <em>05分待ち</em></dd>';
const testHtml2 = '<dd>野沢龍行 <em></em></dd>';
const testHtml3 = '<dd></dd>';


describe('makeBusLocationDataFromElement', () => {
  let elm1: HTMLElement;
  let elm2: HTMLElement;
  let elm3: HTMLElement;

  beforeEach(() => {
    elm1 = new JSDOM(testHtml1).window.document.querySelector('dd');
    elm2 = new JSDOM(testHtml2).window.document.querySelector('dd');
    elm3 = new JSDOM(testHtml3).window.document.querySelector('dd');
  });

  it('should be return expected data', () => {
    const actual = makeBusLocationDataFromElement(elm1);
    const expected: BusLocationData = {
      destination: '野沢龍行',
      waitTime: 5
    };
    expect(actual).toEqual(expected);
  });

  it('should be return null', () => {
    const actual = makeBusLocationDataFromElement(elm2);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  it('should throw an error', () => {
    expect(() => makeBusLocationDataFromElement(elm3)).toThrow();
  });
});
