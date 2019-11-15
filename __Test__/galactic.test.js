import { AgeCalculator } from './../src/galactic.js';
describe('AgeCalculator', () => {

  test('Should return users age in venus years(rounded)', () => {
    let superNova = new AgeCalculator(30);
    expect(superNova.venus()).toEqual(20);
  });
});
