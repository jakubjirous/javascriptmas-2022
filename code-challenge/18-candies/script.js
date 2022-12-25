/**
 * Candies
 *
 * N children have got M pieces of candy.
 * They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child.
 * Determine how many pieces of candy will be eaten by all the children together.
 * Individual pieces of candy cannot be split.
 *
 * Example:
 * - for n = 3 and m = 10, the output should be candies(n, m) = 9
 * - 3 each child will eat 3 pieces. So the answer is 9
 *
 * Hints:
 * - Math.floor)
 *
 * My solution:
 * https://scrimba.com/scrim/co03d4fa18cb6410c5144886c
 */

const children = 3;
const candy = 10;

const candies = (n, m) => m - (m % n);

console.log(candies(children, candy) === 9);
