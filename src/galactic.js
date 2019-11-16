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
  mars() {
    return Math.round(this.earthAge /1.88);
  }
  jupiter() {
    return Math.round(this.earthAge /11.86);
  }
  timeRemainingEarth(){
    return this.timeLeft = 169 - this.earthAge;
  }
  venusTime() {
    return Math.round(this.timeLeft/.62);
  }

};
