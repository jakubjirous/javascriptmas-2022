import products from "./data.js";

/**
 * Holiday Gift Shopping
 *
 * You're online shopping for holiday gifts, but money is tight, so we need to look at the cheapest items first.
 * Use the built-in sort() method to write a function that returns a new array of products sorted by price, cheapest to most expensive.
 *
 * Then log the item and the price to the console:
 * - 💕, 0
 * - 🍬, 0.89
 * - 🍫, 0.99
 * - 🧁, 0.99
 * - 📚, 0.99
 * - ... continued
 *
 * My solution:
 * https://scrimba.com/scrim/cob5049b8894f1740c2579727
 */

const sortProducts = (data) => data.sort((a, b) => a.price - b.price);

const listByCheapest = sortProducts(products);

listByCheapest.map((product) =>
  console.log(`${product.product}, ${product.price}`)
);
