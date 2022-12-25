/**
 * Emojify
 *
 * Popular services like Slack and GitHub allow for emoji shortscodes,
 * meaning they will detect when a word in a sentence begins and ends with a colon (:)
 * and automatically replace that word with an emoji.
 *
 * These shortcodes allow users to add an emoji to their messages by typing a code rather than searching for an emoji from a list.
 *
 * Example:
 * - typing :smile: will replace that text with 😊
 *
 * 1) Write a function that checks if a lowercase word starts and ends with a colon.
 * - If it does, remove the colons and look up the word in the emoji object. If the word is in the emojis object, return the corresponding emoji.
 * - If it isn't, return the original word.
 *
 * Example:
 * - input: ":party:"
 * - output: 🎉
 *
 * Example:
 * - input: ":flower:"
 * - output: "flower"
 *
 * Example:
 * - input: "elephant"
 * - output: "elephant"
 *
 * 2) Write a function to find any emoji shortcodes in a phrase.
 * - Your function should map over each word in the phrase, emojify any word that begins and ends with a colon, then return the emojified phrase.
 * - Feel free to use your emojify function from the previous exercise!
 *
 * Example:
 * - input: "I :heart: my :cat:"
 * - output: "I 💜 my 🐱"
 *
 * Example:
 * - input: "I :heart: my elephant"
 * - output: "I 💜 my elephant"
 *
 * My solution:
 * https://scrimba.com/scrim/co1f24d87aec27810ae094ab3
 */

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

const emojifyWord = (word) => {
  const key = word.replaceAll(":", "");
  return emojis[key] || word;
};

const emojifyPhrase = (phrase) => phrase.split(" ").map(emojifyWord).join(" ");

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
