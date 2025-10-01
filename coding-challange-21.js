// current < recommended portion * 0.9 || current > recommended portion * 1.1

//recommended portion = weight ** 0.75 * 28

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahsDog);

//current > recommended portion * 1.1
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

//current < recommended portion * 0.9
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
const okeyAmount = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okeyAmount));

const dogsEatingOkey = dogs.filter(okeyAmount);
console.log(dogsEatingOkey);

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
