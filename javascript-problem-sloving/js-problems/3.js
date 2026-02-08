/**
 * PROBLEM: Remove Cycles
 * Implement the function to detect and break circular references.
 */

function removeCycles(obj, visited = []) {
  let ans = {};
  if (obj === null) {
    return obj;
  }

  for (let key in obj) {
    if (visited.includes(obj[key])) {
      obj[key] = null;
    }
    ans[key] = obj[key];
    visited.push(obj[key]);
    if (typeof obj[key] === "object") {
      removeCycles(obj[key], visited);
    }
  }
}

/**
 * TEST CASES
 */
function runTests() {
  console.log("--- Test Case 1: Simple Cycle ---");
  const a = { name: "Object A" };
  a.self = a; // Direct cycle

  const cleanA = removeCycles(a);
  console.log("Is original 'a' safe?", !!a.self); // Should be true
  console.log("Is 'cleanA' safe?", cleanA.self === null || !("self" in cleanA));
  // JSON.stringify will throw an error if this fails
  try {
    console.log("Stringified:", JSON.stringify(cleanA));
  } catch (e) {
    console.error("Test 1 Failed: Circular structure remains");
  }

  console.log("\n--- Test Case 2: Deep Nested Cycle ---");
  const node1 = { val: 1 };
  const node2 = { val: 2 };
  node1.next = node2;
  node2.next = node1; // Cycle: 1 -> 2 -> 1

  const cleanNode = removeCycles(node1);
  console.log("Node 1 next is Node 2:", cleanNode.next.val === 2);
  console.log("Node 2 next is broken:", cleanNode.next.next === null);

  console.log("\n--- Test Case 3: Array with Cycles ---");
  const arr = [1, 2];
  arr.push(arr); // Array contains itself

  const cleanArr = removeCycles(arr);
  console.assert(cleanArr.length === 3, "Array length should be 3");
  console.assert(cleanArr[2] === null, "Cyclic array element should be null");

  console.log("All tests completed!");
}

runTests();
