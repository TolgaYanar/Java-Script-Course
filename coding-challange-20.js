//Coding Challange #4 is now Coding Challange #5
//This coding challange is not in pdf file

//Your Tasks:
//1. Store the average weight of a 'Husky' dog in a variable 'huskyWeight'
//2. Find the name of the only breed that likes both 'running' and 'fetch' ('dogBothActivities' variable)
//3. Create an array 'allActivities' of all the activities of all the dog breeds
//4. Create an array 'uniqueActivities' like 'allActivities' but with no duplicates
//5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array
//6. Do all the breeds have an average weight of 10kg or more? Log to the console whether 'true' or 'false'
//7. Are there any breeds that are 'active'? 'Active' means that the dog likes at least 3 activities. Log to the console whether 'true' or 'false'

//Bonus: What is the average weight of the heaviest breed that likes to fetch? HINT: Use the 'Math.max()' function along with the ... operator

//TEST DATA:

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["fetch", "agility"],
  },
];

//1.
const huskyWeight = breeds.find((dog) => dog.breed === "Husky").averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities = breeds.find((dog) => {
  return dog.activities.includes("running") && dog.activities.includes("fetch");
});
console.log(dogBothActivities);
console.log(dogBothActivities.breed);

//3.
const allActivities = breeds.flatMap((dog) => dog.activities);
console.log(allActivities);

//4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

//5.
const swimmingDogs = breeds.filter((dog) =>
  dog.activities.includes("swimming")
);
const otherActivities = swimmingDogs
  .flatMap((dog) => dog.activities)
  .filter((activity) => activity !== "swimming");
const uniqueOtherActivities = [...new Set(otherActivities)];
console.log(uniqueOtherActivities);

//6.
const allAbove10kg = breeds.every((dog) => dog.averageWeight >= 10);
console.log(allAbove10kg);
//7.
const anyActiveDog = breeds.some((dog) => dog.activities.length >= 3);
console.log(anyActiveDog);
//Bonus
const heaviestFetchDog = Math.max(
  ...breeds
    .filter((dog) => dog.activities.includes("fetch"))
    .map((dog) => dog.averageWeight)
);
console.log(heaviestFetchDog);
