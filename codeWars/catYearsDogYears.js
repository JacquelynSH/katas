/*
index 0 = humanYears
index 1 = cat years
  years = 1 +15 
  years = 2 +9 
  years > 2 +4 per year 
index 2 = dog years 
    years = 1 +15 
    years = 2 +9 
    years > 2 +5 per year 

*/


var humanYearsCatYearsDogYears = function(humanYears) {
  dogYears = 0;
  catYears = 0;

  if (humanYears === 1) {
    dogYears = 15;
    catYears = 15;
  } 
  if (humanYears === 2) {
    dogYears = 15 + 9;
    catYears = 15 + 9;
  } 
  if (humanYears > 2) {
    catYears = (humanYears - 2) * 4 + 15 + 9;
    dogYears = (humanYears - 2) * 5 + 15 + 9;
  }

  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(1))
console.log(humanYearsCatYearsDogYears(2))
console.log(humanYearsCatYearsDogYears(10))

