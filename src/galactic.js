export class AgeCalculator{
  constructor(earthAge,planet){
    this.earthAge = earthAge;
    this.planet = planet;
  }

  planetAgeConversion() {
    let planetAge = this.earthAge * this.planet;

    return planetAge;
  }

};
