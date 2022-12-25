/**
 * Definitely Not FizzBuzz
 *
 * Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers!
 *
 * Scrimba has 100 employees and their employee ID numbers range from 1 to 100.
 *
 * If the employee's ID number is:
 * - divisible by 3 - Vacation!
 * - divisible by 5 - $100,000 bonus!
 * - divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
 * - not divisible by 3 or 5 - :(
 *
 * Write a program to loop through all the ID numbers and print their prize.
 * Your function's output should look something like this:
 *
 * Example:
 * - 1 - :(
 * - 2 - :(
 * - 3 - Vacation!
 * - 4 - :(
 * - 5 - $100,000 bonus!
 *
 * My solution:
 * https://scrimba.com/scrim/coac04697842404844663360a
 */

const bonus = (id) =>
  !(id % 15)
    ? "JACKPOT! 1 Million and a Yacht!"
    : !(id % 5)
    ? "$100,000 bonus!"
    : !(id % 3)
    ? "Vacation!"
    : ":(";

const awardBonuses = () =>
  [...Array(101).keys()]
    .slice(1)
    .map((id) => console.log(`${id} - ${bonus(id)}`));

awardBonuses();
