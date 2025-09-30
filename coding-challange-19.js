const calcAverageHumanAge = (ages) => {
  return ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};

//Test Data
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
