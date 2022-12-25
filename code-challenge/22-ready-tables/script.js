/**
 * Ready Tables
 *
 * Our restaurant has 20 tables and the staff serves 2 tables at a time.
 * They need to know which tables are ready to serve.
 * Let's fix this with what we learned about returning a function inside of another function.
 *
 * Hints:
 * - 1) Create a function called displayTables.
 * - 2) displayTables should map over the array of ready tables returned from getReadyTables to generate the html we need to render our display for the staff.
 *      One div should be generated for each table value.
 *      Here is an example:
 *        `<div class="table">TABLE VALUE HERE</div>`.
 * - 3) Remember to remove the commas after applying map()
 * - 4) Fetch the tables <section> from the DOM
 * - 5) Set the innerHTML content of the tables <section> to the displayTables function call.
 *
 * My solution:
 * https://scrimba.com/scrim/cod28441ba896899d3f0492d1
 */

const random = () => Math.round(Math.random() * 20) + 1;

const getReadyTables = () => [random(), random()];

const displayTables = () =>
  getReadyTables()
    .map((table) => `<div class="table">${table}</div>`)
    .join("");

document.querySelector("#tables").innerHTML = displayTables();
