export class AgeCalculator{

  constructor(earthAge){
    this.earthAge = earthAge;
  }

  venus() {
    return Math.round(this.earthAge /.62);
  }
  mercury() {
    return Math.round(this.earthAge /.24);
  }
};
