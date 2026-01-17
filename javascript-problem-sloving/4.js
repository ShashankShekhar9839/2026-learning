/*   
Tough category -- because it took time to understand the pub sub concept


Publishers send messages. Subscribers receive them.
They don’t know about each other.

Real-world analogy

📺 YouTube channel → Publisher

You → Subscriber

YouTube platform → Broker

You don’t know the creator personally, and they don’t know you—but messages still flow.


*/

/* 
Requirment  

1️⃣ Basic Pub-Sub with Unsubscribe (MUST-HAVE)
You must support:

subscribe(eventName, callback)

publish(eventName, data)

unsubscribe(eventName, callback) OR return an unsubscribe function

Expectations:

Multiple subscribers per event

Publishing an event calls all subscribers

Unsubscribed callbacks must not be called

No duplicate subscriptions for the same callback

📌 This alone is asked in 80% of interviews.

SUBSCRIBE
  ↓ (store callback)
PUBLISH
  ↓ (find callbacks)
EXECUTE callbacks


*/

function createPubSub() {
  const events = new Map();

  function subscribe(eventName, callback) {
    if (!events.has(eventName)) {
      events.set(eventName, new Set());
    }

    events.get(eventName).add(callback);

    return function unsubscribe() {
      console.log("Unsubscribed event", callback, events);
      events.get(eventName)?.delete(callback);

      // Cleanup empty events
      if (events.get(eventName)?.size === 0) {
        events.delete(eventName);
      }
    };
  }

  function publish(eventName, data) {
    if (!events.has(eventName)) return;

    for (const callback of events.get(eventName)) {
      callback(data);
    }
    console.log(events);
  }

  return { publish, subscribe };
}

const pubsub = createPubSub();

function userHandler(data) {
  console.log("User event:", data);
}

const unsubscribe = pubsub.subscribe("USER_CREATED", userHandler);

pubsub.publish("USER_CREATED", { id: 1 });

unsubscribe();
