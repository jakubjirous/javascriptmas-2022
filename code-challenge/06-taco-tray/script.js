/**
 * Taco Tray
 *
 * Help our chef fill a tray with tacos!
 *
 * getRandomNumberOfTacos()
 * - Make this function return an array that contains between one and ten taco emojis 🌮
 * - Use the following JavaScript concepts:
 *    - Math.random()
 *    - Math.floor()
 *    - new Array()
 *    - Array.fill()
 *
 * My solution:
 * https://scrimba.com/scrim/co130485a923284ba0987cd40
 */

const getRandomNumberOfTacos = () => {
  return new Array(Math.floor(Math.random() * 10) + 1).fill("🌮");
};

const putTacosOnTray = () => {
  return getRandomNumberOfTacos()
    .map((taco) => `<div class="taco">${taco}</div>`)
    .join("");
};

document.getElementById("tray").innerHTML = putTacosOnTray();
