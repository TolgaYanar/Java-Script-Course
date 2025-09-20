// Data 1

const dolphins = 96 + 108 + 89; 
const averageDolphins = dolphins / 3;
const koalas = 88 + 91 + 110;
const averageKoalas = koalas / 3;

if(averageDolphins > averageKoalas) {
    console.log(`Dolphins win the trophy with an average score of ${averageDolphins}`);
} else if (averageKoalas > averageDolphins) {
    console.log(`Koalas win the trophy with an average score of ${averageKoalas}`);
} else {
    console.log(`It's a draw between Dolphins and Koalas with an average score of ${averageDolphins}`);
}



