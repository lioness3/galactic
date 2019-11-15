import { AgeCalculator } from './../src/galactic.js';
import { Expectancy } from './../src/expectancy.js'
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
  test('Should return user  age in mercury years(rounded)', () => {
    let mercuryAge = new AgeCalculator(30);
    expect(mercuryAge.mercury()).toEqual(7);
  });
});
describe('Expectancy', () => {
  test('Should compare entered month to life expectancy', () => {
    let lifeExpectancy = new Expectancy(7);
    expect(lifeExpectancy.earthLifeSpan()).toEqual(70);
  });
});
