const calcAverageHumanAge = (ages) => {
  //Formula to convert dog years to human years
  //"if dog is <= 2 years old, humanAge = 2 * dogAge
  // if dog is > 2 years old, humanAge = 16 + dogAge * 4

  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter((age) => age >= 18);

  const averageAdultAge =
    adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return averageAdultAge;
};

//Test Data
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
