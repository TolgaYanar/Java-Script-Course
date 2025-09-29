//Football betting app

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, scorer] of game?.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(`Average odd: ${average}`);

for (const odd of odds) {
  const teamStr =
    odd === game.odds.x
      ? "draw"
      : `victory ${game[odd === game.odds.team1 ? "team1" : "team2"]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
