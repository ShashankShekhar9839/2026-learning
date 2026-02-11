/**
 * PROBLEM: Advanced EventEmitter (Level 2)
 * * REQUIREMENTS:
 * 1. CORE: Implement `subscribe`, `once`, and `emit`.
 * 2. PRIORITY: `subscribe` and `once` take an optional `priority` (Number).
 * - Higher priority values must execute BEFORE lower values.
 * - If priorities are equal, execute in the order they were subscribed (FIFO).
 * 3. ONCE: Listeners added via `once` must be removed immediately after their first execution.
 * 4. UNSUBSCRIBE: `subscribe` and `once` must return an object with an `unsubscribe()` method.
 * 5. DATA: `emit` should support passing multiple arguments to the callbacks.
 * 6. MEMORY: Clean up empty event entries from the storage to prevent leaks.
 */

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback, priority = 0) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push({
      cb: callback,
      priority: priority,
    });
  }

  once(eventName, callback, priority = 0) {
    const listeners = this.events.get(eventName).priority.sort((a, b) => a - b);
    listeners.array.forEach((element) => {
      element.cb();
      this.events.delete(element.cb);
    });
  }

  emit(eventName, ...args) {
    
    

  }
}

/**
 * REVISION TEST SUITE
 */
function runRevisionTests() {
  const ee = new EventEmitter();
  let log = [];

  // Test 1: Priority
  console.log("Testing Priority...");
  ee.subscribe("prio", () => log.push("low"), 1);
  ee.subscribe("prio", () => log.push("high"), 100);
  ee.emit("prio");
  if (log[0] === "high" && log[1] === "low") console.log("✅ Priority Passed");

  // Test 2: Once
  console.log("Testing Once...");
  let onceCount = 0;
  ee.once("single", () => onceCount++);
  ee.emit("single");
  ee.emit("single");
  if (onceCount === 1) console.log("✅ Once Passed");

  // Test 3: Unsubscribe
  console.log("Testing Unsubscribe...");
  let subCount = 0;
  const sub = ee.subscribe("unsub", () => subCount++);
  sub.unsubscribe();
  ee.emit("unsub");
  if (subCount === 0) console.log("✅ Unsubscribe Passed");
}
