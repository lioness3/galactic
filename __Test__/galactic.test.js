import { AgeCalculator } from './../src/galactic.js';
describe('AgeCalculator', () => {

  test('Should return users age in venus years', () => {
    let venusAge = new AgeCalculator(30);
    expect(venusAge.venus()).toBeCloseTo(20);
  });
