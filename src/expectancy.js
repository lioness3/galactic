export class Expectancy{
  constructor(month){
    this.month = month;
  }
  EarthLifeSpan(){
    if(this.month <= 03){
      return 70;
    }else if(this.month <= 07){
      return 90;
    }else if(this.month <=11){
      return 100;
    }else{
      alert("Select the month you were born.");
    };
  };
};
