// Football game events map

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];

// 2. Remove the unfair yellow card from minute 64
gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes"
const time = [...gameEvents.keys()];

const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min)

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
