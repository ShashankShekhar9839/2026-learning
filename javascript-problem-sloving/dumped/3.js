// Remove cycle from an object   <---> Detect cycle in js

// Removing a cycle means traversing an object graph, detecting repeated references, and breaking them to avoid infinite loops or serialization errors

// First i will write a function to detect a cycle in an object then in second function will remove that cycle

let obj = {};
let obj2 = {};

obj.name = "Shashank";
obj.self = obj;

function hasCycle(obj, seen = new Set()) {
  if (typeof obj !== "object" || obj === null) return false;

  if (seen.has(obj)) return true;

  seen.add(obj);

  for (let key in obj) {
    if ( hasCycle(obj[key], seen)) {
      return true;
    }
  }
  return false;
}

// test cases

const t1 = { a: 1, b: 2 }; // output --> false

const t2 = {}; // output --> true
t2.self = t2;

const t3 = { a: {} }; // output --> true
t3.a.b = t3;

const t4a = {};
const t4b = {};

t4a.ref = t4b; // output --> true
t4b.ref = t4a;

const shared = { x: 1 };
const t5 = {
  a: shared,
  b: shared,
};

let ans = hasCycle(t5);
console.log(ans);
