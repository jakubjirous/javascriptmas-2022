/**
 * Count Vowel Consonant
 *
 * You are given a string s that consists of only lowercase English letters.
 * If vowels ("a", "e" "i", "o", and "u") are given a value of 1 and consonants are given a value of 2,
 * return the sum of all the letters in the input string.
 *
 * Example:
 * - For s = "abcde", the output should be countVowelConsonant(s) = 8
 *
 * Hints:
 * - split()
 * - reduce()
 *
 * My solution:
 * https://scrimba.com/scrim/co6424f43a5ac039569e3585c
 */

const countVowelConsonant = (str) =>
  [...str].reduce((acc, ch) => (acc += "aeiou".includes(ch) ? 1 : 2), 0);

console.log(countVowelConsonant("abcde") === 8);
