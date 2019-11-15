import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  // test('Should return users age in Venus years', () => {
  //   let venusAge = new AgeCalculator(30,.62);
  //   expect(venusAge.planetAgeConversion()).toBeCloseTo(18.6);
  // });
  test('Should return users age in mars years', () => {
    let marsAge = new AgeCalculator(30);
    expect(marsAge.mars()).toBeCloseTo(56.4);
  });
  test('Should return user  age in jupiter years(rounded)', () => {
    let jupiterAge = new AgeCalculator(30);
    expect(jupiterAge.jupiter()).toEqual(3);//failed as expected
  });
});
