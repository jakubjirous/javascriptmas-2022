/**
 * Century From Year
 *
 * Given a year, return the century it is in.
 * The first century spans from the year up to and including the year 100, the second from the year 101 up to and including the year 200, etc.
 *
 * Example:
 * - for year = 1905, the output should be centuryFromYear(year) = 20
 * - for year = 1700, the output should be centuryFromYear(year) = 17
 *
 * Hints:
 * - Math.floor()
 *
 * My solution:
 * https://scrimba.com/scrim/co015415c914d1312a087afa5
 */

const centuryFromYear = (year) => Math.ceil(year / 100);

const centuryFromYear2 = (year) => Math.floor((year - 1) / 100) + 1;

console.log(centuryFromYear(1905) === 20);
console.log(centuryFromYear(1700) === 17);

console.log(centuryFromYear2(1905) === 20);
console.log(centuryFromYear2(1700) === 17);
