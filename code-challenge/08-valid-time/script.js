/**
 * Valid Time
 *
 * Check if the given string is a correct time representation of the 24-hour clock.
 *
 * Example:
 * - for time = "13:58", the output should be validTime(time) = true
 * - for time = "25:51", the output should be validTime(time) = false
 * - for time = "02:76", the output should be validTime(time) = false
 *
 * Hints:
 * - parseInt()
 * - split()
 *
 * My solution:
 * https://scrimba.com/scrim/co74a4d3a9c81c34d55aad08e
 */

const validTime = (str) => {
  const [h, m] = str.split(":").map((x) => +x);
  return h >= 0 && h < 24 && m >= 0 && m < 60;
};

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
