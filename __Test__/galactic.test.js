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
    expect(superNova.jupiter()).toEqual(3);
  });
  test('Should return time remaining on earth', () => {
    let earthAge = 30;
    let superNova = new AgeCalculator(earthAge);
    expect(superNova.timeRemainingEarth()).toEqual(139);
  });
  test('Should return time remaining on venus', () => {
    let earthAge = 30;
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.venusTime()).toEqual(224);
  });
  test('Should return time remaining on mercury', () => {
    let earthAge = 30;
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.mercuryTime()).toEqual(579);
  });
  test('Should return time remaining on mars', () => {
    let earthAge = 30;
    let superNova = new AgeCalculator(earthAge);
    superNova.timeRemainingEarth();
    expect(superNova.marsTime()).toEqual(579);//expect fail
  });



});
