import products from "./data.js";

/**
 * Candy Sale
 *
 * It's the day after Halloween 🎃 and all the candy is on sale!
 *
 * To buy up all the candy, use map() and filter() to put all the candy into a `shoppingCart` array.
 *
 * The new array should contain only the item and the price, like this:
 *
 * Expected output:
 * [
 *    { item: "🍭", price: 2.99 },
 *    { item: "🍫", price: 1.99 },
 *    { item: "🍬", price: 0.89 }
 * ]
 *
 * My solution:
 * https://scrimba.com/scrim/coc8d470aa29fa7ad5d3346df
 */

function getSaleItems(data) {
  return data
    .filter((item) => item.type === "sweet")
    .sort((item, item2) => item2.price - item.price)
    .map((item) => {
      return {
        item: item.item,
        price: item.price,
      };
    });
}

console.log(getSaleItems(products));
