/*
📌 Interview Question: Create an Analytics SDK (Frontend)
Problem Statement

Design and implement a client-side Analytics SDK in JavaScript that can be used by applications to track user events and send them to a backend server.

The SDK should expose a simple public API and handle event collection, storage, and delivery efficiently.


 ---> Functional Requirements

Initialization

The SDK should be initialized once with a configuration object.

Example:

analytics.init({ endpoint: "/collect" });


Event Tracking

Allow applications to track events with a name and optional payload.

analytics.track("page_view", { page: "/home" });


Event Publishing

Tracked events should be queued internally.

Events must NOT be sent immediately on every track call.

 ---> Batching

Events should be sent to the server:

when the batch size limit is reached, OR

after a fixed time interval.

Delivery

Events should be sent asynchronously.

Failure to send should not crash the application.

 ---> Unsent Events

SDK should avoid losing events on page unload (best effort).

Non-Functional Requirements

SDK should not block the main thread.

Multiple track calls should be cheap.

The SDK should be usable across multiple pages/components.

 ---> Constraints

No external libraries

Browser environment only

Backend implementation is NOT required (mock is fine)

*/

/* 
 
Analytics SDK (briefly):

An analytics SDK is a client-side library that applications use to collect, package, and send user interaction data (events) to an analytics server.

In simple terms:

It sits between your app and the analytics backend.

What it does

Tracks events like clicks, page views, form submits

Attaches context (time, page, user, session)

Batches events for performance

Sends data asynchronously to a server

Avoids impacting app performance

*/

class sdkAnalytics {
     events = [];
     
    constructor() {
        let batchSize = 10;
    }
    
    initialise() {

    }

    track() {

    }


}
