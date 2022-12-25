/**
 * Insert Dashes
 *
 * Transform a given sentence into a new one with dashes between each two consecutive letters.
 *
 * Example:
 * - for inputString = "aba caba", the output should be insertDashes(inputString) = "a-b-a c-a-b-a"
 *
 * Hints:
 * - join()
 * - split()
 *
 * My solution:
 * https://scrimba.com/scrim/co3e84370bb674aa60149206e
 */

const insertDashes = (arr) =>
  arr
    .split(" ")
    .map((w) => [...w].join("-"))
    .join(" ");

console.log(insertDashes("aba caba") === "a-b-a c-a-b-a");
