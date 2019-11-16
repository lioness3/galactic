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
    //life expectancy on Earth is 169 years old
    return this.timeLeft = 169 - this.earthAge;
  }
  venusTime() {
    return Math.round(this.timeLeft/.62);
  }
  mercuryTime() {
    return Math.round(this.timeLeft/.24);
  }
  marsTime() {
    return Math.round(this.timeLeft/1.88);
  }
  jupiterTime() {
    return Math.round(this.timeLeft/11.86);
  }
}
