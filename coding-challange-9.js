//Understand the problem
/*
Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
*/
//For each indices in the array, print "... {value}ºC in {index + 1} days"
// Index 0 -> 1 day
// Index 1 -> 2 days
// Index 2 -> 3 days
//...

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(str);
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
//printForecast(data1.concat(data2));
