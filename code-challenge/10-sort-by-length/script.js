/**
 * Sort By Length
 *
 * Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length,
 * their relative order must be the same as in the initial array.
 *
 * Example:
 * - inputArray = ["abc", "", "aaa", "a" "zz"]
 * - sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
 *
 * Hints:
 * - sort()
 *
 * My solution:
 * https://scrimba.com/scrim/coa504559bfbf9aba95dfaca6
 */

const sortByLength = (strs) => strs.sort((a, b) => a.length - b.length);

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));
