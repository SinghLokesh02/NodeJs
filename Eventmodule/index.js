// NodeJs Event Module

// Nodejs has a built-in module, called "Events"
/*
where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the require() method.

In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:



*/

const EventEmitter = require("events");

const event = new EventEmitter();

// Example 1 - Registering for the event to be fired only one time using once

event.on("sayMyName", () => {
    console.log("Your name is Lokesh Singh");
});
event.emit("sayMyName");



// Example 2 - Create an event emitter instance and register a couple of callbacks

event.on("sayMyName", () => {
    console.log("Your name is Lokesh  ");
});

event.on("sayMyName", () => {
    console.log("Your name is  Singh");
});

event.on("sayMyName", () => {
    console.log("Your name is Mr Lokesh Singh");
});

event.emit("sayMyName");



// Example 3 - Registering for the event with callback parameters

event.on("Sayhello", (name, marks) => {
    console.log(`Hello ${name} your marks is ${marks}`)
})

event.emit("Sayhello","Lokesh Singh",400);