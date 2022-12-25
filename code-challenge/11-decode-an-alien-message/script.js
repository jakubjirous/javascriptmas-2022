/**
 * Decode An Alien Message
 *
 * We Come in Peace!
 * We've received what (we assume) is a message of peace and brotherhood from an alien planet.
 * They almost got it right, but the messages are backward. Write functions to reverse the backward messages,
 * so we can read what they have to say!
 *
 * Step 1: Reverse a string
 * - Write a function that takes in a string and returns the reverse of that string.
 * - An interviewer may want to check if you know your string methods, or may want to know if you can reverse a string manually.
 * - Practice both ways!
 *
 * Example:
 * - input: !htrae ot emocleW
 * - output: Welcome to earth!
 *
 * Step 2: Now we'll reverse all strings in an array.
 * - Write a function that takes in an array of strings and returns a new array with all strings reversed.
 *
 * Hints:
 * - You can use reuse your reverseString() function, use string methods, or reverse the strings manually.
 *
 * My solution:
 * https://scrimba.com/scrim/co6fd4eb4807ddc5022c6971e
 */

const title = ":htraE no od ot ffutS";
const example = "!htrae ot emocleW";
const messages = [
  title,
  example,
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

const reverseString = (str) => [...str].reverse().join("");

const manualReverseString = (str) => {
  let tmp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    tmp += str[i];
  }

  return tmp;
};

const reverseStringsInArray = (arr) => arr.map(reverseString);

console.log(reverseString(title));
console.log(manualReverseString(example));
console.log(reverseStringsInArray(messages));
