/**
 * PROBLEM: EventEmitter (Pub-Sub)
 * Implement a system where subscribers can listen for events
 * and publishers can trigger them with data.
 */

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }

    this.events.get(eventName).add(callback);
    return {
      unsubscribe: () => {
        const listeners = this.events.get(eventName);
        if (listeners) {
          listeners.delete(callback);
        }
        if (listeners.size === 0) {
          this.events.delete(eventName);
        }
      },
    };
  }

  emit(eventName, ...args) {
    const listeners = this.events.get(eventName);
    listeners?.forEach((callback) => {
      callback(...args);
    });
  }
}

/**
 * TEST CASES
 */
function runTests() {
  const emitter = new EventEmitter();

  console.log("--- Test Case 1: Basic Subscribe and Emit ---");
  let dataReceived = null;
  const sub1 = emitter.subscribe("order", (data) => {
    dataReceived = data;
  });

  emitter.emit("order", { id: 123, status: "complete" });
  console.assert(dataReceived?.id === 123, "Test 1 Failed: Data not received");

  console.log("--- Test Case 2: Multiple Subscribers ---");
  let count = 0;
  emitter.subscribe("increment", () => count++);
  emitter.subscribe("increment", () => count++);

  emitter.emit("increment");
  console.assert(count === 2, `Test 2 Failed: Expected count 2, got ${count}`);

  console.log("--- Test Case 3: Unsubscribe ---");
  let val = 0;
  const sub3 = emitter.subscribe("add", () => val++);
  sub3.unsubscribe(); // Stop listening
  emitter.emit("add");
  console.assert(
    val === 0,
    "Test 3 Failed: Callback should not run after unsubscribe",
  );

  console.log("--- Test Case 4: Non-existent Event ---");
  // Should not crash
  try {
    emitter.emit("unknown-event");
    console.log("Test 4 Passed: No crash on unknown event");
  } catch (e) {
    console.error("Test 4 Failed: Crashed on unknown event");
  }

  console.log("All tests completed!");
}

runTests();
