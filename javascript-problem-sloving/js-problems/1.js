/**
 * PROBLEM: Commodity Price Tracker
 * * Design a data structure that tracks the prices of a commodity over time.
 * The system receives data points consisting of a 'timestamp' and a 'price'.
 * Data may arrive out of order, and a price for a specific timestamp may
 * be updated (corrected) if a newer data point for that same timestamp is received.
 * * IMPLEMENT:
 * 1. update(timestamp, price): Updates the price at the given timestamp.
 * 2. getMaxPrice(): Returns the maximum price currently in the system.
 * * CONSTRAINTS:
 * - timestamp: 1 to 10^9
 * - price: 1 to 10^9
 * - Efficiency: Aim for better than O(N) for getMaxPrice.
 */

class PriceTracker {
  tracker = new Map();
  maxPrice = -Infinity;
  constructor() {}
  update(timestamp, price) {
    this.tracker.set(timestamp, price);
    this.maxPrice = Math.max(this.maxPrice, price);
  }

  getMaxPrice() {
    return this.maxPrice;
  }
}

/**
 * TEST CASES
 */
function runTests() {
  console.log("Running Test Case 1...");
  const tracker1 = new PriceTracker();
  tracker1.update(1, 10);
  tracker1.update(2, 5);
  tracker1.update(1, 15); // Update existing
  const res1 = tracker1.getMaxPrice();
  console.assert(res1 === 15, `Test 1 Failed: Expected 15, got ${res1}`);

  console.log("Running Test Case 2 (Price Correction)...");
  const tracker2 = new PriceTracker();
  tracker2.update(10, 100);
  tracker2.update(5, 500);
  tracker2.update(5, 50); // Correcting the previous max
  const res2 = tracker2.getMaxPrice();
  console.assert(res2 === 100, `Test 2 Failed: Expected 100, got ${res2}`);

  console.log("Running Test Case 3 (Out of Order)...");
  const tracker3 = new PriceTracker();
  tracker3.update(100, 50);
  tracker3.update(50, 200);
  tracker3.update(150, 10);
  const res3 = tracker3.getMaxPrice();
  console.assert(res3 === 200, `Test 3 Failed: Expected 200, got ${res3}`);

  console.log("All tests completed!");
}

runTests();
