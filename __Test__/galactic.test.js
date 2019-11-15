import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  test('Should return users age in planet years', () => {
    let planetAge = AgeCalculator(30);
    expect(planetAge).toEqual(2);//test failed

  });
});
