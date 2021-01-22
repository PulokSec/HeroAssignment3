// https://github.com/PulokSec/HeroAssignment3
//1.kilometerToMeter
function kilometerToMeter(kilometer){
  if(kilometer < 0){     //exception conditions
    return "Distance can't be negative!";
  }
  else{
    var meter = kilometer * 1000; //1 kilometer = 1000 meter;
    return meter;
  }
}
//2.budgetCalculator
function budgetCalculator(watch,phone,laptop){
  if(watch<0 || phone<0 || laptop<0){  //exception conditions
    return "Quantity can't be negative!";
  }
  else{
    var totalBudget=(watch*50) + (phone*100) + (laptop*500);
    return totalBudget; //one watch price:50$ one phone price:100$ one laptop price:500$
  }
}
//3.hotelCost
function hotelCost(day){
  var totalHotelCost = 0;
  var first10daysCost = 0;
  var next10daysCost = 0;
  var remainingCost = 0;
  var remaining = 0;
   if(day<0){     //exception conditions
    return "Day can't be negative!"
    }
   else if(day <= 10){
      totalHotelCost = day * 100; //1st 10 days cost 100$
      return totalHotelCost;
    }
    else if(day <= 20){
      first10daysCost = 10 * 100;
      remaining = day - 10;
      remainingCost = remaining * 80; //next 10 days cost 80$
      totalHotelCost = first10daysCost + remainingCost;
      return totalHotelCost;
    }
    else if(day > 20){
      first10daysCost = 10 * 100;
      next10daysCost = 10 * 80;
      remaining = day - 20;
      remainingCost = remaining * 50; //after 20 days cost 50$
      totalHotelCost = first10daysCost + next10daysCost + remainingCost;
      return totalHotelCost;
    }
}
//4.megaFriend
function megaFriend(names){
  var megaName = names[0];
  if(names == ""){   //exception conditions
    return "Array can't be empty!";
  }
  else{
    for(var i = 0; i < names.length; i++){
      var element = names[i];
      if(element.length > megaName.length){
        megaName = element;
      }
    }
    return megaName;
  }
}
//1
var totalMeter = kilometerToMeter(256);
console.log(totalMeter);
//2
var totalBudget = budgetCalculator(1,1,1);
console.log(totalBudget);
//3
var totalHotelCost = hotelCost(21);
console.log(totalHotelCost);
//4
var megaName = megaFriend(["Priyo","Ajoy","Pulok","Adrita","Arpita","Poroma"]);
console.log(megaName);
