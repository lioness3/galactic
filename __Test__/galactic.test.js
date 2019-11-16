import { AgeCalculator } from './../src/galactic.js';
describe('AgeCalculator', () => {

  test('Should return users age in venus years(rounded)', () => {
    let superNova = new AgeCalculator(30);
    expect(superNova.venus()).toEqual(48);
  });
  test('Should return users age in mercury years(rounded)', () => {
    let superNova = new AgeCalculator(30);
    expect(superNova.mercury()).toEqual(125);
  });
  test('Should return users age in mars years(rounded)', () => {
    let superNova = new AgeCalculator(30);
    expect(superNova.mars()).toEqual(16);
  });
  test('Should return users age in jupiter years(rounded)', () => {
    let superNova = new AgeCalculator(30);
    expect(superNova.jupiter()).toEqual(16);
  });
});
