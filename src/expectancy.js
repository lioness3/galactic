export class Expectancy{
  constructor(month){
    this.month = month;
  }
  earthLifeSpan(){
    if(this.month <= 3){
      return 70;
    }else if(this.month <= 7){
      return 90;
    }else if(this.month <=11){
      return 100;
    }else{
      alert("Select the month you were born.");
    };
  };
};
