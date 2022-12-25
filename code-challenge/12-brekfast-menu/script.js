/**
 * Breakfast Menu
 *
 * Our restaurant menu currently only shows the breakfast menu, as it has been hard coded into the HTML file.
 * However, we want to offer a dinner menu instead. Let's fix this using .map()
 *
 * Hints:
 * - 1) First, fetch a reference to the menu <section> from the DOM.
 * - 2) Set the innerHTML content of the menu <section> to...
 * - 3) The dinnerFoods array by mapping over the array and returning the following div for each food in the array:
 *      `<div class="food">FOOD VALUE HERE</div>`
 * - 4) Remember to remove any separating commas between the food divs!
 *
 * My solution:
 * https://scrimba.com/scrim/cob694a0ab422d6619d9f1ec7
 */

const dinnerFoods = ["🍝", "🍔", "🌮"];

const menu = dinnerFoods
  .map((food) => `<div class="food">${food}</div>`)
  .join("");

document.querySelector("#menu").innerHTML = menu;
