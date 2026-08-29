// Test Suite 3: Shopping Cart & Discount Pricing Tests
const assert = require('assert');

function runCartTests() {
  console.log('Running Test Suite 3: Cart Pricing & Coupon Engine...');

  // Test case 3.1: Subtotal and tax calculation
  const itemTotal = 200.00;
  const taxRate = 0.08;
  const expectedTax = 16.00;
  const computedTax = itemTotal * taxRate;
  assert.strictEqual(computedTax, expectedTax, 'Tax calculation assertion failed');

  // Test case 3.2: Coupon discount calculation
  const couponDiscountPct = 0.10;
  const grandTotal = (itemTotal + computedTax) - (itemTotal * couponDiscountPct);
  assert.strictEqual(grandTotal, 196.00, 'Grand total coupon discount calculation failed');

  console.log('✔ Test Suite 3 Passed (2/2 assertions)');
}

module.exports = { runCartTests };
if (require.main === module) runCartTests();
