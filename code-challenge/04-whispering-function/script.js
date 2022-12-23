/**
 * Whispering Function
 *
 * Write a function `whisper` that takes in a sentence
 * and returns a new sentence in all lowercase letters with
 * "shh..." at the beginning.
 *
 * The function should also remove an exclamation point
 * at the end of the sentence, if there is one.
 *
 * Example:
 * - input: "The KITTENS are SLEEPING!"
 * - output: "shh... the kittens are sleeping"
 *
 * Hints:
 * - endsWith
 * - slice
 *
 * My solution:
 * https://scrimba.com/scrim/cocd44ee4a9b08e7b1e58aced
 */

const whisper = (input) =>
  `shh... ${input.replace(/(\.|!)$/, "").toLowerCase()}`;

console.log(whisper("PLEASE STOP SHOUTING"));
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("PLEASE STOP SHOUTING!"));

console.log(whisper("MA'AM, this is a Wendy's"));
console.log(whisper("MA'AM, this is a Wendy's."));
console.log(whisper("MA'AM, this is a Wendy's!"));
