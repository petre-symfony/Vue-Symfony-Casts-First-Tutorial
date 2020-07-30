/** Returns a formatted price for the product
 * @param {number} price
 * @returns {string}
 */

export default (price) => (
  (price / 100)
    .toLocaleString('en-US', {
      minimumFractionDigits: 2
    })
)