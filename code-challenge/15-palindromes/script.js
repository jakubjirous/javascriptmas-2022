/**
 * Palindromes
 *
 * Palindromes are words that are the same forward or backward.
 * For example, the words "noon" and "kayak" are a palindromes.
 *
 * Write a function to check if a lowercased string of letters is a palindrome.
 * If the word is palindrome, return true. If it isn't, return false.
 *
 * My solution:
 * https://scrimba.com/scrim/co3ef4d6d83948486cd47eb28
 */

const isPalindrome = (str) => str === [...str].reverse().join("");

console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
