import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  // test('Should return users age in Venus years', () => {
  //   let venusAge = new AgeCalculator(30,.62);
  //   expect(venusAge.planetAgeConversion()).toBeCloseTo(18.6);
  // });
  test('Should return users age in venus years', () => {
    let venusAge = new AgeCalculator(30);
    expect(venusAge.venus()).toBeCloseTo(18.6);
  });
  test('Should return user  age in jupiter years(rounded)', () => {
    let jupiterAge = new AgeCalculator(30);
    expect(jupiterAge.jupiter()).toEqual(356);
  });
  test('Should return user  age in mars years(rounded)', () => {
    let marsAge = new AgeCalculator(30);
    expect(marsAge.mars()).toEqual(56);
  });
});
