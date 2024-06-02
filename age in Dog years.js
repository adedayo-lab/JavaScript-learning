// Program to calc my Age In Dog years
//inut your age below 
var myAge = 28;
// var place holder for my age
let earlyYears = 2;
// place holder for early years using let since it can change
earlyYears *= 10.5;
// without the *= operator would be earlyYears = earlyYeaars * 10.5

let laterYears = myAge - 2;
// the value above would be changed later on
//using the multiplication assignment operator
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears;
//Using a stirng method
var myName = 'Adedayo'.toLowerCase();
//The toLowerCase method returns a string with all lowercase letters.
//Now using String interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);