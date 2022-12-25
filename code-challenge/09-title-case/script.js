/**
 * Title Case
 *
 * First, write a function that takes in one word and capitalizes the first letter of that word.
 *
 * Example:
 * - input: "scrimba"
 * - output: "Scrimba"
 *
 * Write a function that will capitalize every word in a sentence.
 *
 * Example:
 * - input: "everything, everywhere, all at once"
 * - output: "Everything, Everywhere, All At Once"
 *
 * Hints:
 * - trying using slice() and .toUpperCase()
 *
 * Now write a function that capitalizes every word in a sentence.
 * How can you reuse the function you just wrote?
 *
 * My solution:
 * https://scrimba.com/scrim/co571483fa84654881a53b50e
 */

const capitalizeWord = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const toTitleCase = (str) => str.split(" ").map(capitalizeWord).join(" ");

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
