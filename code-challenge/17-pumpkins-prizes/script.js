/**
 * Pumpkin's Prizes
 *
 * Scrimba mascot Pumpkin has won the grand prize at an international cat show.
 * Below are Pumpkin's scores from the judges, as well as all the prizes he's won.
 * In all the excitement of victory, they've become a jumbled mess of nested arrays.
 * Let's help Pumpkin by sorting it out.
 *
 * Write a function to flatten nested arrays of strings or numbers into a single array.
 * There's a method for this, but practice both doing it manually and using the method.
 *
 * Example:
 * - input: [1, [4,5], [4,7,6,4], 3, 5]
 * - output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
 *
 * My solution:
 * https://scrimba.com/scrim/co84c4e0586b256ea82b4f350
 */

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

const flatten = (arr) => arr.flat();

const flatten2 = (arr) => [].concat(...arr);

const flatten3 = (arr) => arr.reduce((acc, value) => acc.concat(value), []);

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

console.log(flatten2(kittyPrizes));
console.log(flatten2(kittyScores));

console.log(flatten3(kittyPrizes));
console.log(flatten3(kittyScores));
