import { AgeCalculator } from './../src/galactic.js';
describe('AgeCalculator', () => {
 const earthAge = 30;
  test('Should return users age in venus years(rounded)', () => {
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.venus()).toEqual(48);
  });
  test('Should return users age in mercury years(rounded)', () => {
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.mercury()).toEqual(125);
  });
  test('Should return users age in mars years(rounded)', () => {
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.mars()).toEqual(16);
  });
  test('Should return users age in jupiter years(rounded)', () => {
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.jupiter()).toEqual(3);
  });
  test('Should return time remaining on earth', () => {
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.timeRemainingEarth()).toEqual(139);
  });
  test('Should return time remaining on venus', () => {
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.venusTime()).toEqual(224);
  });
  test('Should return time remaining on mercury', () => {
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.mercuryTime()).toEqual(579);
  });
  test('Should return time remaining on mars', () => {
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.marsTime()).toEqual(74);
  });
  test('Should return time remaining on jupiter', () => {
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.jupiterTime()).toEqual(12);
  });

});
