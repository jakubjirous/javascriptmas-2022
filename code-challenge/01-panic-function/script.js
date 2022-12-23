/**
 * Panic Function
 *
 * Write a PANIC! function. The function should take in a sentence and return the same
 * sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
 * built-in string methods.
 *
 * If the string is a phrase or sentence, add a 😱 emoji in between each word.
 *
 * Example:
 * - input: "Hello"
 * - output: "HELLO!"
 *
 * Example:
 * - input: "I'm almost out of coffee"
 * - output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
 *
 * My solution:
 * https://scrimba.com/scrim/coffe4a45864a2ee3a8f21175
 */

const panic = (input) => `${input.split(" ").join(" 😱 ").toUpperCase()}!`;

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("Hello"));
