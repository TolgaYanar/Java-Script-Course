// BMI = mass / height ** 2 = mass / (height * height)

const markMass = 78;
const markHeight = 1.69

const johnMass = 92;
const johnHeight = 1.95;

const markMBI = markMass / (markHeight * markHeight);
const johnMBI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markMBI > johnMBI;

console.log(markMBI, johnMBI, markHigherBMI);

//Test Data 2
const markMass2 = 95;
const markHeight2 = 1.88
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markMBI2 = markMass2 / (markHeight2 * markHeight2);
const johnMBI2 = johnMass2 / (johnHeight2 * johnHeight2);
const markHigherBMI2 = markMBI2 > johnMBI2;

console.log(markMBI2, johnMBI2, markHigherBMI2);

