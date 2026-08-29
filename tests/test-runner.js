// Standalone Test Execution Runner for All 5 Test Suites
const { runAuthTests } = require('./auth.spec');
const { runCatalogTests } = require('./catalog.spec');
const { runCartTests } = require('./cart.spec');
const { runOrderStateTests } = require('./order-state.spec');
const { runPaymentWebhookTests } = require('./payment-webhook.spec');

console.log('====================================================');
console.log('EXECUTING COMPREHENSIVE E-COMMERCE SUITE (5/5 TESTS)');
console.log('====================================================');

try {
  runAuthTests();
  runCatalogTests();
  runCartTests();
  runOrderStateTests();
  runPaymentWebhookTests();
  console.log('====================================================');
  console.log('SUCCESS: All 5 Test Suites Executed Cleanly (100% Pass)');
  console.log('====================================================');
} catch (error) {
  console.error('TEST FAILURE DETECTED:', error);
  process.exit(1);
}
