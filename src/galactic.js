export class AgeCalculator{

  constructor(earthAge){
    this.earthAge = earthAge;
  }

  venus() {
    let planetAge = this.earthAge * .62;

    return planetAge;
  }

  jupiter(){
    let planetAge = Math.round(this.earthAge * 11.86);
    return planetAge;
  }
  mars(){
    let planetAge = Math.round(this.earthAge * 1.88);
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
