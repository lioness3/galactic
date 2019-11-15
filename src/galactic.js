export class AgeCalculator{
  constructor(earthAge){
    this.earthAge = earthAge;
  }

  venus() {
    let planetAge = this.earthAge * .62;

    return planetAge;
  }



};










// export class AgeCalculator{
//   constructor(earthAge,planet){
//     this.earthAge = earthAge;
//     this.planet = planet;
//   }
//
//   planetAgeConversion() {
//     let planetAge = this.earthAge * this.planet;
//
//     return planetAge;
//   }
//
// const mercury = .24
// const venus = .62
// const mars = 1.88
// const jupiter = 11.86
