import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  test('Should return users age in Venus years', () => {
    let venusAge = new AgeCalculator(30,.62);
    expect(venusAge.planetAgeConversion()).toBeCloseTo(5)//expected to fail;
  });

});
