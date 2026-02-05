/**
 * PROBLEM: The Random Sampler
 * * Implement a class `Sampler` that is initialized with an array of elements.
 * It must provide a way to pick 'k' unique random elements.
 * * REQUIREMENTS:
 * 1. constructor(elements): Initializes the sampler with an array.
 * 2. sample(k): Returns k unique random elements.
 * - Each element must have an equal probability of being picked.
 * - If k > elements.length, return all elements in a random order.
 * 3. Performance: The `sample` method should be optimized for time.
 * - Hint: Think about how to avoid O(N log N) sorting.
 */

class Sampler {
  constructor(elements) {
    this.elements = elements;
  }

  //   Fisher-Yates logic.

  sample(k) {
    let ans = [];
    let n = this.elements.length;
    let arr = [...this.elements];
    if (k > n) {
      return [...this.elements].sort(() => Math.random() - 0.5);
    }

    for (let i = 0; i < k; i++) {
      let randomIndex = Math.floor(Math.random() * (n - i));
      ans.push(arr[randomIndex]);

      arr[randomIndex] = arr[n - 1 - i];
    }
    return ans;
  }
}

/**
 * TEST CASES
 */
function runTests() {
  const pool = ["A", "B", "C", "D", "E", "F", "G"];
  const sampler = new Sampler(pool);

  console.log("--- Test Case 1: Standard Pick ---");
  const res1 = sampler.sample(3);
  console.log("Pick 3:", res1);
  console.assert(res1.length === 3, "Should return exactly 3 elements");

  console.log("--- Test Case 2: Over-size Pick ---");
  const res2 = sampler.sample(10);
  console.log("Pick 10 from pool of 7:", res2);
  console.assert(
    res2.length === 7,
    "Should cap at the maximum length of the pool",
  );

  console.log("--- Test Case 3: Immutability ---");
  const originalLength = pool.length;
  sampler.sample(2);
  console.assert(
    pool.length === originalLength,
    "The original pool array should not be modified!",
  );

  console.log("--- Test Case 4: Uniformity (Visual Check) ---");
  // If you run this many times, each letter should appear roughly equally
  const counts = {};
  for (let i = 0; i < 1000; i++) {
    const [item] = sampler.sample(1);
    counts[item] = (counts[item] || 0) + 1;
  }
  console.table(counts);
}

runTests();
