const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
for (let j = 0; j < bills.length; j++) {
  let bill = bills[j];
  let tip = calcTip(bill);
  tips.push(tip);
  let total = tip + bill;
  totals.push(total);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  const average = sum / arr.length;
  return average;
};

const average = calcAverage(totals);
