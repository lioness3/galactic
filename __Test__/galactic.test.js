import { AgeCalculator } from './../src/galactic.js';

describe('AgeCalculator', () => {
  test('Should return users age in planet years', () => {
    let planetAge = AgeCalculator(30);
    expect(planetAge).toBeCloseTo(7.2);
  });
  test('Should return users age in Venus years', () => {
    let planetAge = AgeCalculator(30,venus);
    expect(planetAge).toBeCloseTo(7.2);
});
