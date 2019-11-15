import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  test('Should return users age in planet years', () => {
    let planetAge = AgeCalculator(earthAge);
    expect(planetAge).toEqual(2);

  });
});
