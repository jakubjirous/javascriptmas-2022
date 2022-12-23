/**
 * Alternating Caps
 *
 * Write a function that takes in a string of letters
 * and returns a sentence in which every other letter is capitalized.
 *
 * Example:
 * - input: "I'm so happy it's Monday"
 * - output: "I'M So hApPy iT'S MoNdAy"
 *
 * My solution:
 * https://scrimba.com/scrim/cofbd459392a478da6b14c299
 */

const altCaps = (str) => {
  return [...str].reduce(
    (acc, ch, i) =>
      !(i % 2) ? acc + ch.toUpperCase() : acc + ch.toLowerCase(),
    ""
  );
};

console.log(altCaps("I'm so happy it's Monday"));
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
